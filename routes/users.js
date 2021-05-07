var express = require("express");
var router = express.Router();
const { User, Question, Answer } = require("../db/models");
const { check, validationResult } = require("express-validator");
const { asyncHandler, csrfProtection } = require("./utils");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser } = require("../auth");

const userValidators = [
  //TODO Need to set up user validators.
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for First Name")
    .isLength({ max: 100 })
    .withMessage("First Name must not be more than 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Email Address is already in use by another account"
          );
        }
      });
    }),
  check("bio")
    .exists({ checkFalsy: false })
    .isLength({ max: 1000 })
    .withMessage("Your bio is too long!"),
  check("avatar")
    .exists({ checkFalsy: false })
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    ) //if theres an error lets make custom validation rule
    .withMessage("Not a valid URL for avatar"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

const userEditValidators = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for First Name")
    .isLength({ max: 100 })
    .withMessage("First Name must not be more than 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email"),
  check("bio")
    .exists({ checkFalsy: false })
    .isLength({ max: 1000 })
    .withMessage("Your bio is too long!"),
  check("avatar")
    .exists({ checkFalsy: false })
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    ) //if theres an error lets make custom validation rule
    .withMessage("Not a valid URL for avatar"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
]

router.get("/register", csrfProtection, (req, res, next) => {
  const user = User.build();
  res.render("user-register", {
    title: "User Register",
    csrfToken: req.csrfToken(),
    user,
  });
});

router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { name, email, bio, password, avatar } = req.body;
    const user = User.build({ name, email, bio, avatar });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      //TODO hash password.
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-register", {
        title: "User Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", {
    title: "User Login",
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (!user) {
          return Promise.reject("This email address doesn't exist");
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password"),
];

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );
        if (passwordMatch) {
          loginUser(req, res, user);
          // TODO persist user data from page to page?
          return res.redirect("/");
        }
      }
      errors.push("Login failed for email and password"); // for security
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render("user-login", {
      title: "User Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  // res.redirect('/login')
})

router.get(
  "/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId, {
      include: [Question, Answer]
    });
    
    res.render("user-profile", {
      title: "User Profile",
      user,
      csrfToken: req.csrfToken(),
    });
  }
));

router.get(
  "/edit/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);

    res.render("user-edit-profile", {
      title: "Edit User Profile",
      user,
      csrfToken: req.csrfToken(),
    });
  }
));

router.post(
  "/edit/:id(\\d+)",
  csrfProtection,
  userEditValidators,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userToUpdate = await User.findByPk(userId);
    
    const { name, email, bio, password, avatar } = req.body;
    const user = { name, email, bio, password, avatar };
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await userToUpdate.update(user);
      res.redirect(`/users/${userId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-register", {
        title: "User Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  "/delete/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);

    res.render("user-delete-profile", {
      title: "Delete User Profile",
      user,
      csrfToken: req.csrfToken(),
    });
  }
));

router.post(
  "/delete/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);

    await user.destroy();
    res.redirect("/");
  })
)
module.exports = router;

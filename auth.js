const { User } = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
    user: user,
  };
};

const restoreUser = async (req, res, next) => {
  console.log(req.session);
  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (error) {
      res.locals.authenticated = false;
      next(error);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

const logoutUser = (req, res) => {
  delete req.session.auth;
  res.redirect("/users/login");
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/users/login");
  }
  return next();
};

module.exports = {
  loginUser,
  restoreUser,
  logoutUser,
  requireAuth,
};

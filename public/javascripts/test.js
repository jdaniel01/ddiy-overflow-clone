//answerId include User
This is value of vote Vote {
    dataValues: {
      id: 70,
      ownerId: 99,
      answerId: 67,
      value: false,
      createdAt: 2021-05-06T02:50:53.865Z,
      updatedAt: 2021-05-06T02:50:53.865Z,
      Answer: Answer {
        dataValues: [Object],
        _previousDataValues: [Object],
        _changed: {},
        _modelOptions: [Object],
        _options: [Object],
        isNewRecord: false
      },
      User: User {
        dataValues: [Object],
        _previousDataValues: [Object],
        _changed: {},
        _modelOptions: [Object],
        _options: [Object],
        isNewRecord: false
      }
    },
    _previousDataValues: {
      id: 70,
      ownerId: 99,
      answerId: 67,
      value: false,
      createdAt: 2021-05-06T02:50:53.865Z,
      updatedAt: 2021-05-06T02:50:53.865Z,
      Answer: Answer {
        dataValues: [Object],
        _previousDataValues: [Object],
        _changed: {},
        _modelOptions: [Object],
        _options: [Object],
        isNewRecord: false
      },
      User: User {
        dataValues: [Object],
        _previousDataValues: [Object],
        _changed: {},
        _modelOptions: [Object],
        _options: [Object],
        isNewRecord: false
      }
    },
    _changed: {},
    _modelOptions: {
      timestamps: true,
      validate: {},
      freezeTableName: false,
      underscored: false,
      paranoid: false,
      rejectOnEmpty: false,
      whereCollection: { id: '70' },
      schema: null,
      schemaDelimiter: '',
      defaultScope: {},
      scopes: {},
      indexes: [],
      name: { plural: 'Votes', singular: 'Vote' },
      omitNull: false,
      sequelize: Sequelize {
        options: [Object],
        config: [Object],
        dialect: [PostgresDialect],
        queryInterface: [QueryInterface],
        models: [Object],
        modelManager: [ModelManager],
        connectionManager: [ConnectionManager],
        importCache: [Object]
      },
      hooks: {}
    },
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      include: [ [Object], [Object] ],
      includeNames: [ 'Answer', 'User' ],
      includeMap: { Answer: [Object], User: [Object] },
      includeValidated: true,
      attributes: [ 'id', 'ownerId', 'answerId', 'value', 'createdAt', 'updatedAt' ],
      raw: true
    },
    isNewRecord: false,
    Answer: Answer {
      dataValues: {
        id: 67,
        answer: 'Bacon ipsum dolor amet ground round ribeye capicola, meatloaf cupim ham chuck ham hock tongue chislic sirloin pig burgdoggen hamburger kielbasa.  Pork doner meatloaf chuck shoulder hamburger ribeye cupim turkey pig jowl.  Landjaeger alcatra brisket, chicken ball tip tri-tip spare ribs ground round pig andouille meatloaf short ribs tail sirloin.  Biltong strip steak andouille pork loin chislic chicken sausage.',
        ownerId: 7,
        questionId: 7,
        content: '',
        createdAt: 2021-05-05T00:00:00.000Z,
        updatedAt: 2021-05-05T00:00:00.000Z
      },
      _previousDataValues: {
        id: 67,
        answer: 'Bacon ipsum dolor amet ground round ribeye capicola, meatloaf cupim ham chuck ham hock tongue chislic sirloin pig burgdoggen hamburger kielbasa.  Pork doner meatloaf chuck shoulder hamburger ribeye cupim turkey pig jowl.  Landjaeger alcatra brisket, chicken ball tip tri-tip spare ribs ground round pig andouille meatloaf short ribs tail sirloin.  Biltong strip steak andouille pork loin chislic chicken sausage.',
        ownerId: 7,
        questionId: 7,
        content: '',
        createdAt: 2021-05-05T00:00:00.000Z,
        updatedAt: 2021-05-05T00:00:00.000Z
      },
      _changed: {},
      _modelOptions: {
        timestamps: true,
        validate: {},
        freezeTableName: false,
        underscored: false,
        paranoid: false,
        rejectOnEmpty: false,
        whereCollection: [Object],
        schema: null,
        schemaDelimiter: '',
        defaultScope: {},
        scopes: {},
        indexes: [],
        name: [Object],
        omitNull: false,
        sequelize: [Sequelize],
        hooks: {}
      },
      _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        include: undefined,
        includeNames: undefined,
        includeMap: undefined,
        includeValidated: true,
        raw: true,
        attributes: undefined
      },
      isNewRecord: false
    },
    User: User {
      dataValues: {
        id: 99,
        name: 'Blanche38',
        email: 'Ezekiel.Schulist19@gmail.com',
        bio: 'Quibusdam et dolores.',
        hashedPassword: <Buffer 24 32 61 24 31 30 24 55 53 32 6f 43 78 75 47 41 68 4e 34 30 6e 78 36 77 47 35 59 56 2e 37 72 42 34 30 45 45 5a 68 63 4a 74 42 77 4a 71 55 51 62 42 50 ... 10 more bytes>,
        avatar: 'https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg',
        createdAt: 2021-05-06T02:50:53.691Z,
        updatedAt: 2021-05-06T02:50:53.691Z
      },
      _previousDataValues: {
        id: 99,
        name: 'Blanche38',
        email: 'Ezekiel.Schulist19@gmail.com',
        bio: 'Quibusdam et dolores.',
        hashedPassword: <Buffer 24 32 61 24 31 30 24 55 53 32 6f 43 78 75 47 41 68 4e 34 30 6e 78 36 77 47 35 59 56 2e 37 72 42 34 30 45 45 5a 68 63 4a 74 42 77 4a 71 55 51 62 42 50 ... 10 more bytes>,
        avatar: 'https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg',
        createdAt: 2021-05-06T02:50:53.691Z,
        updatedAt: 2021-05-06T02:50:53.691Z
      },
      _changed: {},
      _modelOptions: {
        timestamps: true,
        validate: {},
        freezeTableName: false,
        underscored: false,
        paranoid: false,
        rejectOnEmpty: false,
        whereCollection: [Object],
        schema: null,
        schemaDelimiter: '',
        defaultScope: {},
        scopes: {},
        indexes: [],
        name: [Object],
        omitNull: false,
        sequelize: [Sequelize],
        hooks: {}
      },
      _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        include: undefined,
        includeNames: undefined,
        includeMap: undefined,
        includeValidated: true,
        raw: true,
        attributes: undefined
      },
      isNewRecord: false
    }
  }


//ownerId include Answer User
This is value of vote Vote {
  dataValues: {
    id: 102,
    ownerId: 37,
    answerId: 5,
    value: true,
    createdAt: 2021-05-06T02:50:53.865Z,
    updatedAt: 2021-05-06T02:50:53.865Z,
    Answer: Answer {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      isNewRecord: false
    },
    User: User {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      isNewRecord: false
    }
  },
  _previousDataValues: {
    id: 102,
    ownerId: 37,
    answerId: 5,
    value: true,
    createdAt: 2021-05-06T02:50:53.865Z,
    updatedAt: 2021-05-06T02:50:53.865Z,
    Answer: Answer {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      isNewRecord: false
    },
    User: User {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      isNewRecord: false
    }
  },
  _changed: {},
  _modelOptions: {
    timestamps: true,
    validate: {},
    freezeTableName: false,
    underscored: false,
    paranoid: false,
    rejectOnEmpty: false,
    whereCollection: { id: 102 },
    schema: null,
    schemaDelimiter: '',
    defaultScope: {},
    scopes: {},
    indexes: [],
    name: { plural: 'Votes', singular: 'Vote' },
    omitNull: false,
    sequelize: Sequelize {
      options: [Object],
      config: [Object],
      dialect: [PostgresDialect],
      queryInterface: [QueryInterface],
      models: [Object],
      modelManager: [ModelManager],
      connectionManager: [ConnectionManager],
      importCache: [Object]
    },
    hooks: {}
  },
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    include: [ [Object], [Object] ],
    includeNames: [ 'Answer', 'User' ],
    includeMap: { Answer: [Object], User: [Object] },
    includeValidated: true,
    attributes: [ 'id', 'ownerId', 'answerId', 'value', 'createdAt', 'updatedAt' ],
    raw: true
  },
  isNewRecord: false,
  Answer: Answer {
    dataValues: {
      id: 5,
      answer: 'Bacon ipsum dolor amet andouille bacon kevin pig frankfurter filet mignon short loin strip steak chicken chislic venison pastrami shankle burgdoggen pork chop.  Shank short loin fatback, corned beef porchetta swine venison cow.  Venison swine strip steak fatback tri-tip turducken ground round capicola.  Drumstick pig kielbasa short loin kevin.',
      ownerId: 6,
      questionId: 2,
      content: '',
      createdAt: 2021-05-05T00:00:00.000Z,
      updatedAt: 2021-05-05T00:00:00.000Z
    },
    _previousDataValues: {
      id: 5,
      answer: 'Bacon ipsum dolor amet andouille bacon kevin pig frankfurter filet mignon short loin strip steak chicken chislic venison pastrami shankle burgdoggen pork chop.  Shank short loin fatback, corned beef porchetta swine venison cow.  Venison swine strip steak fatback tri-tip turducken ground round capicola.  Drumstick pig kielbasa short loin kevin.',
      ownerId: 6,
      questionId: 2,
      content: '',
      createdAt: 2021-05-05T00:00:00.000Z,
      updatedAt: 2021-05-05T00:00:00.000Z
    },
    _changed: {},
    _modelOptions: {
      timestamps: true,
      validate: {},
      freezeTableName: false,
      underscored: false,
      paranoid: false,
      rejectOnEmpty: false,
      whereCollection: [Object],
      schema: null,
      schemaDelimiter: '',
      defaultScope: {},
      scopes: {},
      indexes: [],
      name: [Object],
      omitNull: false,
      sequelize: [Sequelize],
      hooks: {}
    },
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      include: undefined,
      includeNames: undefined,
      includeMap: undefined,
      includeValidated: true,
      raw: true,
      attributes: undefined
    },
    isNewRecord: false
  },
  User: User {
    dataValues: {
      id: 37,
      name: 'Mavis.Mayer',
      email: 'Addison75@yahoo.com',
      bio: 'Beatae quo soluta rem consequatur deserunt accusantium.',
      hashedPassword: <Buffer 24 32 61 24 31 30 24 57 37 4a 76 6d 32 79 45 4a 73 45 62 37 6f 6c 51 41 7a 41 4b 76 2e 31 31 38 38 78 6b 37 6b 55 70 63 38 6b 49 72 70 49 38 4f 2f 4f ... 10 more bytes>,
      avatar: 'https://cdn.fakercloud.com/avatars/mrjamesnoble_128.jpg',
      createdAt: 2021-05-06T02:50:49.411Z,
      updatedAt: 2021-05-06T02:50:49.411Z
    },
    _previousDataValues: {
      id: 37,
      name: 'Mavis.Mayer',
      email: 'Addison75@yahoo.com',
      bio: 'Beatae quo soluta rem consequatur deserunt accusantium.',
      hashedPassword: <Buffer 24 32 61 24 31 30 24 57 37 4a 76 6d 32 79 45 4a 73 45 62 37 6f 6c 51 41 7a 41 4b 76 2e 31 31 38 38 78 6b 37 6b 55 70 63 38 6b 49 72 70 49 38 4f 2f 4f ... 10 more bytes>,
      avatar: 'https://cdn.fakercloud.com/avatars/mrjamesnoble_128.jpg',
      createdAt: 2021-05-06T02:50:49.411Z,
      updatedAt: 2021-05-06T02:50:49.411Z
    },
    _changed: {},
    _modelOptions: {
      timestamps: true,
      validate: {},
      freezeTableName: false,
      underscored: false,
      paranoid: false,
      rejectOnEmpty: false,
      whereCollection: [Object],
      schema: null,
      schemaDelimiter: '',
      defaultScope: {},
      scopes: {},
      indexes: [],
      name: [Object],
      omitNull: false,
      sequelize: [Sequelize],
      hooks: {}
    },
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      include: undefined,
      includeNames: undefined,
      includeMap: undefined,
      includeValidated: true,
      raw: true,
      attributes: undefined
    },
    isNewRecord: false
  }
}

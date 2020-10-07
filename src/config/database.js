require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.emv.test' : '.env',
  // serve para saber qual .env se vai usar
});

module.exports = {
  url: process.env.DATABASE_URL,
  define: {
    // é para quando os arquivos são criados e por isso temos o updated e created
    timestamp: true,
    undercored: true,
    undercoredAll: true,
  },
  dialect: process.env.DB_DIALECT,
  storage: '__tests__/database.sqlite',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

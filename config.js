require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  host: process.env.HOST,
  port: process.env.PORT,
  publicRoute: process.env.PUBLIC_ROUTE,
  filesRoute: process.env.FILES_ROUTE,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  sign: process.env.SIGN,
};

module.exports = config;

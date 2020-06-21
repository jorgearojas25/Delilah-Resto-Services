require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 3000,
  publicRoute: process.env.PUBLIC_ROUTE || '/',
  filesRoute: process.env.FILES_ROUTE || "/files",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "D3s4rr0ll0",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "delilah",
  dbPort: process.env.DB_PORT || "3306",
  sign: process.env.SIGN || "p!h6Tc3A8yMU",
  version: process.env.VERSION || "v1",
};

module.exports = config;

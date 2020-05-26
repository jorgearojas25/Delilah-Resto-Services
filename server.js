const config = require('./config');
const express = require('express');
const db = require('./lib/db');
const app = express();
const server = require('http').Server(app);
const router = require('./network/routes');

const dbClient = new db().connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

server.listen(config.port, () => {
    console.log(`la app esta funcionando en ${config.host}:${config.port}`);
  });
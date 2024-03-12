#!/usr/bin/node

const express = require("express");
const router = require("./routes/index");

const port = parseInt(process.env.PORT, 10) || 5000;

const server = express();

server.use(express.json());
server.use(router);

server.listen(PORT, () =>
  console.log(`The server is running on port: ${PORT}`)
);

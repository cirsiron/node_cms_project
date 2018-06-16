const mysql = require('mysql');
const db = require("./db");

module.exports = mysql.createPool(db.mysql);
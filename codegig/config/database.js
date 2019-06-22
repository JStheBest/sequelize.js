const Sequelize = require("sequelize");
//connect to local host
module.exports = new Sequelize("gigs", "postgres", "123456", {
  host: "localhost",
  port: "5433",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//mysql from xampp
/*
module.exports = new Sequelize("Group1", "root", "password", {
  host: "192.168.64.2",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
*/

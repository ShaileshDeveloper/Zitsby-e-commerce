const bcrypt = require("bcryptjs")

const pass = bcrypt.hashSync('12345',10)
console.log(pass)
// const dotenv = require("dotenv");

const usersData = [
  {
    name: "admin",
    email: "admin@example.com",
    password: '123456',
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "John@example.com",
    password: '123456',
  },
  {
    name: "Jane doe",
    email: "jane@example.com",
    password: '123456',
  },
];

module.exports = {usersData};

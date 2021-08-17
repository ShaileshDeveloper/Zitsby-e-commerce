const bcrypt = require("bcryptjs")

const pass = bcrypt.hashSync('12345',10)
console.log(pass)

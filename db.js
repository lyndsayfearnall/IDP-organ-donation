

const mysql = require("mysql")
const config = require('./config')

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
})


module.exports = connection
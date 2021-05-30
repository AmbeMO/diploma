const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: '228',
    host: "localhost",
    port: 5432,
    database: "colinary_book"
})


module.exports = pool

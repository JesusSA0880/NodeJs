const mysql = require('mysql');

module.exports = () => {

    return mysql.createConnection({
        host: 'btqlrwtzxy9gktdrwn1v-mysql.services.clever-cloud.com',
        user: 'uknicqjlxhvs7zlu',
        password: '0iR9rBp3B2upIu0cFHLu',
        database: 'btqlrwtzxy9gktdrwn1v',
        port: '3306'
    })

}
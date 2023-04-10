const mssql = require ('mssql')

class Connection{
    constructor (host, user, database) {
        this.host = host
        this.user = user
        this.database = database
    }

    async connect () {
        this.connection = await mssql.connect({
            user: this.user,
            server: this.host,
            database: this.database,
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        })
    }
    async disconnect () {
        await this.connection.close ()
    }
    async query (consulta) {
        return await mssql.query (consulta)
    }
}

module.exports = Connection
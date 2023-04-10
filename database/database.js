// const mysql = require('mysql');
// const dotenv = require('dotenv');
// dotenv.config({path:'./env/.env'});
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

// connection.connect((error)=>{
//     if(error){
//         console.log('El error de conexion es:' +error);
//         return;
//     }
//     console.log('¡Conectado a la base de datos!')
// });
// module.exports = connection;


const get_config = (database) => {
    return {
        user: root,
        server: localhost,
        database: database,
        options: {
            encrypt: true, 
            trustServerCertificate: true
        }
    }
}

module.exports.get_config = get_config
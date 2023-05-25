const session = require('express-session')
// const database = require ('../../database/database')
const mssql = require ('mssql')
const mysql = require('mysql');


var conexion = mysql.createConnection({
	host : 'localhost',
	database: 'jobcourses',
	user: 'root',
	password: '',
})

conexion.connect(function(error){
	if(eror){
		throw error;
	}else{
		console.log('Conexion Exitosa');
	}
})

conexion.query(`SELECT * FROM user`, function (error, filas){
	if(error){
		throw error;
	}else{
		filas.forEach(fila => {
			console.log(fila);
		});
	};
});

conexion.end();

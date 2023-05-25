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
			if(error){
				throw error;
			}else{
				console.log('Conexion Exitosa');
			}
		})

const menu = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/index', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const about = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/about', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const jobs = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/job_listing', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const contact = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/contact', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const login = async (peticion, respuesta) => {
	try {

		conexion.query(`SELECT * FROM user`, function (error, filas){
			if(error){
				throw error;
			}else{
				filas.forEach(fila => {
					console.log(fila);
				});
			};
		});
		
		
		respuesta.render ('../views/login', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const signup = async (peticion, respuesta) => {
	try {
		
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

		respuesta.render ('../views/signup', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const signup_new = async (peticion, respuesta) => {
	try {
		var name = peticion.body.name;
		
		conexion.query("INSERT INTO `user`(`name`, `last_name`, `email`, `password`) VALUES ('"+ name +"' ,'Garcia','pepe@gmail.com','1234')", function (error, results){
			if(error){
				throw error;
			}else{

				console.log('bien', results);
			};
		})
		conexion.end();

		respuesta.render ('../views/index', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const job_details = async (peticion, respuesta) => {
	try {
		
		

		respuesta.render ('../views/job_details', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const elements = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/elements', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const blog = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/blog', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const single_blog = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/single-blog', {
		})
	} catch (error) {
		console.log (error.message)
	}
}



module.exports = {
    menu: menu,
	about: about,
	jobs: jobs,
	contact: contact,
	login: login,
	signup: signup,
	signup_new: signup_new,
	job_details: job_details,
	elements: elements,
	blog: blog,
	single_blog: single_blog
}
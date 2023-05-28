const session = require('express-session')
// const database = require ('../../database/database')
const mssql = require ('mssql')
const mysql = require('mysql')
const express = require ('express')
const fs = require('fs');
const bodyParser = require('body-parser');
// const { router } = require('../../app')

const app = express ()
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
const inicio = async (peticion, respuesta) => {
	
		try {
			const fileData = fs.readFileSync('login_data.json');
			const userData = JSON.parse(fileData);
			const user = {
				firstName: 'Tim',
				lastName: 'Cook',
			}
			respuesta.render('../views/index_inicio', { _user : user });
		  } catch (error) {
			respuesta.send('Error reading user data');
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

const register_candidato = async (req, res) => {
	try {
		const actual_time = new Date()
		const username = req.query.username
		const first_name = req.query.first_name
		const last_name = req.query.last_name
		const birthday = req.query.birthday
		const email = req.query.email
		const phone = req.query.phone

		const userData = {
			username,
			first_name,
			last_name,
			birthday,
			email,
			phone,
			"registered_on": actual_time
		  };
		
		let existingData = [];
		try {
		  const fileData = fs.readFileSync('new_users_registration.json');
		  existingData = JSON.parse(fileData);
		} catch (error) {
		  console.error(error);
		}
	  
		// Add the new user data to the existing data
		existingData.push(userData);
	  
		// Write the updated data back to the JSON file
		try {
		  fs.writeFileSync('new_users_registration.json', JSON.stringify(existingData, null, 2));
		  console.log('User data saved successfully');
		} catch (error) {
		  console.error(error);
		}

		res.render('../views/login')
	} catch (error) {
		console.log (error.message)
	}
} 



const validate_data_business = async (req, res) => {
	try {
		const actual_time = new Date()
		const username = req.query.username
		const password = req.query.password

		const userData = {
			username,
			password,
			"login_attempted": actual_time
		  };
		
		let existingData = [];
		try {
		  const fileData = fs.readFileSync('login_data_business.json');
		  existingData = JSON.parse(fileData);
		} catch (error) {
		  console.error(error);
		}
	  
		// Add the new user data to the existing data
		existingData.push(userData);
	  
		// Write the updated data back to the JSON file
		try {
		  fs.writeFileSync('login_data_business.json', JSON.stringify(existingData, null, 2));
		  console.log('User data saved successfully');
		} catch (error) {
		  console.error(error);
		}

		res.render('../views/blog')
	} catch (error) {
		console.log (error.message)
	}
} 

const validate_data = async (req, res) => {
	try {
		const actual_time = new Date()
		const username = req.query.username
		const password = req.query.password
		console.log('username:', username);
		console.log('pass:', password);
		const userData = {
			username,
			password,
			"login_attempted": actual_time
		  };
		
		let existingData = [];
		try {
		  const fileData = fs.readFileSync('login_data.json');
		  existingData = JSON.parse(fileData);
		} catch (error) {
		  console.error(error);
		}
	  
		// Add the new user data to the existing data
		existingData.push(userData);
	  
		// Write the updated data back to the JSON file
		try {
		  fs.writeFileSync('login_data.json', JSON.stringify(existingData, null, 2));
		  console.log('User data saved successfully');
		} catch (error) {
		  console.error(error);
		}

		res.render('../views/index_inicio')
	} catch (error) {
		console.log (error.message)
	}
}

const login = async (peticion, respuesta) => {
	try {
		respuesta.render ('../views/login', {
		})

		

	} catch (error) {
		console.log (error.message)
	}
}
const login_bussines = async (peticion, respuesta) => {
	try {		
		respuesta.render ('../views/login_bussines', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const signup = async (peticion, respuesta) => {
	try {
		
		respuesta.render ('../views/signup', {
		})
	} catch (error) {
		console.log (error.message)
	}
}
const signup_test = async (peticion, respuesta) => {
	try {
		router.post("/signup/signup_test/:name", (peticion, respuesta)=>{
			
		})
	} catch (error) {
		console.log (error.message)
	}
}

const signup_new = async (peticion, respuesta) => {
	try {
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

const profile = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/profile', {
		})
	} catch (error) {
		console.log (error.message)
	}
}



module.exports = {
    menu: menu,
	inicio:inicio,
	about: about,
	jobs: jobs,
	contact: contact,
	login: login,
	validate_data: validate_data,
	validate_data_business:validate_data_business,
	register_candidato:register_candidato,
	login_bussines: login_bussines,
	signup: signup,
	signup_test: signup_test,
	signup_new: signup_new,
	job_details: job_details,
	elements: elements,
	blog: blog,
	single_blog: single_blog,
	profile: profile
}
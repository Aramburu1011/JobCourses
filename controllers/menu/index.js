const session = require('express-session')
// const database = require ('../../database/database')
const mssql = require ('mssql')

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
		

		respuesta.render ('../views/login', {
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
const job_details = async (peticion, respuesta) => {
	try {
		

		respuesta.render ('../views/job_details', {
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
	job_details: job_details,
}
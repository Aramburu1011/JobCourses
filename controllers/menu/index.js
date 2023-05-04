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

module.exports = {
    menu: menu
}
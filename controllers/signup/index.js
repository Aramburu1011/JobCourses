const session = require('express-session')
// const database = require ('../../database/database')
const mssql = require ('mssql')

const new_user = async (peticion, respuesta) => {
	try {
		
  // if connection is successful
  const query = "INSERT INTO * FROM students" 
	// if any error while executing above query, throw error
        
	} catch (error) {
		console.log (error.message)
	}
}


module.exports = {
    new_user: new_user
}
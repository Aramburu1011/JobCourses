const router = require ('express').Router()
const menu_functions = require ('../../controllers/menu/index')
const middlewares = require ('../../middlewares/index')

router.get('/', middlewares.login_require (true), menu_functions.menu)

module.exports.router = router
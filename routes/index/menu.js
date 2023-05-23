const router = require ('express').Router ()
const menu_functions = require ('../../controllers/menu')

router.get ('/', menu_functions.menu)
router.get ('/about', menu_functions.about)
router.get ('/job_listing', menu_functions.jobs)
router.get ('/contact', menu_functions.contact)
router.get ('/login', menu_functions.login)
router.get ('/signup', menu_functions.signup)




module.exports.router = router
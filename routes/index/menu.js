const router = require ('express').Router ()
const menu_functions = require ('../../controllers/menu')

router.get ('/', menu_functions.menu)
router.get ('/about', menu_functions.about)
router.get ('/job_listing', menu_functions.jobs)
router.get ('/contact', menu_functions.contact)


module.exports.router = router
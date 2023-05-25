const router = require ('express').Router ()
const menu_functions = require ('../../controllers/menu')

router.get ('/', menu_functions.menu)
router.get ('/about', menu_functions.about)
router.get ('/job_listing', menu_functions.jobs)
router.get ('/contact', menu_functions.contact)
router.get ('/login', menu_functions.login)
router.get ('/signup', menu_functions.signup)
router.post ('/signup/signup_new', menu_functions.signup_new)
router.get ('/job_details', menu_functions.job_details)
router.get ('/elements', menu_functions.elements)
router.get ('/blog', menu_functions.blog)
router.get ('/single-blog', menu_functions.single_blog)




module.exports.router = router
const router = require ('express').Router ()
const menu_functions = require ('../../controllers/menu')

router.get ('/', menu_functions.menu)
router.get ('/index-inicio', menu_functions.inicio)
router.get ('/about', menu_functions.about)
router.get ('/about_user', menu_functions.about_user)
router.get ('/job_listing', menu_functions.jobs)
router.get ('/job_listing_user', menu_functions.jobs_user)
router.get ('/contact', menu_functions.contact)
router.get ('/contact_user', menu_functions.contact_user)
router.get ('/contact_bussines', menu_functions.contact_bussines)
router.get ('/login', menu_functions.login)
router.get ('/login_bussines', menu_functions.login_bussines)
router.get ('/signup', menu_functions.signup)
router.get ('/signup_test', menu_functions.signup_test)
router.post ('/signup/signup_new', menu_functions.signup_new)
router.get ('/job_details', menu_functions.job_details)
router.get ('/job_details_user', menu_functions.job_details_user)
router.get ('/elements', menu_functions.elements)
router.get ('/blog', menu_functions.blog)
router.get ('/single-blog', menu_functions.single_blog)
router.get ('/profile', menu_functions.profile)
router.get ('/process', menu_functions.validate_data)
router.get ('/process-business', menu_functions.validate_data_business)
router.get ('/process-registration', menu_functions.register_candidato)
router.get ('/new_employ', menu_functions.new_employ)
router.get ('/oferta_de_empleo', menu_functions.oferta_de_empleo)







module.exports.router = router
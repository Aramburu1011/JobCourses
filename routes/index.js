const menu = require('../controllers/menu/index')

const router = require ('express').Router ()

router.use ('/', require ('./index/menu').router)

module.exports.router = router
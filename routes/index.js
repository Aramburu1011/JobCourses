const router = require ('express').Router ()

router.use('/', require ('./menu').router)

module.exports.router = router
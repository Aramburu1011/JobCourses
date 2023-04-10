const is_logged = (peticion, respuesta, siguiente) => {
    if (peticion.session.user != undefined){
        siguiente ()
    }else{
        respuesta.redirect ('/login')
    }
}

const is_not_logged = (peticion, respuesta, siguiente) => {
    if (peticion.session.user == undefined){
        siguiente ()
    }else{
        respuesta.redirect ('/login')
    }
}

const login_require = (state) => {
    return (state) ? is_logged : is_not_logged
}

module.exports = {
    login_require: login_require
}


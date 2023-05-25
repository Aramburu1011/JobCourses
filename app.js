const express = require ('express')
const session = require ('express-session')
const cors = require ('cors')
const path = require ('path')
const config = require ('./config')
const router = require ('./routes/index')
const app = express ()

app.set ('port', config.port)
app.set ('view engine', 'ejs')
app.set ('views', path.join (__dirname, '/views'))
app.use (express.json ())
app.use (cors (config.cors_opotions))

app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}))

app.use(router.router)

app.use('/public', express.static (path.join(__dirname, 'public')))

app.use ((peticion, respuesta, next)=>{
    if (peticion.session.user = undefined){
        respuesta.header ('Cache-Control, private, no-cache, no-store, must-revalidate')
    }

    next()
})

module.exports = app
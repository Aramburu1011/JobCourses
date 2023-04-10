// const express = require('express');
// const dotenv = require('dotenv');
// const bcryptjs = require('bcryptjs');
// const session = require('express-session');
// const connection = require('./database/db');
// const app = express();

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

// dotenv.config({path:'./env/.env'});

// app.use('/resources', express.static('public'));
// app.use('/resources', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');

// app.use(session({
//     secret:'secret',
//     resave: true,
//     saveUninitialized: true
// }));


// app.get('/',(req, res)=>{
//     res.render('index');
// })

// app.listen(3000, (req, res)=>{
//     console.log('Servidor corriendo en https://localhost:3000');
// })

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
    // secret: config.secret,
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
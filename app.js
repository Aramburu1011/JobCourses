const express = require('express');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const connection = require('./database/db');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));


app.get('/',(req, res)=>{
    res.render('index');
})

app.listen(3000, (req, res)=>{
    console.log('Servidor corriendo en https://localhost:3000');
})
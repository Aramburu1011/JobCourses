const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('HOLA');
    console.log("hola")
})
app.get('/adios',(req, res)=>{
    res.send('ADIOS');
    console.log("adios")
})

app.listen(3000, (req, res)=>{
    console.log('Servidor corriendo en https://localhost:3000');
})
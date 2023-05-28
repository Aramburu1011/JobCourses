const app = require ('./app')

app.listen (app.get ('port'), () =>{
    
    console.log (`App funcionando en el puerto ${app.get ('port')}`)
})
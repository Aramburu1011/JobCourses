const app = require ('./app')
const ws = require ('.middlewares/sokets')

const server = app.listen (app.get ('port'), () =>{
    console.log (`App funcionando en el puerto ${app.get ('port')}`)
})
ws.index(server)
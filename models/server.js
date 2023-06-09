const express =  require('express');
const cors = require('cors');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // middlewares
        this.middlewares()



        // Rutas de mi aplicacion

        this.routes();
        
    }
    middlewares(){
        // cors
        this.app.use(cors())

        // lectura y parseo del body
        this.app.use(express.json())
        
        // directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/api/users',require('../routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto numero ${this.port}`)
        })
    }

}
module.exports = Server;
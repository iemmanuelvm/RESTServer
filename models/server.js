const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //JWT
        this.authPath = '/api/auth'

        //Conectar a base de datos
        this.conectarDB();
        
        //Middlewares funciones que van anadir otra funcionalidad al web server
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }
    
    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosRoutePath, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;
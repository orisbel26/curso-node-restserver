require('dotenv').config()
const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.usersRoutePath = '/api/users'

    // Middlewares
    this.middlewares()
    // Rutas de mi aplicacion
    this.router()
  }

  middlewares () {
    // CORS
    this.app.use(cors())
    // Lectura y parseo del body
    this.app.use(express.json())
    // Directorio Publico
    this.app.use(express.static('public'))
  }

  router () {
    this.app.use(this.usersRoutePath, require('../routes/users'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`)
    })
  }
}

module.exports = Server

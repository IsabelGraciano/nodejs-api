const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); // este es el middleware de express para recibir datos json por post. siempre se debe usar

const whitelist = ['http://localhost:8080', 'http://127.0.0.1:5500']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin)  {
      callback(null,true)
    }
    else{
      callback(new Error('no permitido'))
    }
  }
}

app.use(cors(options))

routerApi(app);

//middleware después de definir el routing!!!!!!
// en el orden que se ponga se ejecutarán los middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen
(port, ()=> {
  console.log('puerto' + port)
})


// bajar brillo, contraste
//subir saturacion, resaltos, un poco desombras

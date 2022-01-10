const boom = require('@hapi/boom')

//construir middleware de forma dinámica
// closure en js

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property] //La info puede llegar en req.body si es post o en req.params si es get, como no sabemos le decimos en property para que sea dinámico

    const {error} = schema.validate(data, {abortEarly: false});

    if(error){
      next(boom.badRequest(error))
    }
    next();
  }
}

module.exports = validatorHandler

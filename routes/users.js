const express = require('express')
const router = express.Router();

//get con params query
router.get('/', (req, res) => { //los parametros son opcionales así que no van en la url
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  }
  else {
    res.send('No hay parametros')
  }
})

module.exports = router

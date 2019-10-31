const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.status(200).send({
        title: 'Reprograma Turma MELI - Professora Kelly Joany',  
        version: '0.0.1',
        status: 'arrasando, amiga!'
    })
})

module.exports = router




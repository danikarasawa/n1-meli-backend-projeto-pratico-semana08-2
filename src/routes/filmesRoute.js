const express = require('express')
const router = express.Router()
const filmesController = require('../controllers/filmesController')

router.get('/', filmesController.get) 
router.get('/filmes', filmesController.get) 
router.get('/diretor/:director', filmesController.getDirector)
router.get('/genero/:genre', filmesController.getGenre)

router.post('/', filmesController.postMovies)
router.post('/:title', filmesController.postGenre)

module.exports = router
const express = require('express')
const router = express.Router()
const filmesController = require('../controllers/filmesController')

router.get('/', filmesController.get) 
router.get('/filmes', filmesController.get) 
router.get('/diretor/:director', filmesController.getDirector)
router.get('/genero/:genre', filmesController.getGenre)
router.get('/diretor/:genre/:director', filmesController.getDirectorGenre)
router.get('/duracao/:duration', filmesController.getDuration)

router.post('/', filmesController.postMovies)
router.post('/genero/:title', filmesController.postGenre)
router.post('/image/:title', filmesController.postImage)
router.post('/showtime/:title', filmesController.postShowTime)

module.exports = router
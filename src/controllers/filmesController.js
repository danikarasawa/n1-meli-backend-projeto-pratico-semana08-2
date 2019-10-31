const movies = require('../model/filmes.json');
const fs = require('fs');

// GET

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(movies)
}

exports.getDirector = (req, res) => {
    const director = req.params.director

    if (!director) {
        res.send("Ai ai ai... Diretor(a) inválido!")
    }
    res.status(200).send(movies.filter(item => item.director == director))
}

exports.getGenre = (req, res) => {
    const genre = req.params.genre

    if (!genre) {
        res.send("Volte uma casa!")
    }
    res.status(200).send(movies.filter(item => item.genre == genre))
} //REFINAR ESTE CÓDIGO PARA PEGAR QUALQUER UM 

// POST 

//TEM QUE RESOLVER ISSO 
exports.postMovies = (req, res) => {
    const { title, year, director, duration, genre, rate } = req.body;
    movies.push({ title, year, director, duration, genre, rate });

    fs.writeFile('./src/model/filmes.json', JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!");
    });

    return res.status(201).send(movies);

};

//TEM QUE RESOLVER ISSO
exports.postGenre = (req, res) => {
    const title = req.params.title
    const titulo = movies.find(item => item.title == title)
    if (!titulo) {
        res.send("Não tem esse filme aqui, não")
    }
    const { genre } = req.body;
    movies[titulo].genre.push({ genre });

    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!")
    });
    return res.status(201).send(movies.titulo);
}
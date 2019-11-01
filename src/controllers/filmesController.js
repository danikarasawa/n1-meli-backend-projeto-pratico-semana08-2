const movies = require('../model/filmes.json');
const fs = require('fs');

// GET

exports.get = (req, res) => {
    res.status(200).send(movies)
}

exports.getDirector = (req, res) => {
    const director = req.params.director

    if (!director) {
        res.send("Ai ai ai... Diretor(a) inválido!")
    }
    res.status(200).send(movies.filter(item => item.director == director))
}

//REFINAR ESTE CÓDIGO PARA PEGAR QUALQUER UM 
exports.getGenre = (req, res) => {
    const genre = req.params.genre

    if (!genre) {
        res.send("Volte uma casa!")
    }

res.status(200).send(movies.filter(item => item.genre == genre))
}

// CÓDIGO DA KELLY JOANY + INTERESSANTE COM FOR + LENGTH
//     const choosenGenre = req.params.genre
//     let listFilms = []
//     for (let i = 0; i < movies.lenght; i++) {
//         for (let j = 0; j < movies[i].genre.lenght; j++) {
//             if (movies[i].genre[j] === choosenGenre) {
//                 listFilms.push(movies[i]);
//             }
//         }
//     }
//     if (listFilms.lenght === 0) 
//     return res.status(500).json({ message: "The genre doesn't exist" });
// }
// res.status(200).send(listFilms);
// }



// POST 

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

exports.postGenre = (req, res) => {
    const title = req.params.title
    const titleCondition = movies.find(item => item.title == title)
    if (!titleCondition) {
        res.send("Não tem esse filme aqui, não")
    }
    const { genre } = req.body;
    movies.genre.push( genre );

    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!")
    })
    return res.status(201).send(movies);
};
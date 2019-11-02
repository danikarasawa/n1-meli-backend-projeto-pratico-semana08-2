const movies = require('../model/filmes.json');
const fs = require('fs');

// GET

exports.get = (req, res) => {
    res.status(200).send(movies);
};

exports.getDirector = (req, res) => {
    const director = req.params.director;

    if (!director) {
        res.send("Ai ai ai... Diretor(a) inválido!")
    }
    res.status(200).send(movies.filter(item => item.director == director))
}

//TRECHO DO CÓDIGO DA KELLY 
// const {director} = req.params;
// const listFilms = movies.filter(e => e.director == director);
// if (listFilms.length === 0)




//REFINAR ESTE CÓDIGO PARA PEGAR QUALQUER UM (ESTÁ PEGANDO SÓ UM AQUI)
exports.getGenre = (req, res) => {
    const genre = req.params.genre

    if (!genre) {
        res.send("Volte uma casa!")
    }

res.status(200).send(movies.filter(item => item.genre == genre))
}

// TESTAR COM ESSE CÓDIGO E COM INDEXOF
//const listFilms = movies.filter(e => e.genre.includes(genre))

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

exports.getDirectorGenre = (req, res) => {
    const director = req.params.director

    if (!director) {
        res.send("Ai ai ai... Diretor(a) inválido!")
    }

    const directorAndGenre = movies.filter(item => item.director == director)
    const GenreAndDir = directorAndGenre.filter(item => item.genre)

    res.status(200).send(GenreAndDir)
}

exports.getDuration = (req, res) => {

}

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
    
    // FAZER UMA FUNCTION PARA O FS CHAMADA SAVEFILE();

    return res.status(201).send(movies);

};

exports.postGenre = (req, res) => {
    const title = req.params.title
    const titleCondition = movies.find(item => item.title == title)
    if (!titleCondition) {
        res.send("Não tem esse filme aqui, não")
    }
    const { genre } = req.body;
    titleCondition.genre.push( genre );

    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!")
    })
    return res.status(201).send(movies);
};

exports.postImage = (req, res) => {
    const title = req.params.title
    const titleCondition = movies.find(item => item.title == title)
    if (!titleCondition) {
        res.send("Não tem esse filme aqui, não")
    }
    const { image } = req.body;
    //titleCondition.title.push( image )
    titleCondition.image = image;

    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!")
    })
    return res.status(201).send(movies);
};

exports.postShowTime = (req, res) => {
    const title = req.params.title
    const titleCondition = movies.find(item => item.title == title)
    if (!titleCondition) {
        res.send("Não tem esse filme aqui, não")
    }
    const { showTime } = req.body;
    titleCondition.title.push( showTime )

    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!")
    })
    return res.status(201).send(movies);
};

//CÓDIGO DA KELLY PARA O EX. 10 - OUTRA PARTE EM FOTOS
// const {duration} = req.params;
// const listFilms = turnHoursToMinutes();
// const durationFilms = listFilms.filter(e => e.duration > duration)

// return res.status(200).send(durationFilms)

// function turnHoursToMinutes(){
//     const newMovieList = JSON.
// }
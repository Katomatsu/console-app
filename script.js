'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');
        if (a == '' || a == 'null' || a.length > 50 || b == '' || b == 'null') {
            i--;
            console.log('error');
        } else {
            personalMovieDB.movies[a] = b;
            console.log('okey');
        }
    }
}
rememberMyFilms();


function detectLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function showMyDB(privat) {
    if (privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log('error');
    }
}
writeYourGenres(personalMovieDB.genres);

function writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
        const question = prompt(`Ваш любимый жанр под номером ${i}`);
        genres[i - 1] = question;
    }
}
showMyDB(personalMovieDB.privat);




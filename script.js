'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim();
            const b = +prompt('На сколько оцените его?', '').trim();
            if (a == '' || a == 'null' || a.length > 50 || b == '' || b == 'null') {
                i--;
                console.log('error');
            } else {
                personalMovieDB.movies[a] = b;
                console.log('okey');
            }
        }
    },
    detectLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function(genres) {
        for (let i = 1; i <= 3; i++) {
            const question = prompt(`Ваш любимый жанр под номером ${i}`);
            genres[i - 1] = question;
            if (question === null || question === '') {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                genres[i - 1] = question; 
                console.log(`Любимый жанр ${i} - это ${genres[i - 1]}`);
            }
        }
        
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(privat) {
        if (privat === false) {
            console.log(personalMovieDB);
        } else {
            console.log('error');
        }
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
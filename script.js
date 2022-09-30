'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a =prompt('Один из последних просмотренных фильмов?', '');
    const b =+prompt('На сколько оцените его?', '');
    if (a == '' || a == 'null' || a.length > 50 || b == '' || b == 'null') {
        i--;
        console.log('error');
    } else {
        personalMovieDB.movies[a] = b;
        console.log('okey');
    }

}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классическиц зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка');
}



console.log(personalMovieDB);
"use strict";
let numberOfFilm;

function start() {
	numberOfFilm = +prompt('Сколько фильмов посмотрели?', '');

	while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
		numberOfFilm = +prompt('Сколько фильмов посмотрели?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilm,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
/*
let i = 0;
do {
	const movie = prompt('Фильм?', ''),
	score = prompt('Оценка?', '');
	i++;
	if(movie != null && score != null && movie != '' && score != '' && 
	movie.length < 50) {
		personalMovieDB.movies[movie] = score;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
} while (i < 2);
*/

function rememberMyFilms() {
	for(let i = 0; i < 2; i++) {
		const movie = prompt('Фильм?', ''),
				score = prompt('Оценка?', '');
	
		if(movie != null && score != null && movie != '' && score != '' && 
			movie.length < 50) {
				personalMovieDB.movies[movie] = score;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		
	}
}

//rememberMyFilms();


function detectPersonalLevel() {
	if(personalMovieDB.count <= 10) {
		console.log('Little');
	} else if(personalMovieDB.count <= 30) {
		console.log('ok');
	} else if(personalMovieDB.count > 30) {
		console.log('Too mutch');
	} else {
		console.log('Error');
	}
}

//detectPersonalLevel();

/*
function showMyDB() {
	if(personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();
*/

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);



function writeYourGenres() {
	for(let i = 1; i < 4; i++) {
		personalMovieDB.genres.push(`${i}.${ prompt("Like a: ", '')}`);
	}
	console.log(personalMovieDB);
}

writeYourGenres(); 
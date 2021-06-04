// @ts-nocheck
"use strict";
/*
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

*/

//========================================================================================================================================================


const options = {
	name: 'test',
	width: 1200,
	height: 1000,
	colors: {
		border: 'green',
		bg: 'red'
	},
	makeTest: function() {
		console.log("Test");
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

let counter = 0; 

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		} 
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
	counter++;
}

console.log(counter);

//========================================================================================================================================================

//массив

let arr = [1, 2, 6, 8, 10];

arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}

//перебор
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//тоже самое 
for (let value of arr) {
	console.log(value);
}

//item - элемент массива, i - индекс, arr - массив
arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

//========================================================================================================================================================

//объект


//ПОВЕРХНОСТНОЕ копирование объекта

/*
function copy(mainObj) {
	let objCopy = {};

	let key;
	for(key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 1
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
	d: 12,
	i: 5
};

const clone = Object.assign(numbers, add);

clone.d = 20;

console.log(add);
console.log(clone);
*/


//========================================================================================================================================================

//копирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'saddfvbv';
console.log(newArray);
console.log(oldArray);


//оператор SPREAD ES8

const video = ['youtube', 'vimeo', 'rutube'],
		blogs = ['wordpress', 'livejoutnal', 'bloggers'],
		internet = [...video, ...blogs, 'vk', 'facebook'];
		
console.log(internet);


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

//___________________________

const array = ['a', 'b'];

const newAaray = [...array];

const q = {
	one: 1,
	two: 2
};

const newObj = {...q};

//========================================================================================================================================================

//ООП

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log("Hello");
	}
};

const jonh = Object.create(soldier);

/*
const jonh = {
	health: 200
}

//jonh.__proto__ = soldier;  //устаревшая запись

Object.setPrototypeOf(jonh, soldier); //установить прототип созданному эл.
*/

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();


//========================================================================================================================================================
//========================================================================================================================================================




const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if(personalMovieDB.count <= 10) {
			console.log('Little');
		} else if(personalMovieDB.count <= 30) {
			console.log('ok');
		} else if(personalMovieDB.count > 30) {
			console.log('Too mutch');
		} else {
			console.log('Error');
		}
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for(let i = 1; i < 2; i++) {
			/*
			let genre = prompt(`Like a №${i}: `, '');
			if(genre === "" || genre == 0) {
				console.log('Nooooooo');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
			*/

			let genres = prompt(`Like a №${i}: `, '').toLowerCase();

			if(genres === '' || genres == null) {
				console.log("Nooo");
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
			
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}

};


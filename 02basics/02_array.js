const marvelHero = ["ironman", "thor", "spiderman"];
const dcHero = ["batman", "flash", "superman"];

// console.log(marvelHero[3][1]); //not a good syntax

// const allHero = marvelHero.concat(dcHero)
// console.log(allHero);

// const allNewHeros = [...marvelHero,...dcHero] //spread operator
// console.log(allNewHeros);

/*-----------if have this situation---------------------- */

const anotherArr = [1, 2, [3, 4], 5, [6, [7, 8]]];

const newArr = anotherArr.flat(Infinity); //we can use range of array or Infinity

console.log(newArr);

//if we are scraping data

console.log(Array.isArray("YashKhare")); //it gives bool;ean
console.log(Array.from("YashKhare")); //converts normal string into array
console.log(Array.from({ name: "yash" })); //it gives back empty array we have to tell which array we want from key, pair

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
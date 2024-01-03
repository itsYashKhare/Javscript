// Primitive

// 7 types : number.String, null , undefined , Boolean, symbol, BigInt

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol("123")
const anotherId = Symbol("122")

console.log(id === anotherId);

// const bigNumber = 234567456756780n


// Refrence (NON primitve)

// Array , Object , function

const heros = ["Shanktiman","Spiderman","Naagraj"];
let myObj = {
    name:"Yash",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
} 


// javaScript is a  Dynamic language  because we doesn't define any type  of the value .
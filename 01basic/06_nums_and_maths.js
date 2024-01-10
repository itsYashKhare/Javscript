const score = 400
//  console.log(score);

const balance = new Number(100)
// console.log(balance);

//converting balance to string and getting length of balance
// console.log(balance.toString().length);

//use to get the value to fixed decimal
// console.log(balance.toFixed(2));


const otherNumber = 23.89955

//it will return the precise value in form of string
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

/*--------------- Maths   ----------------------*/

// console.log(Math);
// console.log(Math.abs(-3));// get +ve value only
// console.log(Math.round(4.5));//round the value above 5 and below 5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(1,2,3,4)); // min value 1
// console.log(Math.max(1,2,3,4)); //max value 4


//give value  between from 0 to 1
console.log(Math.random());

//get the value what we want and to avoid 0 we added the 1
console.log((Math.random()*10) + 1);

//to get the simple number we wrap Math.random()*10 +1 with Math.floor
console.log(Math.floor((Math.random()*100)+1));


const min = 10
const max = 40
//some time we have to define min and max value\
console.log(Math.floor(Math.random()*(max-min + 1)) + min)

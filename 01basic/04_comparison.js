// console.log(1 >2);
// console.log(3 < 2);
// console.log(3 >= 2);
// console.log(3 <= 2);
// console.log(2 != 1);

console.log(null > 0); // => output false
console.log(null == 0); // => output false 
console.log(null >= 0);  // => output true

//reason is that the equality check check ==  and comparison <, >, <= ,>= works differntly.
//Comparison convert null  to a number , treating   it as 0 .
// That's why (3) null >= 0  is ture and (1) null > 0 is false

console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// === it checks datatypes also 

console.log("2" === 2); 
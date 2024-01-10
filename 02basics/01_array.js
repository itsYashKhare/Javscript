//Array

const myArr = [0,1,2,3,4]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()
    

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
//join coverts the value of array in string
// console.log(myArr);
// console.log(typeof newArr);

//slice,splice

console.log("A",myArr)

const myNewArr = myArr.slice(1,3)

console.log(myNewArr);
console.log("B",myArr);

const myNewArr2 = myArr.splice(1,3)
console.log("c",myArr);

console.log(myNewArr2);
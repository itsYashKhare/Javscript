const name = "yash"
const repoCount = 10

// console.log(name + repiCount + " value"); // this not a good syntax

// console.log(`hello i am ${name} my repocount is ${repoCount}`);

const gameName = new String("yashKhare")

// console.log(gameName[0]);
// console.log(gameName.__proto__); //type is object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(y));

// const newString = gameName.substring(0,3);

// console.log(newString);

// const anotherString = gameName.slice(-8,3);
// console.log(anotherString);

const newStrOne =  " yashkhare "

console.log(newStrOne.trim());  // trim do not take white space

const url = "https://www.yashkhare.com/yash%10Khare"

console.log(url.replace("%10","-")); //replace will replace the thing

console.log(gameName.split("-"));



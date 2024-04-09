// singleton
//Object.create


// object literals
const mySym = Symbol("key1") //<= interview question insert symbol value in the object

const jsUser = {
    name: "Yash Khare",
    "full name": "Yash Purnima Khare",
    age: 21,
    [mySym]:"mykey1",
    email: "yash@gmail.com",
    location: "Jhansi",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(jsUser.email); //used to acces the value
// console.log(jsUser["email"]);// using [] bracket  to access the value 
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); 

//if we want the overwrite the value in object

jsUser.email = "chatgpt@gmail.com"
// Object.freeze(jsUser); //it freeze the value and do not allow to update
jsUser.email = "chatgpt@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello from js user")
};

console.log(jsUser.greeting());
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "yash",
            lastName: "khare"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName );

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2);

// we will use spread opertor
const obj3 = {...obj1,...obj2}

// console.log(obj3);

//array of objs 
const users = [
    {
        id: 1,
        email: "yk@gmail.com",
    },
    {
        id: 1,
        email: "yk@gmail.com",
    },
    {
        id: 1,
        email: "yk@gmail.com",
    }
]

users[1].email//we can access value of array of objects or json

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedOut'));

/*------------------object destructuring-----------*/ 
// const obj = {
//     naam: "yash",
//     age: "22",
//     state: "Uttar pradesh"
// }

// var {state: rajye} = obj;

// console.log(rajye);
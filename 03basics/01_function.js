// function naam(){
//     console.log("Yash Khare");
// }

// naam()

function addTwoNumber(num1,num2){
    var ans = num1 + num2;
    console.log("answer:" +  ans)
}

// addTwoNumber(1,2)



// function addTwoNumber(num1,num2){
//    let result = num1 + num2;
//    return result
// }

// const  result = addTwoNumber(1,3)

// console.log(`Result is : ${result}`)


function loggedIn(username = "Yash"){
    if(!username){
         console.log("Please enter your name");
         return
    }
return `${username} is logged in.`
}

// console.log(loggedIn());
console.log(loggedIn("Rahul"));
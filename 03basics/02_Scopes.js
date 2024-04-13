// Global & Local Scope
let b =10;

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
//   console.log("Inner :", b)
}

// console.log(a);
// console.log(b);
// console.log(c);



//Nested scope or Closures
function one(){
    const username = "yash";
    function two(){
        const social = "@yash"
        // console.log(username);
    }

    // console.log(social);  -> here parent function can't access child function vlaue
    // two()
}

// one()


if(true){
    const username = "yash";
    if(username === "yash"){
        const website = "youtube";
        // console.log(username + " " + website)
    }
}

// console.log(username) -> not able to access the  due to scope in line  33

// ------------------------hoisting--------------

console.log(addone(5));

function addone(val){
    return val + 1;
}


// addtwo(5) ------>error due to hoisting / it initilized first

const addtwo = function(val){
    return val + 2 
}

//local variable  used with in the scope {}
let accountEmail = "yash@gamil.com";
const accountId = 1234;
// accountId = 4564; not allowed

// global variable
var accountPassword = "212121";

/*
prefer not to use var 

because of issue in block scope and functional block 
 */

console.log(accountId);

console.table([accountEmail, accountId, accountPassword]);

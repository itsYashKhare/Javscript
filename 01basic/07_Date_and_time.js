//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString('en-In'));
// console.log(myDate);
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023 ,0 ,23)
// console.log(myCreatedDate)
let myCreatedDate = new Date("01-21-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

`${newDate.getDay()} and the time`
newDate.toLocaleString("default",{
    weekday: "long",
    timeZone: ""
})


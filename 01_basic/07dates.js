// Dates

//declear a date object
let myDate = new Date()
console.log((myDate));
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // date is object  type


//declear my own date
/*

let myCreatedDate = new Date(2023, 0, 23) //0 :- jan month. month start with 0 in JS.
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

 myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

*/

let myTimeStamp = Date.now()
myCreatedDate = new Date("01-14-2023")
console.log(myTimeStamp); //RETURN milisec from 1 jan 1970 to till now
console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
//here +1 because month start with 0 in js so to get exact month in number we have to plus 1
console.log(newDate.getMonth() +1); 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
// })

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values:- 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:- 
// "0", 'false',"false", " ", [], {}, function(){}, true

//to check array empty or not:-
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//to check obj empty or not:-
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//some basic notes:-  
//false==0 (true), false==''(true), 0==''(true)

// Nullish Coalescing Operator (??): null undefined
//always allow true value . false value does not allow
//use to handle errors
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10   //o/p 10
val1 = undefined ?? 15   // op:- 15
val1 = null ?? 10 ?? 20   //0p:- 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

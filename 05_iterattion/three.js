//for off loop

//stntex 
//these are array specific loops
//these loop can be used in array, strings 

const arr =[1,2,3,4,5]

//for off loop on array
for (const num of arr) {
    console.log(num);
}
//for off loop on string
const greetings="hello chai"
for (const greet of greetings) {
    console.log(`each letter of greeting is ${greet}`);
}
//for in loop in array
for (const num in arr) {
    console.log(num);
}
//can be able to use but it gives keys of array elelemts 

//maps
//Map() is an object 
//it holds key and value pairs 
//contain unique element's only 
//to set a key and value in map key must ke unique
const map= new Map()

//to set value in map:-
map.set('IN','India')
map.set('usa','united')
map.set('fr','france')
map.set('IN','india')

// console.log(map);

//for off loop on map
for (const key of map) {
    //print  single single array of every key and value
    console.log(key);
}


for (const [key,value] of map) {
    console.log(key,";- ", value);
}

//creating object
const myObj={
    "name":"aaryan",
    roll_no:"CS21B025",
    branch:"cse",
    college:"NITAP",
}

// console.log(myObj);

//for off loop on object
// for (const data of myObj) {
//     console.log(data);
// }
//object is not iterable by using for off loop

//for in loop is used in object
// for (const key in myObj) {
//     console.log(key);
// }
for (const key in myObj) {
    console.log(`key is  ${key} and its value is ${myObj[key]}`);
}


//for each loop
//takes a callback function
const coding=['js','cpp','html','css']
//syntex:-  coding.forEach( function ( array_element) {   } )
coding.forEach( function (item){
console.log(item);
} )

 //callback fun. as a arrow fun

//  coding.forEach((item)=>{
//     console.log(item);
//  })

//callback mai jo parameters hota h uske pass item ke alawa index aur complete array bhi aata h
 coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
 })

 const myCoding=[
    {
      langName:"js",
      langFullName:"javascript"  
    },
    {
        langName:"cpp",
        langFullName:"c plus plus"
    },
    {
        langName:"css",
        langFullName:"cascading style sheet"
    },
 ]

 myCoding.forEach((item)=>{
    console.log(`${item.langName} `);
 })

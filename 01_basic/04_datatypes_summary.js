//primitive
//stack memory(copy while reference)

// 7 types: string, number, boolean, null,undefined,symbol, bigInt

//reference (non-primitive)
//heap memory(original value while refenrence)
//array, objects, functions

const id= Symbol("123");
const newid=Symbol("123");

console.log(id===newid);//false 


let youtubechannel="chai aur code";
let anothername=youtubechannel;
anothername="kuch bhi nhi h ";
console.log(anothername);//copy will created of youtubechannel variable in anotername.

// heap example

let userOne={
    email:"aaryan3783@gmail.com",
    upi:"81199@ybl"
}

console.log(userOne.email);// dot(.) to access objects
let userTwo=userOne;
userTwo.name="aaryan.cse.21@nitap.ac.in";
console.log(userTwo.email);

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//syntex 
/* function fun_Name(parameters){
    //fun defination
} 
*/

sayMyName() //function call
sayMyName //function  reference


//this fuction will directly print the value i.e sum of two number
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

//this function will not print but it will return the value
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


//lect 20 :- 
//rest operator return a array of all argument passed to the function call. [200,400,500,2000]
/*
function calculateCartPrice(...num1){
    return num1
}
*/ 


//here 1st argument is given to val1  and 2nd argument will be given to val2 and rest of the arument given to num1 
function calculateCartPrice(val1, val2,...num1){
    return num1
}
//return an array of passed arument accept val1 and val2. [ 500,2000]
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

//one way :- pass the variable name of defined obj 
handleObject(user)

//2nd way :- direcly pass the obj
handleObject({
    username: "sam",
    prices: 399
})


//defined a array 
const myNewArray = [200, 400, 100, 600]

//defined a function
function returnSecondValue(getArray){
    return getArray[1]
}

//pass array name
console.log(returnSecondValue(myNewArray));
//direcly pass array
console.log(returnSecondValue([200, 400, 500, 1000]));
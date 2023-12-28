//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

//so var is global scope and let and const is local scope.

// console.log(a);
// console.log(b);
// console.log(c);
 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//here we are calling function  before declaration and it is possible
console.log(addone(5))

//declerartion of function
function addone(num){
    return num + 1
}



//here we are calling expression containing funciton and this is not possibble
// addTwo(5)

//this will called a expression.( variable containg funciton)
const addTwo = function(num){
    return num + 2
}
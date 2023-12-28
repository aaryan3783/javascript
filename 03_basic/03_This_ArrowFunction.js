const user = {
    username: "hitesh",
    price: 999,
//this is used to access the current context 
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

user.welcomeMessage()
user.username = "aaryan"
user.welcomeMessage()

//in node enviroment this will reffer empty object 
console.log(this);

// function chai(){
//     let username = "hitesh"
//     // this keyword is only used in object it is not used in function.
//     //here we are not able to access username 
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//arrow function 
/* sytnex:- 
let variable_name=(para)=>{
    //defination
}

note: -if we wrap function defination in { } so we have write return other wise no need.

1.  ()=>{ }. 
2. ()=>( ) 
3. let variable=()=>{ }

*/


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
  
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

 
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
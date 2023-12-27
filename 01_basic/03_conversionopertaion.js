let score=null;

console.log(typeof score);

// + is used to change its typeof value from object to number and initialise a value of 0(zero)
let valueIntNumber=+(score);
//or number(score)


console.log(typeof valueIntNumber);
console.log(valueIntNumber);

let xyz=1;
let boolchek= Boolean(xyz);
console.log(boolchek);


/*
1. with string input:- 

let score='33';

console.log(typeof score);

let valueIntNumber=+(score);
console.log(typeof valueIntNumber);
console.log(valueIntNumber);


o/p:- 
string
number
33

2. with input
let score='33asd';

console.log(typeof score);

let valueIntNumber=+(score);
console.log(typeof valueIntNumber);
console.log(valueIntNumber);


o/p: -
string
number
NaN


3. 
let score=null;
 o/p:- 
 object
number
0

4.true => 1;
false=> 0;






*/


// operator

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2**2);
console.log(2*2);
console.log(2%2);

let str1='aaru';
let str2=" bhai";
console.log(str1+str2);


//agar string sphle h tho smko string ke jayse condier krega aur agar string last mai tho numbers ko phle convert kr lega aur phir string ka convert kr dega
console.log("1"+2);
console.log(2+"1");
console.log(1+2+"3");
console.log("1"+2+3);

let game=100;
//postflix :- first assign the value and then increment the value
console.log(game++);
//prefix :- first increment and then assign the value
myGame=100;
console.log(++myGame);
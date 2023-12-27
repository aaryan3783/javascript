// array

//can be diff type of element 
//and index start from 0 to length-1
const myArr = [0, 1, 2, 3, 4, 5]
// console.log((myArr.length));
const myHeors = ["shaktiman", "naagraj","super man"]

//acces of array element :- array_name[index_value]
console.log(myHeors[1]);


//other way to create array by defining object of array 
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

//push:-add element to array in last  (in orignal array)
// myArr.push(6)
// myArr.push(7)
//pop:- remove last element of aaray and return the removed item
// myArr.pop() 

//unshift :- used to add element at starting at index 0
// myArr.unshift(9)
//shift:- remove index 0 
// myArr.shift()

//includes:- check the element is present in aaray or not
console.log(myArr.includes(9));

//indexOf:- retrun the index of first occurence of element
console.log(myArr.indexOf(3));

//join:- jpoin method is used to join all the element and return in string type.
const newArr = myArr.join()

console.log(myArr);
console.log( newArr);
console.log( typeof newArr);


// slice, splice

console.log("A ", myArr);

//slice: return a copy of a section of an array. for both start and end-1(last range include nhi hota h)
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//splice:-  orginal array ko manupulate krta h .... aur splice range ke both value of ka element of cut kr ke hta deta h
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
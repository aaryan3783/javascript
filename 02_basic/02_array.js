const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//arrya ke under array(nested array) and work on orignal array /exixting array
marvel_heros.push(dc_heros)

console.log(marvel_heros);
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
console.log(marvel_heros[3][1]); //flash


//concat: -return a new array and merge two diff array in a single array without nesting.
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//to do the above same thing we use spread operator ( ...array_name), it spread all the element of a array where it is decleared.
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//flat :-  it is used to return all array in a single array. 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//Array.isArray is used to check that it is array or not 
console.log(Array.isArray("Hitesh"))
//.from create a array from given string(when we pass string)
console.log(Array.from("Hitesh"))
//when we pass obj we must have to tell that make a array from either key or value.
console.log(Array.from({name: "hitesh"})) // interesting , return enpty array when we donot provide any thing i.e key or value to make array

let score1 = 100
let score2 = 200
let score3 = 300
//return a array made from value passed in .of()
console.log(Array.of(score1, score2, score3));
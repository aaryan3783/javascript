// map:- 
//callback fun.
//automatically return value

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums=myNumers.map((num)=>{
//     return num + 10;
// })


//chaining 
const newNums=myNumers
                    .map((num)=>num*10)
                    .map((num)=> num+1)
                    .filter((num)=> num>=50)
                    

console.log(newNums);

//reduce method:- 
//take callback fun(accumulator, currentvalue).
//styntex:- arry_name.reduce((accumulator, currentvalue)=>{
// return },initail_value_accumulator)

const myNums=[1,2,3]

const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} ,currval: ${currval}`);
return acc+currval;
},0)
//here 0 tells that 0 is assign to acc
//and takes current value  i.e carrval fron array 
console.log(myTotal);



//shoping cart example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice=shoppingCart
.reduce((acc,item)=>{
    return acc+ item.price;
},0)

console.log(totalPrice);

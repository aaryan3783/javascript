// const tinderUser = new Object()
const tinderUser = {}

//to add key and value in a decleared object :-  obj_name.key =  value
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


//nested object :- object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aaryan",
            lastname: "prasad"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//decleared 3 obj
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
 
// const obj3 = { obj1, obj2 }

//assign :- returns a target obj that contain all the key and vakue of obj1 , obj2 and obj3.
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

//by using spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

//return array of all the keys of the object
console.log(Object.keys(tinderUser));

//return array of all the values of the object
console.log(Object.values(tinderUser));

//return array of array that contain every key and value . har ek key aur value of array mai convert kr deta h 
console.log(Object.entries(tinderUser));


//return true or false by checking taht the obj have the key or not.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//lect 18 of CUC obj 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//de-structure of course object
const {courseInstructor: instructor,coursename,price} = course

// console.log(courseInstructor);
console.log(instructor);
console.log(price);
console.log(coursename);


//JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

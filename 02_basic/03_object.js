// singleton (when we crete obj from constructor )
// Object.create

//declear sysmbol
const mySym = Symbol("key1")

// object literals (no singleton)
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //  to use mySum as a sybol in ojbject we have put it into sq. bracket [ mySum] and to access it we have to use [ ].
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//.(dot) to access obj
console.log(JsUser.email)
// in sq. bracket [] we have to pass string of key to access like :-  "name", "full name" etc
console.log(JsUser["email"])
console.log(JsUser.name);
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//obj.freeze(obj_name) will freeze the object so no change is reflected 
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting); //return fucntion 
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
//symbol declare kiya hai

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //isko dot karke access nhi kar sakte hain isiliye dusra method use karenge
    [mySym]: "mykey1", //symbol ko declare karne ka alag method hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //object access karna
// console.log(JsUser["email"]) //much better method har ek pe chal jayega
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //symbol access karna 

JsUser.email = "hitesh@chatgpt.com" //changing value
// Object.freeze(JsUser) //locking value...cant be changed now
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //freeze hone ke baad value change nhi huyi

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this keyword to refer the object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 //  Primitive (Non-Reference) 
 // call by value hote hain

const { useImperativeHandle } = require("react");

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //ye false hoga dono ko alaga alag id milegi aur dono same nhi honge

// const bigNumber = 3456543576654356754n //n se bigInt bana diya hai isko



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //ye array hai
let myObj = {
    name: "hitesh",
    age: 22,
} //ye objects hain curly braces ke andar

const myFunction = function(){
    console.log("Hello world");
}

console.log(anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(Primitive Datatypes) copy milta hai
//Heap Memory(Non-Primitive Datatypes) reference milta hai original value ka

let ytchannel="chai aur code"
let anotherName =ytchannel

anotherName="mychannel"
console.log(ytchannel);
console.log(anotherName); //yaha copy mili thi toh original value mein koi change nhi hua tha

let userOne={
    email:"pg@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="user@google.com"
console.log(userOne);
console.log(userTwo);
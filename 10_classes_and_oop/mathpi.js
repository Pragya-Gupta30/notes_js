const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//sari properties ka description dega yeh....isme math module hai and PI property
// console.log(descripter);

// console.log(Math.PI); //constant value hai
// Math.PI = 5
// console.log(Math.PI); //overwrite nhi kar sakte hum issse....value same hi rahegi

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //isme 'name' property hai

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
}) //hum properties change kar sakte hain

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
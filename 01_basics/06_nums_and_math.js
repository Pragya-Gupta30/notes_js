const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); //yaha specially woh type dikha rha hai ki number hai

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //decimal ke baad number fix karta hai

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));//ye thoda ajeeb hai...precision batata hai...round off karke deta hai

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //comma separate karke deta hai...number system wala jaise 1,00,000...
//by default US system hota hai...1,000,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//0 and 1 ke beech ki random value aati hai 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//range define kar diya aur phir min ko add kar diya
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') //another method to declare string

console.log(gameName[0]); //basic indexing hai
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); //basic functions hain
//original value change nhi huyi hai...stack mein jayega toh copy of value aati hai
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //start and end number python jaisi hi slicing hai...last value include nhi hota hai
//idhar negative nhi de sakte hain
console.log(newString);

const anotherString = gameName.slice(-8, 4) //isme negative value bhi de sakte hain...toh reverse se hoga yeh
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //faltu starting and ending space hata deta hai...whitespace and line terminals hata deta hai

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //simple replace karna hai

console.log(url.includes('sundar')) //given keyword hai ki nhi string mein

console.log(gameName.split('-')); //converts it into an array by splitting it on the basis of given character
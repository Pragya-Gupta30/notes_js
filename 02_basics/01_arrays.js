// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
//can contain different types of elements and are resizable
//creates shallow copy
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //inserts at start of array
// myArr.shift() //removes element at the start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //join elements of array by making it a string

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //simple slicing hai range include nhi hogi
//original array same rahti hai

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//range include hota hai
//original array change ho jata hai and woh section nikal jata hai array se
console.log("C ", myArr);
console.log(myn2);

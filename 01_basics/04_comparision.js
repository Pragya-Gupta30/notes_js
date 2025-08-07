// console.log(2 > 1);
// console.log(2 >= 1); //true false mein value aayegi
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //sab kuch false tha lekin ye true hai
//reason: equality check == and comparision ><>=<= works differently.
//Comparisions convert null to a number, treating it as a 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); //checks datatype also
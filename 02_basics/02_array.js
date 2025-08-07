const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //merge hone ki jagah ye as a element usme add ho gya hai, ek array ke form mein hi pura
//array ko hi element le liya hai usne

console.log(marvel_heros); 
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) //merge the array and return a new array as well
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator hai...isme bhi array merge kar rhe hai lekin pahle hum elements ko spread kar rhe hai mtlb ab woh individual hain aur phir sabko jod rhe hain

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //we need to give the depth
//saare subarrays ko ek normal array mein kar deta hai
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //makes it a array
console.log(Array.from({name: "hitesh"})) // interesting
//isme specify karna padega ki keys ka ya values ka...kiska array banana hai 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //array bana rha yeh bhi
// Dates
//jan 1,1970 se start hota hai inka date system
let myDate = new Date()
console.log(myDate.toString()); //date and time wagaira de deta hai
console.log(myDate.toDateString()); //alag alag format hai date ke
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object type hai
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());



let myCreatedDate = new Date(2023, 0, 23) //month 0 se start ho rha hai
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)//time wagaira
//let myCreatedDate = new Date("2023-01-14")//specific format..idhar 1 se hi hai
//let myCreatedDate = new Date("01-14-2023") //MMDDYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //milisecond value from 1 Jan 1970 to current time

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //method use kar sakte hain ye wala time lene ke liye
// console.log(Math.floor(Date.now()/1000)); //seconds mein convert karta hai

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //+1 kyuki ye 0 se leta hai month
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
//aur customized kar sakte hain aise date and time ke format ko

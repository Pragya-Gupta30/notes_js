// for of

// ["", "", ""]
// [{}, {}, {}]   array ke andar objects 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
//strings pe bhi chalega...basically sab pe chalta hai jo iterable hote hain
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//ye galat hai aur kaam nhi karega 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
//var c = 300 global scope hai iska...ye block scope nhi samajhta
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);   
}

//console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //ye wale mein call pahle chal jayega kyuki declaration ka method alag hai

function addone(num){
    return num + 1
}



addTwo(5) //ye error dega kyuki declaration se pahle call hai
//expression ki tarah funcions hain
const addTwo = function(num){ 
    return num + 2
}

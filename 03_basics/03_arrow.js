 const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //pura current context deta hai
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() 

console.log(this); //yaha pe ye empty hoga {}


// +++++++important hai yeh wala++++++++

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //ye nhi chalega kyuki idhar koi object nhi hai ye direct variable hai...iska answer undefined hai
// }

//chai() 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } //ye bhi undefined rahega


//Arrow function

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()

const adTwo = (num1, num2) => {
    return num1 + num2
}


//***********curly braces mein wrap kiya toh return likhna padega aur agar parenthesis mein kiya toh jarurat nhi hai********** */

const add_Two = (num1, num2) =>  num1 + num2 
//implicit return braces hata sakte hain

const add__Two = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); //sirf this keyword hume pura context de dega mtlb pura object print kar dega jiski baat ho rhi hai abhi
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //yaha kuch nhi aayega kyuki global mein kuch hai nhi abhi {}
//but browser mein this ka value window aayega lekin node mein{} bas yeh


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) //agar bina new ke karenge toh function overwrite ho jaa rha tha
console.log(userOne.constructor);
//console.log(userTwo);
//idhar class banake kiya hai
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    } // get whi kar rhe hain lekin variable dusra bana rhe hain
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value.toUpperCase()//_password ek naya varaiable ki tarah hai idhar kyuki agar sirf password rakhte toh woh setter aur constructor dono se set ho rha tha jisse call stack full ho gya tha
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); //bina get ko call kiye hi ye call ho rha hai aur apne aap hi uppercase mein de rha hai // ye hum get kar rhe hain
console.log(hitesh)
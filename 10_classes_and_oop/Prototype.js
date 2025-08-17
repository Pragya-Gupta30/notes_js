 // let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//isse pahle uss function ke prototype mein functionality add kar rhe they aur ab idhar direct object mein kar rhe hain....isse har object ke paas ye property aur method hoga
//isse har object mein property add ho jayega
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`); 
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh() //iske paas bhi new property aa gyi
// myHeros.hitesh()  //iske paas bhi aa gyi woh property
// myHeros.heyHitesh()
// heroPower.heyHitesh() //idhar heyHitesh ke paas power nhi hai kyuki array pe defined tha woh

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //iski properties bhi le rha hai ye
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
//Using constructor

const tinderUser = new Object() //singleton object 

tinderUser.id = "123abc" //aise values add karenge
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//object ke andar object nested

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } //object ke andar object ho jayega
const obj3 = Object.assign({}, obj1, obj2, obj4) //target and source...{} is the target
//merge the objects

const obj5 = {...obj1, ...obj2} //spread operator same like array
console.log(obj5);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //gives all the keys in array format
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //all entries in array format

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the property is there or not in the object


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //isko karne ka hi method hai neeche...short mein

const {courseInstructor: instructor} = course //simpler way to print

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //as argument


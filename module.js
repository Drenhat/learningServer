
//a function to combine two functions into an object
const compilFunc = (f1, f2) => {return {f1: f1, f2: f2}}

/* a function with 2 arguments. The first argument should be a string and 
the second one a string or an integer.*/
const alrt1 = (name, time) => alert(`Wake up ${name}! It is already ${time} am.`)

// A function that wishes you happy birthday. It takes one argument.
const alrt2 = (age) => alert(`Happy birthday! Wow, you are already ${age} years old`)

export {compilFunc, alrt1, alrt2};
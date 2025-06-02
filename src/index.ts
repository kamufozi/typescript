let sales: number = 123_456_654
let course: string ='TypeScript'
let is_publiched: boolean = true
console.log(sales);

let numbers: number[]=[1,2]//An array in TypeScript

let tuple: [number,string]=[1,'fozi']//notice how we put the types inside the curly braces instead of out so that is a tuple for you
tuple.push('hello');
//tuples are nice only when it gets to two values so that the programmer can understand
//just like key value pairs

//enums are another type in typescript what they do is :
//we can represent a list of related contents
//we use const so that the compiler can do simple codes

const enum size {small = 1,medium,large}

//hover over the variables to see the values magic of typescript

//Typescript helps us avoid mistakes when working with functions also
//let's say you have a function and it is going to return a value
//you would want to precise and say what type the value must be so as to avoid errors

function calculate(income:number): number//this is what we call typescript jazz saying what the return is going to be
{
    console.log('hey')
    return 0;
}
calculate(500);

//What typescript is for it is like knee pads to avoid errors or bugs 
//from things we could have controlled like variable declarations making sure 
//it is always going to return something and things like that 

//look at this code, how is it read
let food:string='cigarettes';
//It is read as let food be string

//default values 
if((food || 'umuceri')==='chips')console.log('default_value_magic');

//
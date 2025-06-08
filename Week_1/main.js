// Javascript has 4 types of data types, string, number, boolean, undefined. 

// String Commands---------------------------------
let myString = "Lorem ipsum dolor";
console.log(myString.length);
console.log(myString.charAt(4));
console.log(myString.indexOf('m'));
console.log(myString.lastIndexOf('m'));
console.log(myString.slice(0,5)); //(Start, End before)
console.log(myString.slice(5)); //(Except last 5 characters)
console.log(myString.slice(-5)); //(last 5 characters)
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.includes('r'));
console.log(myString.split(' '));//Turns a string into an array
console.log(myString.trim())//Deletes unnecessary spaces
console.log(myString.replace('Lorem', '9999')); //Replaces the words.

// Number Commands---------------------------------
const myNumber = 29; //Integer
const myFloat = 10.0; //Float

const myStringNumber = '10';
console.log(myFloat==myStringNumber);
console.log(myFloat===myStringNumber);

// == this operator converts both the variables to string and then comapre their value.
// === this checks them with their data type.

console.log(Number(myStringNumber)===myFloat); // Number converts a string variable into number.

console.log(Number("Aman")); // Returns NaN cause "Aman" is not a number, same with undefined.
console.log(Number(false)); // returns 1 from true and 0 for false values.

console.log(Number.isInteger(myNumber)); //Checks if number or not.
console.log(Number.parseFloat('123.10abc')); //Just counts numbers, stops when they end or end  with 0.
console.log(myNumber.toFixed(3)); //Adds decimal places.
console.log(typeof myFloat.toString()) //Returns a string from number
console.log(parseInt(3.14)) //Converts a float value to integer

console.log(isNaN("Aman")) //Checks if "Aman" is a number or not.

// Math Commands---------------------------------
console.log(Math.PI); //Gives pi value
console.log(Math.trunc(Math.PI)); //Removes fraction
console.log(Math.ceil(3.45)); //Round up
console.log(Math.floor(3.55)); //Round down
console.log(Math.pow(2,3)); //(base,power)
console.log(Math.min(2,5,9)); //Returns the minimum.
console.log(Math.max(2,5,9)); //Returns the maximum.
console.log(Math.random()*10); //Random number 
console.log((Math.ceil(Math.random()*10))); //Generate random numbers

// Game: Generate random letters from your name---------------------------------
let names = "Aman";
console.log(names.charAt(Math.ceil(Math.random()*10)%(names.length)));

// If Else Statements---------------------------------
let condition1 = true;//If i let this statement without assigning any value, It will be considered as a false condition.
if(condition1){
    console.log("True");
} else {
    console.log("False");
}

//Switch statement---------------------------------
let consition2 = "Apple";
switch(consition2) {
    case "Applie"://If this
        console.log("Applie");//Then this
        break;//Break the system
    case "apple"://Else
        console.log("apple");
        break;
    case "Apple":
        console.log("Apple");
        break;
    default:
        console.log("Wrong");
}

//Ternary Operators---------------------------------
let consition3 = 10>5?"Bigger":"Smaller";//Condition?If:Else;

// Loops---------------------------------
let start = 1;//Initiation
let end = 5;
while(start<=end) {//Condition, If we put condition to true it will run for infinite times. 
    console.log("While Running",start);
    start++;//Increment
}

for(let start = 1;start<end;start++){//initiation,condition,increment
    console.log("For Running", start);
}

// Functions---------------------------------
function sum(a, b) {//function_name(paramenters)
    console.log("Sum",a+b);
}
sum(10,50);

function product(a, b){
    return a*b;//return the result  
}
console.log("Product",product(10,50));

const gitEmail = (email) => {//Arrow functions
    let gitEmail = email.slice(0,email.indexOf('@'));
    console.log(gitEmail + "@github.com");
}
gitEmail("amantiwari2912@gmail.com");

// Scope of var, let, const---------------------------------
var x = 10;
var x = 11; //var can be redeclared and reassigned
let y = 12;
y = 13; //let can't be redeclared but can be reassigned
const z = 14; //const can't be redeclared or reassigned

// Array---------------------------------
let arr = [1,2,3,'One','Two','Three',true]; //Can take any data type.
console.log(arr);
arr.push("Push"); //Add new element at the end.
console.log(arr);
arr.pop(); //Removes the last item.
console.log(arr);
arr.unshift("Unshift"); //Add new element at the start.
console.log(arr);
arr.shift(); //Removes the first element.
console.log(arr);
arr.splice(0,2,10,20); //start, how many elements, replace them with.
console.log(arr);
let joined = arr.join('-'); //Join the element by character '-'.
console.log(joined);
let nestedArray = [arr,arr];
console.log(nestedArray);
let spreadOperator = [...arr, ...arr]; //This will create a arrray by combining both the arrays, instead of create an array having two arrays.
console.log(spreadOperator);
console.log(arr.concat(arr)); //Works same as spreadoperator

// Objects(Key value pairs in curly braces---------------------------------
const myObj1 = {name : "Object", age: 10};
console.log(myObj1.name);
const myObj2 = {
    cat1: {
        obj: 'cat1',
        Obj: 'cat2'
    },
    cat2: {  
        obj: 'cat1',
        Obj: 'cat2',
        arr: [1,2,3]
    },
    cat3: {
        changed: 1
    }
};
console.log(myObj2.cat1.Obj);
console.log(myObj2.cat2.arr[2]);
console.log(myObj2.cat3.changed);
myObj2.cat3.changed = 30 ;
console.log(myObj2.cat3.changed);
for(let i in myObj2){//For in loop to iterate over enumerable properties. 
    console.log(myObj2[i]); //property is not fixed thus using bracket notation
}
let myobj3 = {};
myobj3["data"] = "New Entry";
console.log(myobj3.data);

const {name: Name, age: Age } = myObj1;//This is useful when you want to avoid conflicts with existing variable names or prefer a different naming convention called as destructuring.
console.log(Name);

// Class---------------------------------
class Bike {
    constructor(color) {//Constructor requires for instance variables.
        this.color = color;//Without declaration use this keyword with variable.
        this.seatHeight;
    }

    setSeatHeight(height) {//Methods requires a name without any prerfix. 
        this.seatHeight = height
    }

    getColor(){//getter
        return this.color;
    }

    ride() {
        console.log("Riding a bike of " + this.color + " color with seat height of " + this.seatHeight +' mm');
    }

    static isBikeAvailable(){ //Doesn't need class instance to run it.
        console.log("Yesss......");
    }
}

const myBike = new Bike('Green'); //Way to create an object.
myBike.setSeatHeight('173');
myBike.ride();
console.log(myBike.getColor());
console.log(Bike.isBikeAvailable());

class Interceptor extends Bike{
    constructor(color, price){
        super(color);//Super should be accessed first before accessing this.
        this.price = price;
    }

    bikeInfo(){
        console.log(`Interceptor costs ${this.price}, for color ${this.color} and seat height is ${this.seatHeight} mm.`);
    }
}

const myInterceptor = new Interceptor('Red',14000); //We could leave some parameters, won't get error.
myInterceptor.setSeatHeight('171');
myInterceptor.bikeInfo();

class PrivateVar{
    #priVar;//Can't be accessible outside the class. 
    constructor() {
        this.#priVar = 22;
    }

    show(){
        console.log('Private Variable:  ',this.#priVar);
    }
}
const priv = new PrivateVar();
priv.show();

// JSON---------------------------------
    //JSON is used to send and receive data in a text format that is compeletly language independent.
 const myObj3 = {
    name: 'Aman',
    hobbies: 'Playing',
    hello: function(){console.log('Hello!');}
 }
 console.log(typeof myObj3); 
 const jsonBody = JSON.stringify(myObj3);//Convert an object into JSON
 console.log(jsonBody);
 console.log(jsonBody.name)//Getting a field from jsonbody 
 const jsonToObj = JSON.parse(jsonBody);//Converts json/text into object
 console.log(jsonToObj.name);

// Handling Errors---------------------------------
"use strict";
try{ //If catch any error
    const x = 10;
    x = 20;
    console.log(x);     
} catch (error) { //Return this
    console.error(error.message);
}

// function customError(message) {//Custom error as function
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.error}`;
// }

class CustomError extends Error{//Custom error extends Error class
    constructor(message){
        super(message);
        this.name = 'customError';
    }
}

try{
    throw new CustomError('Wrong Message');    
} catch (error) {
    console.error(error.message);
} finally { //This will run everytime
    console.log('Run Everytime');
}

// Higher order functions---------------------------------(Examples of callback.)
let hof = [10,11,12,13,14,15,16];
hof.forEach(n => {//forEach loop uses arrow function to print an array.
    console.log(n);
})
console.log(//filters returns a new array afte collecting the elements that matches the conditions.
    hof.filter(n => {
        return n%2==0;
    })
)
console.log(//map returns a new array after modifying each element.
    hof.map(n => {
        return n*2;
    })
)
console.log(//Reduce returns a single value.
    hof.reduce((acc, n) => {//accumulator is like sum
        return acc+n;
    },0)//value of sum is 0
);

//Callbacks---------------------------------
    //Calling function inside a function through ,parameter.
const callback = () => {
    console.log('I am Callback function');
}

function callingcallback(callback){
    callback();
}
callingcallback(callback); //Calling function like callingcallback(callback()); won't work, you don't call when passing a funciton. 

function time(){
    const date = new Date().toLocaleTimeString(); //Data gives us different formats of time
    console.log(date);
}
setTimeout(time,6000); //setTimeout is an example of callback function, (function,time)
// setInterval(time,1000); //setInterval runs everytime after passing a time.

//Synchronous-> One after the other, sequential, Only one thing is happening at a time;
//Asynchronous-> Not dependent to finish other's to start one, happens in parts. multiple things are context switching with each other.
setTimeout(time,6000); //setTimeout is an example of asynchronous function also.
const { error } = require("console");
const fs = require("fs");
const { resolve } = require("path");
let data;
fs.readFile("data/data.json", "utf8", function(err, data) {//With this you can change the data of the file from inside the readFile block only. It's an asynchronous function.
    let jsonBody = JSON.parse(data);
    console.log(jsonBody.order_id);
    data =  jsonBody;
    console.log(data.order_id);
});
console.log("Hello");

data = fs.readFileSync('data/data.json',"utf8"); //This is synchronous function with this we can modify the body.
data = JSON.parse(data);//Need to save the converted body somewhere.
console.log(data.customer.shipping_address.country);
//Callbacks are made to use with asynchronous functions.To follow DRY(Don't Repeat Yourself).
//Nested callbacks creates callback hell, to counter them we use promises.
function playwright(version){
    return new Promise((resolve, reject)=>{//promise works on two things, resolve and reject.
        if(version>10){
            resolve('Updated');//If code runs successfully, it will return the result or whatever we want to from resolve. 
        }else {
            reject('Old Version');//If code fails, it will return the failed result from reject.
        }
    })
}

function nodeModule(version){
    return new Promise((resolve, reject)=>{
        if(version=='Updated'){
            resolve('Proceed');
        } else{
            reject('Install new version.');
        }
    })
}

playwright(1)//When we call a prmise function, its state converts to pending.
.then(version => nodeModule(version)//Then catches the result from resolve, we need to add a fucntion which takes something in parameter to process the data.
    .then(data => console.log(data))//this is chaining,lets the promises run one by one. Using Promise.all([promises]).then() will run them together.
    .catch(error => console.log(error)))//catch catches the failed message or data from the reject,
.catch(error => console.log(error));// If i create a fucntion outside promise and then try to make it store someting that resolve returns and then call it outside will return undefined because the console.log outside will run synchronously unlike the function which delays the return.

//Multiple then creates a chain, to avoid it we use async await.
async function result(){
    try{
        let playwrightResolve = await playwright(12);//Await makes asynchronous functions wait to get completed and then proceed.
        let nodeModuleResolve = await nodeModule(playwrightResolve);
        console.log(nodeModuleResolve);
    }catch(error){
        console.log(error);//With async await, this catch catches the rejected part.
    }
}
result();
//If start promise failes other's will not run.

//IIFE(Imediate Invoked Function Expression), No need to call just write the logic inside a fn without name.
(async function () {
    try{
        let playwrightResolve = await playwright(12);//Await makes asynchronous functions wait to get completed and then proceed like synchronous function.
        let nodeModuleResolve = await nodeModule(playwrightResolve);
        console.log(nodeModuleResolve);
    }catch(error){
        console.log(error);
    }
}) ();
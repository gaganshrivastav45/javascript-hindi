// #Primitive datatypes
// JavaScript mei Primitive Data Types wo hote hain jo simple value store karte hain aur immutable hote hain (direct change nahi hote).
//  JavaScript mei 7 primitive data types hote hain:

// 1 => Number => Numbers store karne ke liye.
let age = 20
let price = 99.5
console.log(age);
console.log(price);

// 2 => String => Text ya characters store karne ke liye.
let name = "zohn"
console.log(name);

// 3 => Boolean => Sirf true ya false value.
let isLoggedIn = true
console.log(isLoggedIn);

// 4 => Null=> Intentional empty value.
let temperature = null
console.log(temperature);

// 5 => Undefined => Jab variable declare ho lekin value assign na ho.
let score
console.log(score);

// 6 => Symbol => Unique value create karne ke liye (advanced use).
let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId);

// 7 => BigInt => Bahut bade numbers store karne ke liye.
let bigNumber = 12345678901234567890n
console.log(bigNumber);

// Short Trick (Yaad rakhne ke liye)
// N => Number
// N => Null
// S => String
// S => Symbol
// U => Undefined
// B => Boolean
// B => BigInt

// ****************************Reference DataTypes *********************************************************

// Reference Data Types
// Reference datatypes wo hote hain jo memory mei reference (address) store karte hain, direct value nahi.
// Inme data complex structure mei hota hai.
// JavaScript mei mainly 3 reference types use hote hain.

// 1 => Object => Key-value pair me data store hota hai.

let user = {
  name: "Priyanshu",
  age: 20
}
console.log(user.name)

// 2 => Array => Multiple values ek list me store karne ke liye.

let fruits = ["apple", "mango", "banana"]

console.log(fruits[1])

// 3 => Function => Function bhi JavaScript me object type hota hai.

function greet(){
  console.log("Hello")
}

greet();

// Example (Reference behavior)

let obj1 = {name: "Priyanshu"}
let obj2 = obj1

obj2.name = "Rahul"

console.log(obj1.name)


// *************************************************************************************
// JavaScript Static type hai ya Dynamic type?
// JavaScript ek Dynamic Typed Language hai.

// Dynamic typed ka matlab hai:
// 👉 Variable ka type pehle declare nahi karna padta
// 👉 Type runtime par automatically change ho sakta hai


let value = 10     // number
value = "Hello"    // ab string ho gaya
console.log(value);
// JavaScript me ye valid hai, kyunki type change ho sakta hai.

// Static Typed Language kya hoti hai?
// Static typed language mei variable ka type pehle define karna padta hai aur baad mei change nahi hota.

// Example languages:
// Java
// C++
// TypeScript

// int number = 10;
// number = "Hello"; // error

// Data Type	typeof Result

// Number	    number
// String	    string
// Boolean	    boolean
// Undefined	undefined
// Null	    object ⚠️
// Symbol	    symbol
// BigInt	    bigint
// Array	    object
// Object	    object
// Function	function
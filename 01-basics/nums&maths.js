// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otheerNumber = 123.8966
// console.log(otheerNumber.toPrecision(3));

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'));

let num = "50.78"
console.log(parseInt(num)) // decimal ko int mei badal deta hai 

let num = "50.78"
console.log(parseFloat(num)) //string ko decimal mei badal deta hai 

console.log(Number.MAX_VALUE)

console.log(Number.isInteger(10))
console.log(Number.isInteger(10.5)) // check karta hai k number int hai ya nahi

console.log(isNaN("hello"))
console.log(isNaN(100))  //check kata hai value number nahi hai

let num = new Number(200)
console.log(num.valueOf()) // number ki actual value return karta hai 

console.log(Number.isFinite(100))
console.log(Number.isFinite(Infinity)) // check karta hai ki number finite hai ya infinity

console.log(Number.isSafeInteger(100)) // check karta hai ki number safe integer range mei hai ya nahi 

console.log(Number.EPSILON) // ye very small number hota hai jo floating point calculations mei use hota hai 

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

let num = 1e6
console.log(num)// large number kos hort form mei likh sakte hai 

// ****************************************************Maths**********************************************


let num = -10
console.log(Math.abs(num)) // negaative number ko positive bnata hai 

console.log(Math.round(4.6))
console.log(Math.round(4.2)) // numbers ko nearest integer mei round kart hai 

console.log(Math.ceil(4.1)) // hamesha next integer deta hai 

console.log(Math.floor(4.9)) //hamesha lower integer deta hai  

console.log(Math.random()) // 0 or 1 ke beech random number deta hai 

let num = Math.floor(Math.random() * 10) + 1
console.log(num) // 1 se 10 ke beech mei random number deta hai 

console.log(Math.max(10, 20, 30, 40)) // largest number find karta hai

console.log(Math.min(10, 20, 30, 40)) // smallest number find karta hai 

console.log(Math.pow(2,3)) // power calculate karta hai 

console.log(Math.sqrt(64)) // square reet nikalta hai 
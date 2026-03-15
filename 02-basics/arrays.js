// Array => An Array is a data structure used to store multiple values in a single variable.
// const myArr = [0,1,2,3,4,5]
// console.log(myArr[2]);

// Array Method 

// let fruits = ["apple", "banana"]; //Array ke end mei new value add karta hai
// fruits.push("mango");
// console.log(fruits);

// let fruits = ["apple", "banana", "mango"]; //Array ki last value remove karta hai
// fruits.pop();
// console.log(fruits);

// let fruits = ["apple", "banana", "mango"]; //Array ki first value remove karta hai
// fruits.shift();
// console.log(fruits);

// let fruits = ["banana", "mango"]; //Array ke start mei value Add karta hai 
// fruits.unshift("apple");
// console.log(fruits);

// let fruits = ["apple", "banana", "mango"]; //Array mein total elements kitne hain batata hai
// console.log(fruits.length);

// let fruits = ["apple", "banana", "mango"]; //Check karta hai value array mein hai ya nahi
// console.log(fruits.includes("banana"));

// let fruits = ["apple", "banana", "mango"]; //Element kis position par hai batata hai
// console.log(fruits.indexOf("banana"));

// let fruits = ["apple", "banana", "mango", "orange"]; //Array ka kuch part copy karne ke liye use hota hai. Original array change nahi hota.
// let result = fruits.slice(1,3);
// console.log(result);

// let fruits = ["apple", "banana", "mango"]; //Array se element remove ya add karne ke liye use hota hai
// fruits.splice(1,1);
// console.log(fruits);

// let numbers = [1,2,3];  //Array ke har element par function apply karta hai aur new array return karta hai
// let result = numbers.map(num => num * 2);
// console.log(result);

// let numbers = [10,20,30,40]; //Condition ke basis par elements filter karta hai
// let result = numbers.filter(num => num > 20);
// console.log(result);

// let fruits = ["apple", "banana", "mango"]; //Array ke har element par loop chalane ke liye use hota hai
// fruits.forEach(function(item){
//   console.log(item);
// });

// let numbers = [10, 20, 30, 40]; //Condition ke hisaab se pehla element find karta hai
// let result = numbers.find(num => num > 20);
// console.log(result);

// let numbers = [10, 20, 30, 40]; //Condition ke hisaab se index return karta hai
// let result = numbers.findIndex(num => num > 20);
// console.log(result);

// let a = [1,2] //2 arrays ko join karta hai
// let b = [3,4]
// let c = [5,6]
// // let result = a.concat(b)
// // console.log(result)
// let newresult = [...a, ...b, ...c]
// console.log(newresult)


// let fruits = ["apple","banana","mango"] //Array ko string mein convert karta hai
// console.log(fruits.join("-"))

// let numbers = [1,2,3,4] //Array ko reverse karta hai
// numbers.reverse()
// console.log(numbers)

// console.log(Array.from("Gagan"))

// let numbers = [5,2,8,1] //Array ko sort karta hai
// numbers.sort()
// console.log(numbers)

// let numbers = [10, 20, 30]; //Check karta hai ki sabhi elements condition follow karte hain ya nahi.
// let result = numbers.every(num => num > 5);
// console.log(result);

// let numbers = [5, 10, 15]; //Check karta hai ki koi bhi ek element condition follow karta hai ya nahi
// let result = numbers.some(num => num > 10);
// console.log(result);

// let arr = [1, 2, [3, 4], [5, 6]]; //Nested array ko simple array bana deta hai
// console.log(arr.flat());

// let numbers = [1,2,3]; //map + flat dono ka combination hota hai
// let result = numbers.flatMap(num => [num, num * 2]);
// console.log(result);

// let numbers = [1,2,3,4]; //Array ko single value mein convert karta hai (sum, total etc.)
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// let fruits = ["apple", "banana", "mango"]; //Array ke kisi specific index ka element nikalne ke liye
// console.log(fruits.at(1));

// let arr = [1,2,3,4]; //Array ke elements ko ek hi value se fill kar deta hai
// arr.fill(0);
// console.log(arr);

// let arr = [1,2,3,4,5]; //Array ke ek part ko dusri position par copy karta hai
// arr.copyWithin(0,3);
// console.log(arr);

// let fruits = ["apple","banana","mango"]; //Array ke index aur value dono return karta hai
// for (let x of fruits.entries()) {
//   console.log(x);
// }

// let fruits = ["apple","banana","mango"]; //Array ke sirf index values return karta hai
// for (let x of fruits.keys()) {
//   console.log(x);
// }
// //object literals => An Object Literal is the simplest way to create an object in JavaScript using curly braces {}.

// const user = {
//   name: "Gagan",
//   age: 15,
//   city: "Delhi"
// };

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// // Copy / Merge
// const copy1 = Object.assign({}, user);
// console.log("Copy using assign:", copy1);

// const copy2 = { ...user };
// console.log("Copy using spread:", copy2);

// // Object.create()
// const newObj = Object.create(user);
// console.log("Created with prototype:", newObj);
// console.log("Access from prototype:", newObj.name);

// // fromEntries()
// const arr = [["course", "BCA"], ["year", 3]];
// const objFromArr = Object.fromEntries(arr);
// console.log("From Entries:", objFromArr);

// // Check methods
// console.log("hasOwn (name):", Object.hasOwn(user, "name"));
// console.log("hasOwnProperty (age):", user.hasOwnProperty("age"));
// console.log("Object.is:", Object.is(10, 10));


// // Freeze / Seal / Prevent
// const obj1 = { a: 1 };
// Object.freeze(obj1);
// obj1.a = 100;
// console.log("Freeze:", obj1);

// const obj2 = { b: 2 };
// Object.seal(obj2);
// obj2.b = 200;
// obj2.c = 300;
// console.log("Seal:", obj2);

// const obj3 = { d: 4 };
// Object.preventExtensions(obj3);
// obj3.e = 5;
// console.log("Prevent Extensions:", obj3);

// user.greeting = function(){
//   console.log("hello user")
// }

// user.greetingTwo = function(){
//   console.log(`${this.name}`)
// }

// user.greeting();
// user.greetingTwo();

// **************************constructor ki help se declare karna ******************************

// const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//   email:"some@gmail.com",
//   fullName:{
//     userFullName:{
//       firstName: "Priyanshu",
//       lastName:"Shrivastav",

//     }
//   }
// }
// console.log(regularUser.fullName.userFullName.firstName);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}
// const obj4 = {5:"a", 6:"b"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

// const user = [
//   {
//     id:1,
//     email:"g@gmail.com",
//   },
//     {
//     id:2,
//     email:"h@gmail.com",
//   },
//     {
//     id:3,
//     email:"m@gmail.com",
//   },
// ];
// console.log(user[1].email)
console.log(user.hasOwnProperty("age"));
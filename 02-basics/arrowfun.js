// const user = {
//     username:"hitesh",
//     age:33,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = () => {
//     let username = "hitesh"
//     console.log(username);
// }

// chai()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username: "hitesh"})

console.log(addTwo(20,30))


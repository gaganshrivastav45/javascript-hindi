

// if

// const temp = 41
//  if (temp === 41){
//     console.log("temm is 41")
//  }else{
//     console.log("temp is not 41")
//  }

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
//  console.log(`user power: ${power}`);

// const balance = 1200

// if (balance< 500){
//    console.log("less than 500");
// }else if(balance< 700) {
//    console.log("less than 700");
// }else if (balance< 900){
//    console.log("less than 900");
// }else if (balance< 1100){
//    console.log("less than 1100");
// }else{
//     console.log("yes, this is greaten then 1000")
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true


if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Course")
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("userLogged in")
}
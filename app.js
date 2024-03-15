//////////////////////
// Part One: Fizz Buzz
//////////////////////

// Loop through all numbers from 1 to 100.
// for (let i = 0; i <=100; i++){
//     console.log(i)
// }
// If a number is divisible by 3, log “Fizz.”
// i = 0
// while (i < 100){
//     if (i % 3 === 0){
//         console.log("Fizz")
//     }else{
//         console.log(i)
//     }
//     i++
// }
// If a number is divisible by 5, log “Buzz.”
// while (i < 100){
//     if (i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
//     i++
// }
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

// If a number is not divisible by either 3 or 5, log the number.
let i = 0
 while (i <= 100){
    if (i % 3 === 0 && i % 5 !== 0 ){
        console.log("Fizz")
    }else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz")
    }else if(i % 3 === 0 && i % 5 === 0 ){
        console.log("Fizz Buzz")
    }
    else{
        console.log(i)
    }
    i++
 }


//  Part two: Prime Time




// Task1

// var date = new Date()
// var todaydate = date.getDate()
// var month = date.getMonth() +1
// var year = date.getFullYear()

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
// var time = date.getHours()
// let currentDate = `Today Date:${todaydate}/${month}/${year} <br/> <br/> `;
// let currentDay =`Today Day:${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  <br/> <br/>`
// document.write(currentDate )
// document.write(currentDay)

// Task 2
// var randomNumber = Math.round(Math.random()*10)
// console.log(randomNumber)

// var customerNumber1 =parseInt( prompt(`3 chance <
// enter a Number`))

// if(randomNumber==customerNumber1){
//     document.write("yes its right")
// }
// else if(randomNumber !=customerNumber1){
//     var customerNumber2 = prompt(`2 chance enter a Number`)  
//     if(randomNumber==customerNumber2){
//         document.write("yes its right")
//     }
//     else{
//         var customerNumber3 = prompt(`1 chance  enter a Number`) 
//         if(randomNumber==customerNumber3){
//             document.write("yes its right")
//         }
//         else{document.write("No")}
//     }
// }

// Task3

// var input1 =parseInt(prompt('enter first Number'))
// var input2 =parseInt(prompt('enter second Number'))
// addition =`sum:${input1 + input2}<br/>`
// subtraction =`subtraction:${input1 - input2}<br/>`
// Multiplication =`Multiplication:${input1 * input2}<br/>`
// division =`division:${input1 / input2}<br/>`
// document.write(addition)
// document.write(subtraction)
// document.write(Multiplication)
// document.write(division)


// Task4
// var sum = 0
// var number = parseInt( prompt('Enter a number'))

// function getSum ( number ){
//     if(number >= 0){
//         sum += number
//         number = parseInt( prompt('Enter a number'))
//         getSum ( number )
//     }else{
//         document.write(sum)
//     }
// }

// getSum ( number )

// for(x=0;x>=0;x++){
//     if(number >= 0){
//         sum += number
//         number = parseInt( prompt('Enter a number'))
//     }else{
//         document.write(sum)
//         break
//     }
// }

var sum = 0
var number = parseInt( prompt('Enter a number'))

function getSum ( number ){
    if(number >= 0){
        sum += number
        number = parseInt( prompt('Enter a number'))
        getSum ( number )
    }else{
        document.write(sum)
    }
}

getSum ( number )

// for(x=0;x>=0;x++){
//     if(number >= 0){
//         sum += number
//         number = parseInt( prompt('Enter a number'))
//     }else{
//         document.write(sum)
//         break
//     }
// }
var randomNumber = Math.round(Math.random()*10)
console.log(randomNumber)

var customerNumber1 =parseInt( prompt(`3 chance enter a Number`))

if(randomNumber==customerNumber1){
    document.write(`<h2 style="text-align:center"> Yes you are Right <h2/>`)
}
else if(randomNumber !=customerNumber1){
    var customerNumber2 = prompt(`2 chance enter a Number`)  
    if(randomNumber==customerNumber2){
        document.write(`<h2 style="text-align:center"> Yes you are Right <h2/>`)
    }
    else{
        var customerNumber3 = prompt(`1 chance  enter a Number`) 
        if(randomNumber==customerNumber3){
            document.write(`<h2 style="text-align:center"> Yes you are Right <h2/>`)
        }
        else{document.write(`<h2 style="text-align:center"> Not Correct <h2/>`)}
    }
}
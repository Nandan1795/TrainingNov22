document.write(`<h1> Task 1 <h1/>`)
var date = new Date()
var todaydate = date.getDate()
var month = date.getMonth() +1
var year = date.getFullYear()

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
var time = date.getHours()
let currentDate = `Today Date:${todaydate}/${month}/${year} <br/> <br/> `;
let currentDay =`Today Day:${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  <br/> <br/>`
document.write(currentDate )
document.write(currentDay)



let url = "https://api.covid19api.com/summary"

// let data = [{ name: "nandan", age: 27, rollno: 27 },
// { name: "dixit", age: 26, rollno: 27 }, { name: "narender", age: 25, rollno: 27 }]

let dataAPI
const getData = (url) => {
    return fetch(url)
        .then(responce => responce.json())
        .then(data => data)
}

getData(url)
.then(e => e.Countries)
.then(data => {
for (let index = 0; index < data.length; index++) {
    document.getElementById("select").innerHTML += `<option> ${data[index].Country}</option>`
}
 dataAPI = data
})

function selectedData() {
    console.log(dataAPI)
    document.getElementById("content").innerHTML =""
    userName = document.getElementById("select").value
    let countryData = {}
    console.log(document.getElementById("select").value)
    maindata = dataAPI.forEach(e => {
        if (e.Country == userName) {
            countryData = e
        }
     
    })
    document.getElementById("content").innerHTML =`<p>Country-id:- ${countryData.ID}</p> <p> country-code:-${countryData.CountryCode}</p>
    <p> country-Name:-${countryData.Country}</p>`
}
// .catch(error => console.log(error))

// function getData(data) {

//     data.map((value, index) => {
//         console.log(value)
//         document.getElementById("select").innerHTML += `<option ${index}>${value.name}</option>`

//     })
// }
// getData(data)

// function selectedData() {
//     document.getElementById("content").innerHTML =""
//     userName = document.getElementById("select").value
//     let userData = {}
//     console.log(document.getElementById("select").value)
//     maindata = data.forEach(e => {
//         if (e.name == userName) {
//             userData = e
//         }
     
//     })
//     document.getElementById("content").innerHTML += `age:${userData.age}
//     roll:${userData.rollno}`
//     console.log(maindata)
// }
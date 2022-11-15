const containerfluid = document.createElement("div")
const container = document.createElement("div")
const header = document.createElement("div")
const aboutUs = document.createElement("div")
const leftHeader =document.createElement("div")
const rightHeader = document.createElement("ul")


containerfluid.setAttribute("id","containerfluid");
container.setAttribute("id","container");
header.setAttribute("id","header");
leftHeader.setAttribute("id","leftHeader");
rightHeader.setAttribute("id","rightHeader");



document.body.appendChild(containerfluid)


document.getElementById("containerfluid").appendChild(container)

document.getElementById("container").appendChild(header)
document.getElementById("header").appendChild(leftHeader)
document.getElementById("header").appendChild(rightHeader)

document.body.appendChild(aboutUs);
document.getElementById("leftHeader").innerHTML =`<img src="https://uploads-ssl.webflow.com/5fa25266badbdb239c79ef86/60baff5fcc93ec0fda8a19ba_s%20logo%20copy%203.png"/> <h3> Nandan</h3>`

document.getElementById("rightHeader").innerHTML =`<li> <h3> About Us </h3></li>
<li> <h3> Contact </h3></li>
<li> <button> View Work </button> </li>`






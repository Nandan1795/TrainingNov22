// Selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todolist = document.querySelector(".todo-list");
var arrayofStorage = []

btn.onclick = create;
todolist.onclick = deletecheck;

//Functions

function getLocalData(){
    var  localStorageData = localStorage.getItem("data")
if(localStorageData){
    var localStorageDataArray = localStorageData.split(",")

    for (let index = 0; index < localStorageDataArray.length; index++) {
       
        
    
    var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = localStorageDataArray[index]

        newDiv.appendChild(newLi);

        var cmpltbtn = document.createElement("button");
        cmpltbtn.classList.add("cmplt-btn");
        cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(cmpltbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todolist.appendChild(newDiv);
        todoInput.value = "";
    }
}
else{""}
}
getLocalData()
function create(e) {
   var localData =localStorage.getItem("data")
   var localStorageDataArray=[];
    if (todoInput.value != "") {
        e.preventDefault();
        if(localData){
            var localStorageDataArray = localData.split(",")
       localStorageDataArray.push(todoInput.value)
        localStorage.setItem("data",localStorageDataArray)
     var  localStorageData = localStorage.getItem("data")
      var localStorageDataArray = localStorageData.split(",")


        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = localStorageDataArray[localStorageDataArray.length - 1]

        newDiv.appendChild(newLi);

        var cmpltbtn = document.createElement("button");
        cmpltbtn.classList.add("cmplt-btn");
        cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(cmpltbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todolist.appendChild(newDiv);
        todoInput.value = "";
        }
        else{
            localStorageDataArray.push(todoInput.value)
            localStorage.setItem("data",localStorageDataArray)
            var newDiv = document.createElement("div");
            newDiv.classList.add("todo");
    
            var newLi = document.createElement("li");
            newLi.classList.add("todo-item");
            newLi.innerHTML = localStorage.getItem("data")
    
            newDiv.appendChild(newLi);
    
            var cmpltbtn = document.createElement("button");
            cmpltbtn.classList.add("cmplt-btn");
            cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
            newDiv.appendChild(cmpltbtn);
    
            var deletebtn = document.createElement("button");
            deletebtn.classList.add("delete-btn");
            deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
            newDiv.appendChild(deletebtn);
    
            todolist.appendChild(newDiv);
            todoInput.value = "";
        

        }
    
    } else {
        alert("Input Field Can't Be Blank");
    }
}

function deletecheck(e) {
    var item = e.target;

    if (item.classList[0] === "delete-btn") {
        var parent = item.parentElement;
        parent.remove();
    }

    if (item.classList[0] === "cmplt-btn") {
        var parent = item.parentElement;
        parent.classList.toggle("completed");
    }
}
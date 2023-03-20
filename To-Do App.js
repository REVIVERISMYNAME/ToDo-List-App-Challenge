console.log("JS-Page Loaded");

// Heading Date // 
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//Created Array displayed in list// 
var taskList = ["Task-1, Task-2"];
console.log(taskList);

    var li = document.createElement("li"); 
        li.textContent = taskList;

     console.log(li);
     var list  = document.getElementById("list"); 
         list.appendChild(li);
         console.log(li);







var addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTask);
    function addTask() {
        console.log(" -- addButton Pressed -- ");
        console.log(listOfTasks);
    
        
        var inputField = document.getElementById("inputField").value;
       
        var listOfTasks = [];
            listOfTasks.push("")
            
        var li = document.createElement("li");
            li.textContent = listOfTasks;

            var list  = document.getElementById("list"); 
            list.appendChild(li); 
    }
console.log("JS-Page Loaded");

// Heading Date // 
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);



var contentTab = document.getElementsByClassName("content");
var headerTab = document.getElementsByClassName("header");
var footerTab = document.getElementsByClassName("footer");
var viewButtonsTab = document.getElementsByClassName("viewButtons");
    
//Button to view "All" //
      var viewAllButton = document.getElementById("view-All-Button");
      viewAllButton.addEventListener("click", viewAll);
     function viewAll() {
        console.log(" -- Viw 'All' Button Pressed -- ");
        viewButtonsTab[0].style.display = "block";
        headerTab[0].style.display = "block";
        contentTab[0].style.display = "block";
        footerTab[0].style.display = "block";


    }


//Button to view "To-Do" list only //
      var viewTo_doButton = document.getElementById("view-ToDo-Button");
      viewTo_doButton.addEventListener("click", viewTo_Do);
      function viewTo_Do() {
        console.log(" -- To-Do Button Pressed -- ");
        viewButtonsTab[0].style.display = "block";
        headerTab[0].style.display = "block";
        contentTab[0].style.display = "block";
        footerTab[0].style.display = "none";

        
}


//Button to view Tasks "Done" only //
var viewDoneButton = document.getElementById("view-Done-Button");
    viewDoneButton.addEventListener("click", viewDone);
    function viewDone() {
        console.log(" -- 'Done' Button Pressed -- ");

    }
    

//Created Array displayed in list// 
var taskList = [
    Task1 = "T1",
    Task2 = "T2"

];

console.log(taskList);

    var li = document.createElement("li"); 
        li.textContent = taskList ;

    
     var list  = document.getElementById("list"); 
         list.appendChild(li);
         console.log(li);


        






// Function for button to add a task //
var addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTask);
    function addTask() {
        console.log(" -- addButton Pressed -- ");
    
        
        var inputField = document.getElementById("inputField").value;
       
        var listOfTasks = [];
            listOfTasks.push(inputField)
            
        var li = document.createElement("li");
            li.textContent = listOfTasks;

            var list  = document.getElementById("list"); 
            list.appendChild(li); 
            console.log(listOfTasks);


            // Add Task to Arr from InputFiel //
            taskList.push(inputField);
            console.log(taskList);

    }



    // Function for button to remove Task from List //


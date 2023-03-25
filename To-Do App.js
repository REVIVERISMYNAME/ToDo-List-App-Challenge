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


    const list = document.getElementById("list");
    const input = document.getElementById("inputField");

    const CHECK = "fa-check-circle";
    const UNCHECK = "fa-circle-thin";
    const LINE_THROUGH = "lineThrough";
    const removeItem = (`<i class="fa fa-trash-o de" job="delete" id="remove"></i>`);

        //Created Array displayed in list// 
        var taskList = [
        "To-Do Tasks Below ...",
        ];
    // Function to display Array in the "list" element //
    function generateListItems(arg) {
        let items = "";
        for(let i = 0; i < arg.length; i++) {
            items += `<li class="item">
            <i class="fa fa-circle-thin co" job="complete" id="0"></i> 
            <p class="text" id="examplePara">${arg[i]}</p>
            <i class="fa fa-trash-o de" job="delete" id="remove"></i>
            </li>` ;
        }
        return items;
    }
    document.getElementById("list").innerHTML = 
    `<ul>
        ${generateListItems(taskList)}
    </ul>`;

// Function for button to add a task //
var addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTask);
     function addTask() {
        console.log(" -- addButton Pressed -- ");
        
        var inputField = document.getElementById("inputField");
       
        taskList.push(inputField.value);
        console.log(taskList);
            
             document.getElementById("list").innerHTML = 
              `<ol>
                ${generateListItems(taskList)}
              </ol>`;

    }
    console.log(taskList);

    







    // Function for button to remove Task from List //
    var removeButton = document.getElementById("remove");
    removeButton.addEventListener("click", removeTask);
    function removeTask() {
     console.log(" -- Remove Button Pressed --");

     taskList.pop(inputField.value);


    };

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
    
//Button to view "Home" //
      var viewAllButton = document.getElementById("view-All-Button");
      viewAllButton.addEventListener("click", viewAll);
     function viewAll() {
        console.log(" -- Viw 'Home' Button Pressed -- ");
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
        "To-Do Tasks Below ...",
        ];
   


// Function for Task to list items
  function addNewTask() {
    console.log(' -- "ADD" Button Pressed --');
    taskList.push(myInput.value);

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Input Field Empty");
  }
  else {
    document.getElementById("myUL").appendChild(li);
  }


  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  console.log(taskList);


  // To hide the list item when "X" is clicked 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Function for "Remove" button appended to list items
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Function for "X" button to hide relevant list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking relevant list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
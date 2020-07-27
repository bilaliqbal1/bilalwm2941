// output todays date
//today's date
var date = document.getElementById('date');
var options = {weekday: "long", month: "short", day: "numeric"}
var today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

var list = document.getElementById("list");
//add todo list
function toDo(){
    //return the alert pop-up if task is empty
    var inputValue = document.getElementById("input");
    if(inputValue.value == ""){
        alert("Please fill the task field");
        return;
    }
    // add toDo task in the list
    var to_do = document.getElementById("input");
    var li = document.createElement('li')
    var liText = document.createTextNode(to_do.value)
    li.appendChild(liText)
    list.appendChild(li)
    // delete button for task
    var delTask  = document.createElement("button")
    var delText = document.createTextNode('Delete')
    delTask.setAttribute("onclick","deleteTask(this)");
    delTask.setAttribute("class","btn")
    delTask.appendChild(delText)
    li.appendChild(delTask)

    // Edit button for task
    var editTask  = document.createElement("button")
    var editText = document.createTextNode('Edit')
    editTask.setAttribute("onclick","editTask(this)");
    editTask.setAttribute("class","btn2")
    editTask.appendChild(editText)
    li.appendChild(editTask)

    // Edit button icon
    var editIcon = document.createElement("i");
    editIcon.setAttribute("class","fa fa-pencil");
    editTask.appendChild(editIcon);

    // Delete button icon
    var deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class","fa fa-trash");
    delTask.appendChild(deleteIcon);
    
    to_do.value = "";
    console.log(list)
}
//function for delete a task
function deleteTask(e){
    e.parentNode.remove();
}
//function for edit a task
function editTask(e){
    var val = prompt("Edit Your Task:",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
// function for delete all task
function clearAll(){
    list.innerHTML="";
}

var todoList = document.getElementById("Todo-List");
var taskTextAreaInput = document.querySelector("textarea.todoInput");

function addTask(){
    var taskInput = 
    taskTextAreaInput.value;

    var newTask =
    document.createElement("li");
    var checkedT = checkImportant(newTask, taskInput);
    todoList.appendChild(checkedT);

    
    document.querySelector("textarea.todoInput").value = ""; //? Reseting
    checkEmpty();
    addEventToTask();
}
function checkImportant(newTask, taskInput){
    var important = 
    document.querySelector("input#impotant-task").checked;

    if(important){
        newTask.classList.add("task", "important");
        newTask.innerHTML =
        /*html*/`
         <input type="checkbox" name="taskCheck" class="checkBox">
         <label for="taskCheck" class="taskLabel">${taskInput}</label>
         <span style="font-size: 10px; color: red;">
           ! This is Important Task !
         </span>
        `;
    } else {
        newTask.classList.add("task");
        newTask.innerHTML =
        /*html*/`
         <input type="checkbox" name="taskCheck" class="checkBox">
         <label for="taskCheck" class="taskLabel">${taskInput}</label>
        `;
    }

    return newTask;
}

function checkEmpty(){
    var taskLength = document.querySelectorAll("li.task").length;
    var message = document.querySelector("p#message");

    if(taskLength <= 0){
        message.innerHTML = "Add New Task And It will appear here";
        message.setAttribute("class", "empty");
    } else if (taskLength > 0){
        message.innerHTML = "Your Task:";
        message.setAttribute("class", "notEmpty");
    }
}
function clearDT(){
    var checkBox = document.querySelectorAll("input.checkBox");
    //* This is Array
    var taskBox = document.querySelectorAll("li.task");
    //* Also this

    for(var i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked){
            todoList.removeChild(taskBox[i]);
        }
    }
    checkEmpty();
}

function addEventToTask(){
    var checkBox = document.querySelectorAll("input.checkBox");
    for(var l = 0; l < checkBox.length; l++){
        checkBox[l].addEventListener("click", markDT);
    }
}

function markDT(){
    var checkBox = document.querySelectorAll("input.checkBox");
    var taskLabel = document.querySelectorAll("label.taskLabel");
    
    for(var i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked){
            taskLabel[i].classList.add("markedTask");
        } else {
            taskLabel[i].classList.remove("markedTask");
        }
    }
}

function clearAllT(){
    var taskBox = document.querySelectorAll("li.task");

    for(var c = 0; c < taskBox.length; c++){
        todoList.removeChild(taskBox[c]);
    }
    checkEmpty();
}


var bodyHTML = document.querySelector("body");
var themeBtn = document.querySelector("input.darkModeButton");
themeBtn.onclick = toggleTheme;
var darkMode = false;

function toggleTheme(){
    darkMode = !darkMode;
    bodyHTML.classList.toggle("lightMode");

    if(darkMode){
        themeBtn.value = "Light-Mode";
    } else {
        themeBtn.value = "Dark-Mode";
    }
}

var buttons = document.querySelectorAll("input.buttons");

function toDark(i){
    buttons[i].classList.remove("NMBtn");
    buttons[i].classList.add("OMBtn");
}
function toNormal(i){
    buttons[i].classList.remove("OMBtn");
    buttons[i].classList.add("NMBtn");
}
function toNearDark(i){
    buttons[i].classList.add("NDBtn");
}
function removeND(i){
    buttons[i].classList.remove("NDBtn");
}


var addTaskBtn = document.querySelector("input.addTaskBtn");
addTaskBtn.addEventListener("click", addTask);
var clearDTBtn = document.querySelector("input.clearDT");
clearDTBtn.addEventListener("click", clearDT);
var clearALLT = document.querySelector("input.clearAllbtn");
clearALLT.addEventListener("click", clearAllT);
checkEmpty();

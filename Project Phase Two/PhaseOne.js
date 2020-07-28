//targeting multiple nodes to be modified  
let ul = document.getElementById("toDoList");
let body = document.getElementsByTagName("body")[0];
let background = document.getElementById("mainBody");
let label = document.getElementsByTagName("label")[0];
let footer = document.getElementsByTagName("footer")[0];
let p = document.getElementsByTagName("p")[0];
let weatherCSS = document.getElementById("cityAndWeather");
let locationCSS = document.getElementById("location");
let moreWeatherCSS = document.getElementById("weather");
let listRemove = document.querySelectorAll("li");
let listDown = document.querySelectorAll("moveDown");
let listUp = document.querySelectorAll("moveUp");
let button = document.getElementById('add');
let button2 = document.getElementById('light');

//Add item to list by clicking button
button.onclick = (e) => {
  //prevents page from reloading
  e.preventDefault();
  //create new elements everytime it's ran
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let button3 = document.createElement("button");
  let button4 = document.createElement("button");
  let button5 = document.createElement("button");
  //Get the most recent user input
  let userInput = document.getElementById('input');
  //remodify checkbox each time
  button3.innerHTML = "Delete";
  button4.innerHTML = "Move up";
  button5.innerHTML = "Move down";
  button3.className += "remove";
  button4.className += "moveUp";
  button5.className += "moveDown";
  checkbox.type = "checkbox";
  checkbox.onclick = ding;
  //append new list item
  li.appendChild(document.createTextNode(userInput.value));
  li.appendChild(checkbox);
  li.appendChild(button3);
  li.appendChild(button4);
  li.appendChild(button5);
  ul.appendChild(li);
  button3.onclick = remove;
  button4.onclick = moveUp;
  button5.onclick = moveDown;
};

//output ding sound on checkbox click (couldn't direct onclick due to list function) also sound takes 2 seconds to reset
function ding() {
  document.getElementById("audio").play();
}

//Change site to dark mode
button2.onclick = function () {
  //detects if the class name is empty
  if (body.className == "") {
    //changes button text and css layout to "Dark mode"
    button2.innerHTML = "Dark Mode";
    body.className = "dark";
    label.className = "dark";
    p.className = "dark";
    background.className = "dark";
    footer.className = "dark";
    weatherCSS.className = "dark";
    locationCSS = "dark";
    moreWeatherCSS = "dark";
  } else {
    //changes button text and css layout to "Light mode"
    button2.innerHTML = "Light Mode";
    body.className = "";
    label.className = "";
    p.className = "";
    background.className = "";
    footer.className = "";
    weatherCSS.className = "";
    locationCSS = "";
    moreWeatherCSS = "";
  }
};

//Remove function to delete item off list
function remove(e) {
  //targets closest list item from the button
  let deleteitem = e.target.closest("li");
  deleteitem.remove();
}

//function to move list item up
function moveUp(e) {
  let lastItem = ul.lastChild;
  let moveItem = e.target.closest("li");
  moveItem.parentNode.insertBefore(moveItem, moveItem.previousSibling);
  
}

//function to move list item down
function moveDown(e) {
  let moveItem = e.target.closest("li");
  let firstItem = ul.firstChild;
  //if statement added  to jump to the first element with movedown
  if (moveItem.nextElementSibling) {
    moveItem.parentNode.insertBefore(moveItem.nextElementSibling, moveItem);
  } else {
    moveItem.parentNode.insertBefore(moveItem, firstItem);
  }
}
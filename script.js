/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add To Tasks To The Local Storage
*/

// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus On Input Field
window.onload = function () {
  theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {

  // If Input is Empty
  if (theInput.value === '') {

    console.log("No Value");

  } else {

    let noTasksMsg = document.querySelector(".no-tasks-message");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {

      // Remove No Tasks Message
      noTasksMsg.remove();

    }

    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
    mainSpan.appendChild(text);

    // Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);

    // Empty The Input
    theInput.value = '';

    // Focus On Field
    theInput.focus();

    // Calculate Tasks
    calculateTasks();

  }

};

document.addEventListener('click', function (e) {

  // Delete Task
  if (e.target.className == 'delete') {

    // Remove Current Task
    e.target.parentNode.remove();

    // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {

      createNoTasks();

    }

  }

  // Finish Task
  if (e.target.classList.contains('task-box')) {

    // Toggle Class 'finished'
    e.target.classList.toggle("finished");

  }

  // Calculate Tasks
  calculateTasks();

});

// Function To Create No Tasks Message
function createNoTasks() {

  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");

  // Add Text To Message Span Element
  msgSpan.appendChild(msgText);

  // Add Class To Message Span
  msgSpan.className = 'no-tasks-message';

  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);

}

// Function To Calculate Tasks
function calculateTasks() {

  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
// Required variables
var session_seconds = 59;
var session_minutes = 24;

// Audio files
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {
  click_sound.play();

  // Change the minutes and seconds to starting time
  session_minutes = 00;
  session_seconds = 10;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        bell.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}
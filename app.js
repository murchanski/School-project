const mondayNew = document.getElementById('monday-new');
const tuesdayNewC = document.getElementById('tuesday-new');
const wednesdayNewC = document.getElementById('wednesday-new');
const thursdayNewC = document.getElementById('thursday-new');
const fridayNewC = document.getElementById('friday-new');
const saturdayNewC = document.getElementById('saturday-new');
const sundayNewC = document.getElementById('sunday-new');

function button() {
    const newTaskInput = document.querySelector(".new-task-inp");
    const selectedDay = document.querySelector(".selected-day");
    const list = selectedDay.querySelector(".list");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskInput.value;
    list.appendChild(newTask);
    newTaskInput.value = "";
  }
  
  function modayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const monday = document.querySelector("#monday");
    monday.classList.add("selected-day");
    
    mondayNew.style.background = 'rgb(248, 148, 233)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function tuesdayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const tuesday = document.querySelector("#tuesday");
    tuesday.classList.add("selected-day");

    tuesdayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function wednesdayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const wednesday = document.querySelector("#wednesday");
    wednesday.classList.add("selected-day");

    wednesdayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function thursdayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const thursday = document.querySelector("#thursday");
    thursday.classList.add("selected-day");

    thursdayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function fridayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const friday = document.querySelector("#friday");
    friday.classList.add("selected-day");

    fridayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function saturdayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const saturday = document.querySelector("#saturday");
    saturday.classList.add("selected-day");

    saturdayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    sundayNewC.style.background = 'rgb(255, 210, 248)';
  }
  
  function sundayNew() {
    const selectedDay = document.querySelector(".selected-day");
    if (selectedDay) {
      selectedDay.classList.remove("selected-day");
    }
    const sunday = document.querySelector("#sunday");
    sunday.classList.add("selected-day");

    sundayNewC.style.background = 'rgb(248, 148, 233)';
    mondayNew.style.background = 'rgb(255, 210, 248)';
    tuesdayNewC.style.background = 'rgb(255, 210, 248)';
    wednesdayNewC.style.background = 'rgb(255, 210, 248)';
    thursdayNewC.style.background = 'rgb(255, 210, 248)';
    fridayNewC.style.background = 'rgb(255, 210, 248)';
    saturdayNewC.style.background = 'rgb(255, 210, 248)';
  }
  

// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // // Set AM or PM
    // const amPM = hour >= 12 ? 'PM' : 'AM';

    // // 12hr Format
    // hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting Based On Time
function setBackGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/Morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/Afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/Night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
        localStorage.setItem('name', e.target.innertext);
        name.blur();
    }
    } else {
        localStorage.setItem('name', e.target.innertext);
    }
}

//Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
        localStorage.setItem('focus', e.target.innertext);
        focus.blur();
    }
    } else {
        localStorage.setItem('focus', e.target.innertext);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBackGreet();
getName();
getFocus();
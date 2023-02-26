let timeContainer = document.getElementsByClassName("time")[0];
let dateContainer = document.getElementsByClassName("date")[0];
let secBar = document.getElementsByClassName("sec-bar")[0];
let secContainer = document.getElementsByClassName("sec")[0]; 

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {
    let time = new Date();

    let day = time.getDay();
    
    let date = time.getDate();
    
    let month = time.getMonth();
    
    let year = time.getFullYear();
    
    let hours = time.getHours();
    
    let minutes = time.getMinutes();
    
    let seconds = time.getSeconds();
    // console.log(seconds);

    dateContainer.innerHTML = `${dayNames[day]} ${date} ${monthNames[month]} ${year}`;
  
    timeContainer.innerHTML = `${hours} : ${minutes}`;

    secBar.style.width = (seconds * 4) + "px";
    secContainer.innerHTML = `${seconds}`;

}, 1000);

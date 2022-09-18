let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

let site_title = document.getElementById("site-title");
let site_nav = document.getElementById("site-nav");



/*
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  site_title?.classList.add("headerStyling");
  site_nav?.classList.add("navStyling");
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  site_title?.classList.remove("headerStyling");
  site_nav?.classList.remove("navStyling");
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}*/



const toggleDarkMode = (status)=>{
  localStorage.setItem('darkMode', status);
  document.body.classList.toggle('darkmode');
  site_title?.classList.toggle("headerStyling");
  site_nav?.classList.toggle("navStyling");
  //Bring moon infront and hide the sun
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  //enableDarkMode();
  toggleDarkMode('enabled');
};

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
 
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    //enableDarkMode();
    toggleDarkMode('enabled');
  // if it has been enabled, turn it off  
  } else {  
    //disableDarkMode(); 
    toggleDarkMode(null);
  }
});


//Android Devices

document.addEventListener("backbutton", function(){
  alert(e);
  alert("Back btn is clicked");
  darkMode = localStorage.getItem('darkMode'); 
  if(darkMode==="enabled"){
    document.body.classList.add('darkmode');
    site_title?.classList.add("headerStyling");
    site_nav?.classList.add("navStyling");
  }else{
    document.body.classList.remove('darkmode');
    site_title?.classList.remove("headerStyling");
    site_nav?.classList.remove("navStyling");
  }
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
});

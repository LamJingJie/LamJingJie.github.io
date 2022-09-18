//------------This js file is used for website or ios only----------------

let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
let site_title = document.getElementById("site-title");
let site_nav = document.getElementById("site-nav");



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

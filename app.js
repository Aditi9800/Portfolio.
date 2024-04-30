// Add this JavaScript code

let professions = document.querySelectorAll('.profession');
let currentIndex = 0;

function showNextProfession() {
    if (currentIndex < professions.length) {
        professions[currentIndex].style.animation = 'fadeInUp 1s ease forwards';
        currentIndex++;
    } else {
        clearInterval(interval);
    }
}

// Show the first profession immediately
showNextProfession();

// Set interval to show next profession every 2 seconds
let interval = setInterval(showNextProfession, 4000);

window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
    };
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);


const nameElement = document.getElementById('name');
const namee = "Sahu.";

let index = 0;

function showNextLetter() {
  if (index < namee.length) {
    nameElement.textContent += namee[index];
    index++;
    setTimeout(showNextLetter, 600); // Adjust the delay as needed
  } else {
    // Reset index back to 0
    index = 0;
    nameElement.textContent = "";
    setTimeout(showNextLetter, 600); // Adjust the delay as needed
  }
}

showNextLetter();

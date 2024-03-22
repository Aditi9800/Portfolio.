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

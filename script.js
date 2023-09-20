'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}




/*const textOptions=["Web Designer & Developer","Python Developer","Java Developer"];
const textElement=document.getElementById("changing-text");
let currentIndex=0;

function changeText(){
  textElement.style.color="#6F00FF";
  setTimeout(()=>{
    currentIndex=(currentIndex+1) % textOptions.length;
    textElement.textContent=textOptions[currentIndex];
    changeText();
  },3000);
}
changeText();*/




/*
* code for animation
*/

const jobTitles = ["Web designer", "Web developer", "Python developer", "Java developer"];
const textElement = document.getElementById("changing-text");
let currentIndex = 0;
let isTyping = true;
let currentText = "";

function typeAndErase() {
    textElement.style.color="#6F00FF"
    const currentTitle = jobTitles[currentIndex];
    const nextTitle = jobTitles[(currentIndex + 1) % jobTitles.length];

    let newText = "";
    let i = 0;

    if (isTyping) {
        const minLen = Math.min(currentText.length, currentTitle.length);

        while (i < minLen && currentText[i] === currentTitle[i]) {
            newText += currentText[i];
            i++;
        }

        if (i < currentTitle.length) {
            newText += currentTitle[i];
        }
    } else {
        const minLen = Math.min(currentText.length, nextTitle.length);

        while (i < minLen && currentText[i] === nextTitle[i]) {
            newText += currentText[i];
            i++;
        }

        if (i < nextTitle.length) {
            newText += nextTitle[i];
        }
    }

    textElement.textContent = newText;
    currentText = newText;

    if (currentText === currentTitle && isTyping) {
        isTyping = false;
        setTimeout(typeAndErase, 900); // Wait for 1 second before erasing
    } else if (currentText === nextTitle && !isTyping) {
        isTyping = true;
        currentIndex = (currentIndex + 1) % jobTitles.length;
        setTimeout(typeAndErase, 900); // Wait for 1 second before typing the next title
    } else {
        setTimeout(typeAndErase, 70); // Typing speed, adjust as needed
    }
}

typeAndErase(); // Start the typing and erasing effect

/*
* code for cv download
*/

  /*function downloadCV() {
      // Replace the following with the actual URL to your CV file
      const cvUrl = "Vinay's resume.pdf";

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = cvUrl;
      a.download = "your_cv.pdf"; // Set the desired file name

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
  }*/

  /*function downloadCV() {
    // Replace the following with the actual URL to your CV file
    const cvUrl = "Vinay's reume.pdf";
    
    // Open the CV in a new tab
    const cvWindow = window.open(cvUrl, "_blank");
    
    // Trigger the download
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = cvUrl;
    a.download = "your_cv.pdf"; // Set the desired file name

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    // Close the new tab after the download (optional)
    setTimeout(() => {
        cvWindow.close();
    }, 1000); // Adjust the delay as needed
}*/

let cvDownloaded = false;
let cvWindow = null;

function downloadCV() {
    // Replace the following with the actual URL to your CV file
    const cvUrl = "Vinay's resume.pdf";

    // Show the "Display CV" button after download
    const displayButton = document.getElementById("displayButton");
    displayButton.style.display = "block";

    cvDownloaded = true;

    // Store the CV URL in a variable
    cvWindow = window.open(cvUrl, "CV", "fullscreen=yes,scrollbars=no");
    cvWindow.focus();
}

function displayCV() {
    if (cvDownloaded && cvWindow) {
        // Focus and maximize the CV window/tab
        cvWindow.focus();
        /*cvWindow.moveTo(0, 0);
        cvWindow.resizeTo(screen.width, screen.height);*/
    }
}

  
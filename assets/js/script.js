'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

function handleFormSubmit(event) {
  event.preventDefault(); // Prevents the form from reloading the page

  // Display the success message
  document.getElementById('successMessage').style.display = 'block';

  // Clear the input field after submission
  document.getElementById('emailInput').value = '';

  // Clear the success message after 4 seconds
  setTimeout(function() {
    document.getElementById('successMessage').style.display = 'none';
  }, 4000); // 4000 milliseconds = 4 seconds
}
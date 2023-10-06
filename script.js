
// FOR SMOOTH SCROLLING TO WORK------------------

// Get all the anchor links and sections
const anchorLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section.highlightable');

// Function to update the highlighted link based on scroll position
function updateHighlight() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            anchorLinks.forEach((link) => {
                link.classList.remove('highlighted');
            });
            anchorLinks[index].classList.add('highlighted');
        }
    });
}

// Add scroll event listener to update the highlighted link
window.addEventListener('scroll', updateHighlight);

// Call the updateHighlight function initially to set the initial state
updateHighlight();






// FOR MAKING MY BUTTON CLICKABLE WITHOUT SCREWING UP MY STYLING

document.addEventListener('DOMContentLoaded', function () {
  // Select the button element by its id
  const aboutMeButton = document.getElementById('aboutMeButton');

  // Add a click event listener to the button
  aboutMeButton.addEventListener('click', function () {
    // Redirect to the "About Me" page when the button is clicked
    window.location.href = 'aboutme.html';
  });
});



//FOR SHOWING UP MY BURGER MENU ON SMALLER SCREENS
const toggleButton = document.getElementById('toggle-button');
const navRight = document.getElementById('nav-right');

toggleButton.addEventListener('click', () => {
  navRight.classList.toggle('active');
})






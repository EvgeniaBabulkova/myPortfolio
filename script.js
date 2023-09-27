
// FOR SMOOTH SCROLLING TO WORK------------------

document.addEventListener('DOMContentLoaded', function () {
  // Select the "WORK" link
  const workLink = document.querySelector('.work-link');

  // Define the height of your header (adjust this value as needed)
  const headerHeight = 100; // Change this to match your header's height

  // Add a click event listener to the link
  workLink.addEventListener('click', function (e) {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Find the first section with the "work-section" class
    const targetSection = document.querySelector('.work-section');

    if (targetSection) {
      // Calculate the scroll position, accounting for the header height
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

      // Scroll to the target position smoothly
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});





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







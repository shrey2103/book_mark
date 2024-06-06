 

// const ratings = document.querySelectorAll('.rating')
// const ratingsContainer = document.querySelector('.ratings-container')
// const sendBtn = document.querySelector('#send')
// const feedback = document.querySelector('#feedback')
// let selectedRating = 'Satisfied'
// ratingsContainer.addEventListener('click', (e) => {
//     if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
//         removeActive()
//         e.target.parentNode.classList.add('active')
//         selectedRating = e.target.nextElementSibling.innerHTML
//     } else if(
//         e.target.parentNode.classList.contains('rating') &&
//         e.target.previousSibling &&
//         e.target.previousElementSibling.nodeName === 'IMG'
//     ) {
//         removeActive()
//         e.target.parentNode.classList.add('active')
//         selectedRating = e.target.innerHTML
//     }
// })
// sendBtn.addEventListener('click', (e) => {
//     feedback.innerHTML = `
//         <i class="fas fa-heart"></i>
//         <strong>Thank You!</strong>
//         <br>
//         <strong>Feedback: ${selectedRating}</strong>
// <p>We'll use your feedback to improve our customer support</p
// })
// function removeActive() {
//     for(let i = 0; i < ratings.length; i++) {
//         ratings[i].classList.remove('active')
//     }
// }





document.addEventListener("DOMContentLoaded", function () {
    // Get all rating elements
    const ratings = document.querySelectorAll(".rating");
  
    // Add click event listener to each rating element
    ratings.forEach((rating) => {
      rating.addEventListener("click", () => {
        // Remove the 'active' class from all ratings
        ratings.forEach((r) => r.classList.remove("active"));
        
        // Add the 'active' class to the clicked rating
        rating.classList.add("active");
      });
    });
  
    const sendButton = document.getElementById("send");

  // Add click event listener to the 'Send Review' button
  sendButton.addEventListener("click", () => {
    // Find the active rating
    const activeRating = document.querySelector(".rating.active");

    if (activeRating) {
      // Get the user's satisfaction level
      const satisfactionLevel = activeRating.getAttribute("data-rating");

      // Display the toast notification
      const toast = new bootstrap.Toast(document.getElementById("feedback-toast"));
      toast.show();

      // You can send the satisfactionLevel to your server or perform other actions
      // You can send an HTTP request to your server to store the user's feedback.
      console.log("User is " + satisfactionLevel);
      // Replace the above line with your logic to send the feedback to the server.
    }
  });
  });
  
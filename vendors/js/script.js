// ============ menu icon & navbar =========
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
//  toggle the menu and navbar when click
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}



/* ========== Scroll Sections Active Links, Sticky Navbar, and WhatsApp Scroll Effect =========== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  // Sticky navbar logic
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', top > 100);

  // remove the menu and navbar when link click
  menuIcon.classList.remove ('bx-x');
  navBar.classList.remove('active');


  // WhatsApp button visibility
  const whatsappBtnContainer = document.querySelector('.whatsapp-btn-container');
  const scrollThreshold = 1100;
  if (top > scrollThreshold) {
    whatsappBtnContainer.style.display = 'block';
  } else {
    whatsappBtnContainer.style.display = 'none';
  }

  // Scroll sections active link logic
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150; 
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      });
    }
  });
};

// Ensuring WhatsApp button is hidden on loading
document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtnContainer = document.querySelector('.whatsapp-btn-container');
  whatsappBtnContainer.style.display = 'none';
});


/* ========== Swiper API Initializer =========== */
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var swiper = new Swiper(".mySwiper", {
//   direction: "horizontal",
//   slidesPerView: "auto",
//   freeMode: true,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   mousewheel: true,
// });



 // Select the iframe element
 const youtubeVideo = document.getElementById("youtube-video");

 // Add hover event listeners
 youtubeVideo.addEventListener("mouseenter", () => {
     // Send play command to the YouTube player
     youtubeVideo.contentWindow.postMessage(
         JSON.stringify({
             event: "command",
             func: "playVideo",
             args: []
         }),
         "*"
     );
 });

 youtubeVideo.addEventListener("mouseleave", () => {
     // Send pause command to the YouTube player
     youtubeVideo.contentWindow.postMessage(
         JSON.stringify({
             event: "command",
             func: "pauseVideo",
             args: []
         }),
         "*"
     );
 });
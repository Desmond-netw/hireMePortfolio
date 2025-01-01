/* ========== sticky  and whatsapp scrol effect =========== */  
window.onscroll = () => {
    let header = document.querySelector('.header');
    const whatsappBtnContainer =document.querySelector('.whatsapp-btn-container');
    const scrollThreshold = 900;

    // initiate the sticky navbar
    header.classList.toggle('sticky', window.scrollY > 100)

    //whatsapp container display
    if(window.scrollY > scrollThreshold) {
      whatsappBtnContainer.style.display = 'block';
    }else {
      whatsappBtnContainer.style.display = 'none';
    }
  };

  // ensuring whtaspp is hidden on loading
  document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtnContainer=document.querySelector('.whatsapp-btn-container');
    whatsappBtnContainer.style.display='none';
  } )

/* ========== Swiper API initilizer =========== */  
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
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
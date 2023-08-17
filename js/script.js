const callButton = document.getElementById('callButton');
    
    callButton.addEventListener('click', () => {
      window.location.href = 'tel:+91 77366 36656';
    });


    const whatsappButtons = document.querySelectorAll('.whatsappButton');

    whatsappButtons.forEach(button => {
      button.addEventListener('click', () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=7736636656';
      });
    });



document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.addEventListener('click', () => {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen 
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    });
});

var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
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


  const videoPlayers = document.querySelectorAll('.video-player');

  // Pause all videos except the one that is clicked
  function pauseOtherVideos(clickedVideo) {
    videoPlayers.forEach(player => {
      if (player !== clickedVideo) {
        player.pause();
      }
    });
  }

  // Add click event listeners to the videos
  videoPlayers.forEach(player => {
    player.addEventListener('play', () => {
      pauseOtherVideos(player);
    });
  });

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
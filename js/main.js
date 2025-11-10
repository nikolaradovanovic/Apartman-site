let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#info-btn").onclick = () => {
  navbar.classList.remove("active");
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

// zatvaranje navigacije kad se skrola na telefonu
window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

// HOME swiper js
let swiper1 = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// REVIEWS swiper js
let swiper2 = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 40,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
  },
});

// OTHERS swiper js
let swiper3 = new Swiper(".others-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
  },
});

// LOGO swiper
let swiper4 = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    991: { slidesPerView: 5 },
  },
});

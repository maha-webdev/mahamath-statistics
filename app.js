// Query Selectors
const servicesBtn = document.querySelector(".services-btn");
const testimonialsBtn = document.querySelector(".testimonials-btn");
const contactsBtn = document.querySelector(".contacts-btn");
const aboutBtn = document.querySelector(".about-btn");
const homeBtn = document.querySelector(".home-btn");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileServicesBtn = document.querySelector(".m-services-btn");
const mobileTestimonialsBtn = document.querySelector(".m-testimonials-btn");
const mobileContactsBtn = document.querySelector(".m-contacts-btn");
const mobileAboutBtn = document.querySelector(".m-about-btn");
const carouselSlide = document.querySelector(".testimonials-slide");
const testimonialText = document.querySelectorAll(".testimonial-text");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Carousel Slider
let counter = 1;
let size = testimonialText[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

function nextSlide() {
  if (counter >= testimonialText.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

carouselSlide.addEventListener("transitionend", () => {
  if (testimonialText[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = testimonialText.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (testimonialText[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = testimonialText.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

setInterval(nextSlide, 4000);

// Smooth Scroll
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

servicesBtn.addEventListener("click", function () {
  smoothScroll("#services-section", 700);
});
mobileServicesBtn.addEventListener("click", function () {
  smoothScroll("#services-section", 700);
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

testimonialsBtn.addEventListener("click", function () {
  smoothScroll("#testimonials-section", 1000);
});
mobileTestimonialsBtn.addEventListener("click", function () {
  smoothScroll("#testimonials-section", 1000);
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

contactsBtn.addEventListener("click", function () {
  smoothScroll("#contacts-section", 1000);
});
mobileContactsBtn.addEventListener("click", function () {
  smoothScroll("#contacts-section", 1000);
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

aboutBtn.addEventListener("click", function () {
  smoothScroll("#about-section", 1000);
});
mobileAboutBtn.addEventListener("click", function () {
  smoothScroll("#about-section", 1000);
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

homeBtn.addEventListener("click", function () {
  smoothScroll("#home-section", 1000);
});

// Visual Effect
function scrollApear() {
  var servicesSection = document.querySelector("#services-section");
  var servicesContent = document.querySelector(".services-content-container");
  var testimonialsContent = document.querySelector(
    ".testimonials-content-container"
  );
  var contactsContent = document.querySelector(".socials-container");
  var aboutContent = document.querySelector(".about-text-container");
  var servicesSectionPosition = servicesSection.getBoundingClientRect().top;
  var testimonialsContentPosition =
    testimonialsContent.getBoundingClientRect().top;
  var contactsContentPosition = contactsContent.getBoundingClientRect().top;
  var aboutContentPosition = aboutContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (servicesSectionPosition < screenPosition / 3) {
    homeBtn.classList.add("appear");
    servicesContent.classList.remove("content-disappear");
  } else {
    homeBtn.classList.remove("appear");
  }

  if (testimonialsContentPosition < screenPosition) {
    testimonialsContent.classList.remove("content-disappear");
  }
  if (contactsContentPosition < screenPosition / 1.2) {
    contactsContent.classList.remove("content-disappear");
  }
  if (aboutContentPosition < screenPosition / 1.3) {
    aboutContent.classList.remove("content-disappear");
  }
}

window.addEventListener("scroll", scrollApear);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  mobileNav.classList.toggle("nav-appear");
  document.body.classList.toggle("no-scroll");
});

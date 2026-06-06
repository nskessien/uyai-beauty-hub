// carousel for the welcome page imgs
const track = document.getElementById("carouselTrack");
const images = document.querySelectorAll(".carousel-track img");

let currentIndex = 0;
const totalImages = images.length;

function slideCarousel() {
    currentIndex = (currentIndex + 1) % totalImages;

    const amountToMove = -currentIndex * 100;

    track.style.transform = `translateX(${amountToMove}%)`;
}
setInterval(slideCarousel, 3000);


// Carousel for the shop imgs
const shopTrack = document.getElementById("shopcarousel");
const shopImgs = document.querySelectorAll(".shop-Carousel img");

let firstIndex = 0;
const shopTotalImg = shopImgs.length;

function shopImageSlide() {
  firstIndex = (firstIndex + 1) % shopTotalImg;

  const imgSizeToMove = -firstIndex * 100;

  shopTrack.style.transform =`translateX(${imgSizeToMove}%)`;
}
setInterval(shopImageSlide, 3000);


const teamCards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let activeIndex = 0;
const totalCards = teamCards.length;

function updateCarouselPositions() {
  for (let i = 0; i < teamCards.length; i++) {
    teamCards[i].classList.remove("active", "prev", "next");
  }

  let prevIndex = activeIndex - 1;
  if (prevIndex < 0) {
    prevIndex = totalCards - 1; 
  }

  let nextIndex = activeIndex + 1;
  if (nextIndex >= totalCards) {
    nextIndex = 0; 
  }

  teamCards[activeIndex].classList.add("active");
  teamCards[prevIndex].classList.add("prev");
  teamCards[nextIndex].classList.add("next");
}

nextBtn.addEventListener("click", function() {
  activeIndex = activeIndex + 1;
  if (activeIndex >= totalCards) {
    activeIndex = 0; 
  }
  updateCarouselPositions();
});

prevBtn.addEventListener("click", function() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = totalCards - 1; 
  }
  updateCarouselPositions();
});

updateCarouselPositions();
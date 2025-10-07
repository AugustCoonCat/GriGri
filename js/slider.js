const slidersData = {};
const allCards = document.querySelectorAll(".production__card");
const showMoreBtn = document.getElementById("showMoreBtn");
document.querySelectorAll(".production__slider").forEach((slider) => {
  const id = slider.dataset.id;

  slidersData[id] = 0;

  slider.querySelector(".production__prev").addEventListener("click", () => {
    slidersData[id] =
      (slidersData[id] - 1 + getTotalSlides(slider)) % getTotalSlides(slider);
    showSlide(slider, slidersData[id]);
  });

  slider.querySelector(".production__next").addEventListener("click", () => {
    slidersData[id] = (slidersData[id] + 1) % getTotalSlides(slider);
    showSlide(slider, slidersData[id]);
  });

  slider.querySelectorAll(".production__dot").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      slidersData[id] = i;
      showSlide(slider, i);
    });
  });
});

function getTotalSlides(slider) {
  return slider.querySelectorAll(".production__slide").length;
}

function showSlide(slider, index) {
  const slidesContainer = slider.querySelector(".production__slides");
  const slideElements = slidesContainer.querySelectorAll(".production__slide");

  slideElements.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  updateDots(slider, index);
}

function updateDots(slider, index) {
  const dots = slider.querySelectorAll(".production__dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

let visibleCount = 3;

function updateCardsVisibility() {
  allCards.forEach((card, index) => {
    console.log(card, index, visibleCount);
    if (index >= visibleCount && card.classList.contains("production__card")) {
      if (card.classList.contains("production__card-variable")) {
        card.classList.remove("production__card-variable");
      } else {
        card.classList.add("production__card-variable");
      }
    }
  });
}


showMoreBtn.addEventListener("click", () => {
  updateCardsVisibility();

  showMoreBtn.style.display = "none";
});

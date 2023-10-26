const previousBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
const carousel = new bootstrap.Carousel(document.getElementById("carouselExampleIndicators"));

previousBtn.addEventListener("click", function () {
  carousel.prev();
  console.log("Previous clicked");
});

nextBtn.addEventListener("click", function () {
  carousel.next();
  console.log("Next clicked");
});



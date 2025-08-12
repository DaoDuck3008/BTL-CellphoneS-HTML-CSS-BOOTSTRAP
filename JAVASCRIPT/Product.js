const carouselElement = document.querySelector("#productCarousel");
const thumbnails = document.querySelectorAll(".thumb");

carouselElement.addEventListener("slid.bs.carousel", (e) => {
  // Xóa active cũ
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Thêm active mới
  thumbnails[e.to].classList.add("active");
});

// Cho phép click vào thumbnail để chuyển slide
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    const carousel = bootstrap.Carousel.getInstance(carouselElement);
    carousel.to(index);
  });
});

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

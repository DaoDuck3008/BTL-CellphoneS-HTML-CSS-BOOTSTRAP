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



// Back to top
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
/*đổi giá phiên bản
   Lắng nghe sự kiện khi tài liệu đã được tải hoàn toàn*/
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các input radio của phiên bản
  const storageOptions = document.querySelectorAll('input[name="storage"]');

  // Lấy các phần tử hiển thị giá chính
  const mainPrice = document.getElementById("currentPrice");
  const oldPrice = document.getElementById("oldPrice");

  // Hàm để cập nhật giá
  function updatePrices() {
    // Tìm phiên bản đang được chọn (đã "checked")
    const selectedStorage = document.querySelector(
      'input[name="storage"]:checked'
    );

    if (selectedStorage) {
      // Lấy giá trị từ thuộc tính data của phiên bản được chọn
      const currentPrice = selectedStorage.getAttribute("data-price");
      const oldPriceValue = selectedStorage.getAttribute("data-oldprice");

      // Định dạng và cập nhật giá chính
      mainPrice.textContent =
        new Intl.NumberFormat("vi-VN").format(currentPrice) + "đ";
      oldPrice.textContent =
        new Intl.NumberFormat("vi-VN").format(oldPriceValue) + "đ";

      // Cập nhật giá cho các tùy chọn màu sắc
      const colorLabels = document.querySelectorAll('label[for^="color"]');
      colorLabels.forEach((label) => {
        // Cập nhật giá bên trong mỗi label màu sắc
        const colorPriceElement = label.querySelector("p");
        if (colorPriceElement) {
          colorPriceElement.textContent =
            new Intl.NumberFormat("vi-VN").format(currentPrice) + "đ";
        }
      });
    }
  }

  // Lắng nghe sự kiện "change" trên tất cả các input của phiên bản
  storageOptions.forEach((option) => {
    option.addEventListener("change", updatePrices);
  });

  // Gọi hàm updatePrices() một lần khi trang tải để hiển thị giá mặc định
  updatePrices();
});

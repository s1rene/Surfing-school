const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("touchstart", () => {
    button.classList.add("active");
  });

  button.addEventListener("touchend", () => {
    setTimeout(() => {
      button.classList.remove("active");
    }, 300);
  });
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
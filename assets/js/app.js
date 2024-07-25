const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("show");
  menuIcon.classList.toggle("show")
  document.querySelector("nav").classList.toggle("navbg");
  document.querySelector("body").classList.toggle("overflow-hidden");
})

$('.Slider_1').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
});
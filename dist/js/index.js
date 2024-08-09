window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  // back to top
  const toTop = document.querySelector("#to-top");
  const judul = document.querySelector(".judul");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    judul.classList.remove("judul");
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

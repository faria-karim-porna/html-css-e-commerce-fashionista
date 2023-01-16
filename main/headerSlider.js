let i = 1;

const headerSlide = document.getElementsByClassName("header-slide");

setInterval(() => {
  for (let index = 0; index < headerSlide.length; index++) {
    if (i % 3 == index) {
      headerSlide[index].style.display = "block";
      headerSlide[index].style.animationName = "header-slider-content-appear";
    } else {
      headerSlide[index].style.display = "none";
    }
  }
  i = i + 1;
}, 1500);

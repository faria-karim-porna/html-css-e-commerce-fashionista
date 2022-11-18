const footerBoxes = document.getElementsByClassName("footer-box");
for (let i = 0; i < footerBoxes.length; i++) {
  footerBoxes[i].style.flexGrow = "1";
}

function selectFooter(footerSectionNumber) {
  for (let i = 0; i < footerBoxes.length; i++) {
    if (i === footerSectionNumber) {
      footerBoxes[i].style.flexGrow = "2";
    }
  }
}

function deselectFooter() {
  for (let i = 0; i < footerBoxes.length; i++) {
    footerBoxes[i].style.flexGrow = "1";
  }
}

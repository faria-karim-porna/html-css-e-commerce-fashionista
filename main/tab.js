const tabContent = document.getElementsByClassName("tab-content");

for (let index = 0; index < tabContent.length; index++) {
  if (index == 0) {
    tabContent[index].style.display = "flex";
  } else {
    tabContent[index].style.display = "none";
  }
}

const tabClickHandler = (contentNumber) => {
  for (let index = 0; index < tabContent.length; index++) {
    if (contentNumber == index) {
      tabContent[index].style.display = "flex";
      tabContent[index].style.animationName = "tab-content-appear";
    } else {
      tabContent[index].style.display = "none";
    }
  }
};

function specialOfferProgressBar() {
  const valueString = document.getElementsByClassName("special-offer-progress-bar")[0].getAttribute("data-value");
  const value = parseInt(valueString);
  const otherValue = 100 - value;

  document.getElementsByClassName(
    "special-offer-progress-bar"
  )[0].style.background = `linear-gradient(90deg, #ff8f9c ${value}%, #ffffff ${otherValue}%)`;
}

specialOfferProgressBar();

function specialOfferTimer() {
  const currentDate = new Date();
  const expireDate = new Date("2/24/2023");
  const yearDiff = expireDate.getFullYear() - currentDate.getFullYear();
  const monthDiff = expireDate.getMonth() - currentDate.getMonth();
  const daysDiff = expireDate.getDay() - currentDate.getDay();
  const days = yearDiff * 365 + monthDiff * 30 + daysDiff;
  const hours = 24 - currentDate.getHours();
  const mins = 60 - currentDate.getMinutes();
  const secs = 60 - currentDate.getSeconds();
  document.getElementsByClassName("special-offer-days")[0].innerHTML = days;
  document.getElementsByClassName("special-offer-hours")[0].innerHTML = hours;
  document.getElementsByClassName("special-offer-min")[0].innerHTML = mins;
  document.getElementsByClassName("special-offer-sec")[0].innerHTML = secs;
}

setInterval(() => {
  specialOfferTimer();
}, 1000);

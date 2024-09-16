// Initialize MixItUp for the portfolio filter
let mixerPortfolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

// Function to handle active link for work items
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

// Function to toggle the portfolio popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work-button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
}

document
  .querySelector(".portfolio-popup-close")
  .addEventListener("click", togglePortfolioPopup);

// Function to set portfolio item details
function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".work-img").src;
  document.querySelector(".portfolio-popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work-title").innerHTML;
  document.querySelector(".portfolio-popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Function for input focus animation
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Function to handle tab switching
function openTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  const links = document.querySelectorAll(".tab-links");

  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  links.forEach((link) => {
    link.classList.remove("active-link");
  });

  document.getElementById(tabName).classList.add("active-tab");
  event.target.classList.add("active-link");
}

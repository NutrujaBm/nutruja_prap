// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open")
//     icon.classList.toggle("open")
// }

// function showInfo(section) {
//     const sections = document.querySelectorAll('.info-content');
//     sections.forEach(sec => sec.style.display = 'none');
    
//     document.getElementById(section).style.display = 'block';
// }

/* MIXITUP FILTER PORTFOLIO */
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/* LINK ACTIVE WORK */
const linkWork = document.querySelectorAll('.work-item')

function activeWork() {
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))

/* WORK POPUP */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work-button")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
    }
});
  
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}
  
document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup);
  
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/* INPUT ANIMATION */
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});








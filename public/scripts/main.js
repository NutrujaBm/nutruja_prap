function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function showInfo(section) {
    const sections = document.querySelectorAll('.info-content');
    sections.forEach(sec => sec.style.display = 'none');
    
    document.getElementById(section).style.display = 'block';
}


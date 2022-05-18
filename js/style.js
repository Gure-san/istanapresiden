// Navbar Button
const btnToggle = document.querySelector('.btn-nt');
const NavbarCollapse = document.querySelector('.navbar-collapse');;
btnToggle.addEventListener('change', () => {
    NavbarCollapse.classList.toggle('navbar-animate');
});

// Dropdown Mobile Version 
const btnDropdown = document.querySelectorAll('.nav-item.costom .nav-link');
btnDropdown.forEach( elmnt => {
    elmnt.addEventListener('click', e => {
        e.target.nextElementSibling.classList.toggle('nid-animate');
    });
});


// Nav Sekunder
const navSekunderContainer = document.querySelector('.navContainer');
window.addEventListener('scroll', () => navSekunderContainer.classList.toggle('sticky', window.scrollY > 100)
);


// About Container 
const aboutContainer = document.querySelector('.navContainer');
const btnTentangIstana = document.querySelector(".navContainer .navList[data-navName='tentangIstana'");
const positionY = 460;
const positionX = aboutContainer.getBoundingClientRect().x;
const positionWidth = aboutContainer.getBoundingClientRect().width;
const positionHeight = aboutContainer.getBoundingClientRect().height;

btnTentangIstana.addEventListener('click', () => {
    window.scrollTo({ top: positionY, behavior: 'smooth' });
});
// console.group([positionY, positionX, positionWidth, positionHeight])



// Scroll To Top Button
const stpBtn = document.querySelector('.stp-btn');
stpBtn.addEventListener('click', () => window.scrollTo({top:0}));
window.addEventListener('scroll', () => stpBtn.classList.toggle('active', window.scrollY > 500));


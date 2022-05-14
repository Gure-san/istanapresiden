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

// Search Icon Button
const btnSearch = document.querySelector(".searchIcon input[type = 'checkbox']");
const autoFocus = document.querySelector('.searching .searchInput');
const searchInput = document.querySelector(".searching");
btnSearch.addEventListener('change', () => {
        searchInput.classList.toggle('active');
        autoFocus.focus();
    }
);


// Scroll To Top Button
const stpBtn = document.querySelector('.stp-btn');
stpBtn.addEventListener('click', () => window.scrollTo({top:0}));
window.addEventListener('scroll', () => stpBtn.classList.toggle('active', window.scrollY > 500));


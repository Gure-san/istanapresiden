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
// Link to content position
function getCurrentSizeBrowser() {
    // All Media Screen
    const contentData = [];
    const rekomendasiArtikel = 150;
    let tentangIstana = 0;
    let artikelTerbaru = 0;
    let semuaArtikel = 0;
    // match content position with browser size
    const browserSize = window.innerWidth;
        // Dekstop size > 1200
        if( browserSize >= 1200 ) {
            tentangIstana = 455;
            artikelTerbaru = 1314;
            semuaArtikel = 1766;
        }
        // Dekstop size 1200 ~ 1016
        if( browserSize < 1200 && browserSize > 1015) {
            tentangIstana = 373;
            artikelTerbaru = 1750;
            semuaArtikel = 2365;
        }
        // Dekstop small ~ Tablet
        if( browserSize <= 1015 && browserSize >= 768) {
            tentangIstana = 826;
            artikelTerbaru = 2213;
            semuaArtikel = 2825;
        }
        // Tablet size ~ Mobile
        if( browserSize < 768 && browserSize > 575) {
            tentangIstana = 656;
            artikelTerbaru = 2057;
            semuaArtikel = 2647;
        }
        // Normal mobile size ~ Small Mobile size
        if( browserSize <= 575) {
            tentangIstana = 608;
            artikelTerbaru = 2084;
            semuaArtikel = 3817;
        }
    // add item to array
    contentData.push( rekomendasiArtikel, tentangIstana, artikelTerbaru, semuaArtikel )
    return contentData;
}
const navLinks = Array.from(document.querySelectorAll('.navContainer .navList'));
const rekomendasiArtikel = document.getElementById('rekomendasiArtikel');
const tentangIstana = getCurrentSizeBrowser()[1];
const artikelTerbaru = getCurrentSizeBrowser()[2];
const semuaArtikel = getCurrentSizeBrowser()[3];
navLinks.forEach( el => el.addEventListener('click', () => {
    if( el.getAttribute('data-navName') == 'rekomendasiArtikel' ) {
        window.scrollTo({ top: rekomendasiArtikel, behavior: 'smooth' });
    }
    if( el.getAttribute('data-navName') == 'tentangIstana' ) {
        window.scrollTo({ top: tentangIstana, behavior: 'smooth' });
    }
    if( el.getAttribute('data-navName') == 'artikelTerbaru' ) {
        window.scrollTo({ top: artikelTerbaru, behavior: 'smooth' });
    }
    if( el.getAttribute('data-navName') == 'semuaArtikel' ) {
        window.scrollTo({ top: semuaArtikel, behavior: 'smooth' });
    }
}))





// Scroll To Top Button
const stpBtn = document.querySelector('.stp-btn');
stpBtn.addEventListener('click', () => window.scrollTo({top:0}));
window.addEventListener('scroll', () => stpBtn.classList.toggle('active', window.scrollY > 500));


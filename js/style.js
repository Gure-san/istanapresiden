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


// Scroll To Top Button
const stpBtn = document.querySelector('.stp-btn');
stpBtn.addEventListener('click', () => window.scrollTo({top:0}));
window.addEventListener('scroll', () => stpBtn.classList.toggle('active', window.scrollY > 500));


// Close Message
const checkMessage = localStorage.getItem('removeMessage');
window.addEventListener('load', () => {
    if( checkMessage ) {
        document.querySelector('.messageContent').style.display = 'none';
        document.querySelector('.pinnedMessage').classList.add('active');
    }
});

const clsMessageBtn = document.querySelector('.messageContent .close');
const messageContent = document.querySelector('.messageContent');
const removeMessage =  () => {
    localStorage.setItem('removeMessage', true);
    const checkMessage = localStorage.getItem('removeMessage');

    if( checkMessage ) {
        document.querySelector('.messageContent').style.display = 'none';
        document.querySelector('.pinnedMessage').classList.add('active');
    }
};

clsMessageBtn.addEventListener('click', () => {
    messageContent.setAttribute('closing', '');
    messageContent.removeAttribute('open');
    messageContent.addEventListener('animationend', removeMessage, {once: true});
});


// Open Message
const openMessageBtn = document.querySelector('.pinnedMessage button');
const openMessage = () => {
    localStorage.removeItem('removeMessage');
    document.querySelector('.messageContent').style.display = 'block';
    messageContent.removeAttribute('closing');
    messageContent.setAttribute('open', '');
    document.querySelector('.pinnedMessage').classList.remove('active');
}
openMessageBtn.addEventListener('click', openMessage);


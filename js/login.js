// Dekstop Layout
const regBtn = document.getElementById('regBtn');
const logBtn = document.getElementById('logBtn');
const container = document.getElementById('container');

if( window.innerWidth > 786 && !container.classList.contains('right-panel-active') ) {
    container.classList.add('righ-panel-active');
}

regBtn.addEventListener('click', () => container.classList.add('right-panel-active'));
logBtn.addEventListener('click', () => {
    const hash = window.location.hash.replace('#', '');
    (hash != '') ? location.hash = '' : '';
    container.classList.remove('right-panel-active');
});


// Mobile Layout
const tbReg = document.querySelector('.tb-reg-container a');
const tbLog = document.querySelector('.tb-log-container a');
const formSubmit = Array.from(document.querySelectorAll(".form-container form"));

formSubmit.forEach( elmnt => {
    elmnt.addEventListener('submit', () => true);
});
if( window.innerWidth <= 786 && window.location.hash === '#reg') {
    container.classList.add('reg-form-active');
}

tbReg.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('reg-form-active')
}, false);
tbLog.addEventListener('click', () => container.classList.remove('reg-form-active'));


// Succees Message
const clsMsg = document.querySelector('.clsMsg');
clsMsg.addEventListener('click', e => {
    e.target.parentNode.parentNode.style.display = 'none';
});
// Dekstop Layout

const regBtn = document.getElementById('regBtn');
const logBtn = document.getElementById('logBtn');
const container = document.getElementById('container');

regBtn.addEventListener('click', () => container.classList.add('right-panel-active'));
logBtn.addEventListener('click', () => container.classList.remove('right-panel-active'));


// Mobile Layout
const tbReg = document.querySelector('.tb-reg-container a');
const tbLog = document.querySelector('.tb-log-container a');

tbReg.addEventListener('click', () => container.classList.add('reg-form-active'));
tbLog.addEventListener('click', () => container.classList.remove('reg-form-active'));
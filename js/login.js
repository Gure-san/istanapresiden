const regBtn = document.getElementById('regBtn');
const logBtn = document.getElementById('logBtn');
const container = document.getElementById('container');

regBtn.addEventListener('click', () => container.classList.add('right-panel-active'));
logBtn.addEventListener('click', () => container.classList.remove('right-panel-active'));
const container = document.getElementById('container');
const registroBnt = document.getElementById('registro');
const loginBnt = document.getElementById('login');

registroBnt.addEventListener('click', () => {
    container.classList.add("active");
});

loginBnt.addEventListener('click', () => {
    container.classList.remove("active");
});
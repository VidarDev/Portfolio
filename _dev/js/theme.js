/* =============== PRELOADER =============== */
const preloader = document.querySelector('#preloader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    preloader.classList.add('deleted');
    body.removeChild(preloader);
})

/* =============== PRELOADER =============== */
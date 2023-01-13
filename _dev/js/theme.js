/* =============== PRELOADER =============== */
const preloader = document.querySelector('#preloader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    preloader.classList.add('deleted');
    body.removeChild(preloader);
})

/*=============== MODAL ===============*/
const modal_View = document.querySelectorAll('.portfolio__modal');
const modal_Button = document.querySelectorAll('.portfolio__button.modal');
const modal_Close = document.querySelectorAll('.portfolio__modal-close');

let modal = (Click) =>{
    modal_View[Click].classList.toggle('is-active');
}
modal_Button.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i);
    })
});
modal_Close.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i);
    })
});

/*=============== SCROLL NAV ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');
function scrollNavMenuActive() {

    const scrollWindowY = document.documentElement.scrollTop;

    section.forEach((current_Section) =>{
        const section_Height = current_Section.clientHeight;
        const section_Top = current_Section.offsetTop - 105;
        const section_Id = current_Section.getAttribute('id');

        if( scrollWindowY > section_Top && scrollWindowY <= section_Top + section_Height ){
            document.querySelector(`.nav__menu a[href*=${section_Id}]`).classList.add('is-active');
        }else{
            document.querySelector(`.nav__menu a[href*=${section_Id}]`).classList.remove('is-active');
        }
    })
}
window.addEventListener('scroll', scrollNavMenuActive);
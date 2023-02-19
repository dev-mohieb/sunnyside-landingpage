// import AOS from 'aos';

// AOS.init({
//     // duration: 1000;
// });

const burgerBtn = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu')

burgerBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('hide-to-side')) {
        navMenu.classList.replace('hide-to-side', 'show');
    } else {
        navMenu.classList.replace('show','hide-to-side');
    }
    
})
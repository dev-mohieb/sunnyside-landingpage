// import AOS from 'aos';

// AOS.init({
//     // duration: 1000;
// });

const burgerBtn = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
const navChildren = navMenu.children;

burgerBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('hide')) {
        navMenu.classList.replace('hide', 'show');
    } else {
        navMenu.classList.replace('show','hide');
    }
    
})

for (let child of navChildren) {
    child.addEventListener('click', () => {
        navMenu.classList.replace('show','hide');
    })
}

const burgerBtn = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
const navChildren = navMenu.children;

const learnMoreYellow = document.querySelector('.learn-more-yellow')
const learnMoreRed = document.querySelector('.learn-more-red')


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

learnMoreRed.addEventListener('mouseover', () => {
    learnMoreRed.previousElementSibling.classList.replace('bg-softRedFEM/40', 'bg-softRedFEM/100')
})
learnMoreRed.addEventListener('mouseout', () => {
    learnMoreRed.previousElementSibling.classList.replace('bg-softRedFEM/100', 'bg-softRedFEM/40')
})

learnMoreYellow.addEventListener('mouseover', () => {
    learnMoreYellow.previousElementSibling.classList.replace('bg-yellowFEM/40', 'bg-yellowFEM/100')
})
learnMoreYellow.addEventListener('mouseout', () => {
    learnMoreYellow.previousElementSibling.classList.replace('bg-yellowFEM/100', 'bg-yellowFEM/40')
})
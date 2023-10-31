const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('#mobile-menu')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const sr = ScrollReveal(
    {
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 600,
    }
)
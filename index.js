const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlideDetails() {
    const details = document.querySelectorAll('.details');
    details.forEach(detail => detail.style.opacity = '0');
    
    const firstSlide = document.querySelector('li:first-child');
    const firstSlideDetails = firstSlide.querySelector('.details');
    firstSlideDetails.style.opacity = '1';
}

nextBtn.addEventListener('click', () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');

    menu.appendChild(cards[0]);
})

prevBtn.addEventListener('click', () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');

    menu.insertBefore(cards[cards.length - 1], cards[0]);
})

updateSlideDetails();
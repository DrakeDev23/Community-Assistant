const scrollGuide = document.querySelector('.scrollBtn');

scrollGuide.addEventListener('click', () => {
document.getElementById('scrollTarget').scrollIntoView({
    behavior: "smooth"
});
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const form = document.querySelector('.service-content')
const submitButton = document.querySelector('.service-btn');
const showModal = document.querySelector('.success-container');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const requireInput = form.querySelectorAll('[required]');
    let allFilled = true;

    requireInput.forEach(input => {
        if(!input.value.trim()) {
            allFilled = false;
        }
    });

    if(allFilled) {
        console.log('submitted')
        showModal.style.display = 'block';

        setTimeout(() => {
            showModal.style.display = 'none';
        }, 1500)
    }
    else {
        console.log('no')
    }
})
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    }

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phonenumber').value.trim();
    const address = document.getElementById('address').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !address || !message) {
        showToast('Please fill in all fields');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showToast('Please enter a valid email address');
        return;
    }

    const phonePattern = /^\+639\d{9}$/;
    if (!phonePattern.test(phone)) {
        showToast('Phone number must be in this format: +639XXXXXXXXX');
        return;
    }

    showToast('Message sent successfully!');
    this.reset();

    console.log({ name, email, phone, address, message });
});
document.getElementById('phonenumber').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

function showToast(message) {
    const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
            
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
            if (targetId === '#') return;
                
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
});

document.getElementById('join').addEventListener('click', function() {
    showToast('Thank you for your interest! We will contact you soon.');
});

document.getElementById("join").addEventListener("click", () => {
    window.location.href = "volunteer.html";
});


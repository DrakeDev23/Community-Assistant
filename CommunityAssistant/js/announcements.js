function toggleMenu() {
    document.getElementById('navbar').classList.toggle('active');
}

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navbar').classList.remove('active');
    });
});

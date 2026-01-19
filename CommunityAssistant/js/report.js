document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("reportForm");
    const phoneInput = document.getElementById("phonenumber");
    const errorMsg = document.getElementById("errorMessage");
    const successMsg = document.getElementById("successMessage");

    if (!form || !phoneInput || !errorMsg || !successMsg) {
        console.error("Report form elements not found. Check your IDs.");
        return;
    }

    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9+]/g, "");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        errorMsg.style.display = "none";
        successMsg.style.display = "none";

        const phone = phoneInput.value.trim();
        const address = document.getElementById("address").value.trim();

        if (!address) {
            errorMsg.textContent = "Please enter your address.";
            errorMsg.style.display = "block";
            return;
        }

        const phRegex = /^(?:\+63|63)9\d{9}$/;

        if (!phRegex.test(phone)) {
            errorMsg.textContent =
                "Phone number must start with +63 and be valid (ex: +639123456789).";
            errorMsg.style.display = "block";
            phoneInput.focus();
            return;
        }

        successMsg.textContent = "Issue reported successfully!";
        successMsg.style.display = "block";

        form.reset();
    });
});
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navbar').classList.remove('active');
    });
});


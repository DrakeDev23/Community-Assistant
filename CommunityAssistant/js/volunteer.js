function toggleMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-list");

    menu.classList.toggle("show");
    toggle.textContent = toggle.textContent === "☰" ? "✕" : "☰";
}
underageBox.style.display = "none";
formMessage.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("volunteerForm");
    const ageInput = document.getElementById("age");
    const phoneInput = document.getElementById("phone-num");
    const underageBox = document.getElementById("underageBox");
    const formMessage = document.getElementById("formMessage");

    phoneInput.addEventListener("focus", () => {
        if (!phoneInput.value.startsWith("+63")) {
            phoneInput.value = "+63";
        }
    });

    phoneInput.addEventListener("input", () => {
        let digits = phoneInput.value.replace(/[^0-9]/g, "");

        if (!digits.startsWith("63")) {
            digits = "63";
        }

        phoneInput.value = "+" + digits.slice(0, 12);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        underageBox.style.display = "none";
        formMessage.style.display = "none";
        formMessage.className = "form-message";

        const age = Number(ageInput.value);
        const phone = phoneInput.value.trim();
        const phoneRegex = /^\+639\d{9}$/;

        if (age < 18) {
            underageBox.style.display = "block";
            ageInput.focus();
            return;
        }
        if (!phoneRegex.test(phone)) {
            showMessage(
                "Phone number must start with +63 (example: +639231234567)",
                "error"
            );
            phoneInput.focus();
            return;
        }
        showMessage(
            "Registration successful! Thank you for volunteering ",
            "success"
        );
        form.reset();
    });
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.classList.add(type);
        formMessage.style.display = "block";
    }
});
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

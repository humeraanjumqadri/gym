const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        nameError.style.color = "red";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email";
        emailError.style.color = "red";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Please enter a valid 10-digit phone number";
        phoneError.style.color = "red";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        messageError.style.color = "red";
        isValid = false;
    }

    // Success
    if (isValid) {
        formMessage.textContent =
            "Thank you for contacting us! We will get back to you soon.";
        formMessage.style.color = "green";
        form.reset();
    }
});

//  Real-time validation

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("input", function () {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "";
    }
});

phoneInput.addEventListener("input", function () {
    const phonePattern = /^[0-9]{10}$/;
    if (phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "";
    }
});

messageInput.addEventListener("input", function () {
    if (messageInput.value.trim().length >= 10) {
        messageError.textContent = "";
    }
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
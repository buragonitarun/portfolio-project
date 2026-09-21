// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();


    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        formMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        formMessage.style.color = "red";

        return;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }


    // Success message
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted successfully.";

    formMessage.style.color = "green";


    // Clear form
    contactForm.reset();

});
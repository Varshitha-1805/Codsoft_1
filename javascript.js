// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Optional: alert on form submit
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});

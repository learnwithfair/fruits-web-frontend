
// Login Page Password Toggle  
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}


// Sign up Page Confirm Password Toggle  
function confirmTogglePassword() {
    const confirmPasswordField = document.getElementById("confirm-password");
    const eyeIcon = document.getElementById("confirm-eye-icon");

    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        confirmPasswordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

// Product cart for increase quantity

function increaseQuantity(button) {
    const input = button.parentElement.querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(button) {
    const input = button.parentElement.querySelector('.quantity-input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Cart Js 
// Get references to the shopping cart icon, cart widget, and close button
const cartIcon = document.getElementById("cart-icon");
const cartWidget = document.getElementById("cart-widget");
const closeBtn = document.querySelector(".cart-header .close-btn");

// Show the cart widget when clicking the cart icon
cartIcon.addEventListener("click", () => {
    cartWidget.style.display = "block";
});

// Hide the cart widget when clicking the close button
closeBtn.addEventListener("click", () => {
    cartWidget.style.display = "none";
});

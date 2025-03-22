

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.removeEventListener("click", handleAddToCart); // Remove existing event listener if any
        button.addEventListener("click", handleAddToCart);
    });
});

// Function to handle Add to Cart button
function handleAddToCart(event) {
    const productName = event.target.closest(".product").querySelector("h3").innerText;
    addToCart(productName);
}

// "Shop Now" button function 
function shopNow() {
    alert("Redirecting to the products page");
    window.location.href = "products.html";
}

// "Add to Cart" button function
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// "View Details" button function
function viewDetails(productName) {
    alert("More details about " + productName + " are coming soon!");
}

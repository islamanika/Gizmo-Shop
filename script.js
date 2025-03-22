
// Name: Anika Islam | ID: 2220151

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });
});




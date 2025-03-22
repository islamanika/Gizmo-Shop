
// Name: Anika Islam | ID: 2220151

function submitMessage(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We will get back to you soon.`);
        document.getElementById("contact-form").reset(); 
    } else {
        alert("Please fill out all fields before submitting.");
    }
}
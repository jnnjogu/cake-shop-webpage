// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('formMessage').innerText = "Thank you, " + name + "! We will get back to you soon.";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = "Please fill out all fields.";
    }
});

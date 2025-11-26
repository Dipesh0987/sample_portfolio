document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // stops page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");
    let success = document.getElementById("success");

    // Clear messages
    error.innerHTML = "";
    success.innerHTML = "";

    // VALIDATION
    if(name === ""){
        error.innerHTML = "Name is required!";
        return;
    }
    if(email === ""){
        error.innerHTML = "Email is required!";
        return;
    }
    if(!email.includes("@") || !email.includes(".")){
        error.innerHTML = "Enter a valid email address!";
        return;
    }
    if(message.length < 10){
        error.innerHTML = "Message must be at least 10 characters!";
        return;
    }

    // If everything is correct:
    success.innerHTML = "Message sent successfully!";
});


// hamburger
// HAMBURGER MENU (class-based toggle — safer)
const hamburger = document.getElementById("hamburger");
const sideMenu = document.querySelector("menu");

hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("menu-open");
});

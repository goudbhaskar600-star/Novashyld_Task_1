 const aboutBtn = document.getElementById("but2");

aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
});

const homebtn = document.getElementById("but1");
homebtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

const skillsBtn = document.getElementById("but3");

skillsBtn.addEventListener("click", () => {
    window.location.href = "skills.html";
});

const contactBtn = document.getElementById("but5");

contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

const projectsBtn = document.getElementById("but4");

projectsBtn.addEventListener("click", () => {
    window.location.href = "projects.html";
});

// Navbar navigation
document.getElementById("but1").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("but2").addEventListener("click", () => {
    window.location.href = "about.html";
});

document.getElementById("but3").addEventListener("click", () => {
    window.location.href = "skills.html";
});

document.getElementById("but4").addEventListener("click", () => {
    window.location.href = "projects.html";
});

document.getElementById("but5").addEventListener("click", () => {
    window.location.href = "contact.html";
});

document.querySelector(".submit").addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("❌ Please fill all details!");
    } else {
        alert("Message sent successfully! 🚀");
    }
});
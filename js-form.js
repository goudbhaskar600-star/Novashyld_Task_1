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

const form = document.getElementById("form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if(name === "" || email === "" || phone === ""){
        alert("❌ Please fill all the details.");
        return;
    }

    alert(
        "✓ Details Entered Successfully\n\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone
    );

    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

    form.reset();
});
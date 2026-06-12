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



const demoBtn = document.getElementById("demo-btn");

demoBtn.addEventListener("click", () => {
    alert("React To-Do List App Demo Coming Soon!");
});
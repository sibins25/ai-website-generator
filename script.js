// Display welcome message
console.log("Welcome to Sibin's Project Portfolio!");

// Select all project cards
const projects = document.querySelectorAll(".project-card");

// Add hover interaction
projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "translateY(-5px)";
        project.style.transition = "0.3s";
    });

    project.addEventListener("mouseleave", () => {
        project.style.transform = "translateY(0)";
    });
});
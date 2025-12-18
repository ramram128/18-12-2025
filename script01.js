const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning ";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon ";
} else {
    greeting.textContent = "Good Evening ";
}

const toggleBtn = document.getElementById("toggleBtn");
const aboutText = document.getElementById("aboutText");


toggleBtn.addEventListener("click", () => {
    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
        toggleBtn.textContent = "Hide Bio";
        
    } 
    else {
        aboutText.style.display = "none";
        toggleBtn.textContent = "Show Bio";
    }
});

// home.js
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = "index.html";
    } else {
        // Optional: Change hero text to say hello to the user
        const heroH2 = document.querySelector('.hero h2');
        heroH2.innerText = `Namaste, ${user.name}`;
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    // window.location.href = "index.html";
}
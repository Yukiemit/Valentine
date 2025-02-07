document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const popup = document.getElementById("popup");

    // Show popup when "Yes" button is clicked
    yesBtn.addEventListener("click", function () {
        popup.classList.remove("hidden");
        popup.style.display = "block"; // Ensure it shows up
    });

    // Move "No" button on hover
    noBtn.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - this.offsetWidth);
        let y = Math.random() * (window.innerHeight - this.offsetHeight);
        this.style.position = "absolute";
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
    });

    // Close popup function
    window.closePopup = function () {
        popup.classList.add("hidden");
        popup.style.display = "none"; // Hide it again
    };
});

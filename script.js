const continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", () => {

    continueButton.innerText = "Coming soon... 🌙✨";

    continueButton.style.transform = "scale(0.95)";

    setTimeout(() => {
        continueButton.innerText = "There's more... ✨";
        continueButton.style.transform = "scale(1)";
    }, 1000);

});

const spam = document.getElementById("spam");

window.addEventListener("DOMContentLoaded", () => addEyes(40));

window.addEventListener("scroll", () => {
    addEyes(100)
});

const addEyes = (numOfTimes) => {
    for (let i = 0; i < 50; i++) {
        spam.textContent += "👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀";
    }
};
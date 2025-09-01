const backgroundColors = [
    "linear-gradient(to right bottom, #373F36, #4B2127)",
    "linear-gradient(to right bottom, #4B2127, #C78805)",
    "linear-gradient(to right bottom, #b8520a, #779e7f)"
];

const createNewButton = document.querySelector("#createNewButton");
createNewButton.addEventListener("click", () => {

    deckTitlePrompt = prompt("Deck Title: ");
    const deckContainer = document.querySelector(".deckContainer");

    const deck = document.createElement("div");
    deck.classList.add("deck");
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    deck.style.backgroundImage = backgroundColors[randomIndex];

    const deckTitle = document.createElement("h4");
    deckTitle.innerHTML = deckTitlePrompt;

    deck.appendChild(deckTitle);

    deckContainer.appendChild(deck);
});
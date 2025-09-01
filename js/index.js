const createNewButton = document.querySelector("#createNewButton");
createNewButton.addEventListener("click", () => {
    deckTitlePrompt = prompt("Deck Title: ");
    const deckContainer = document.querySelector(".deckContainer");

    const deck = document.createElement("div");
    deck.classList.add("deck");

    const deckTitle = document.createElement("h4");
    deckTitle.innerHTML = deckTitlePrompt;

    deck.appendChild(deckTitle);

    deckContainer.appendChild(deck);
});
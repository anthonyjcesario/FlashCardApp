const createNewButton = document.querySelector("#createNewButton");
createNewButton.addEventListener("click", () => {
    const deckContainer = document.querySelector(".deckContainer");

    const deck = document.createElement("div");
    deck.classList.add("deck");

    deckContainer.appendChild(deck);
});
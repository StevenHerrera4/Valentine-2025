const messages = [
    "Estas segura?",
    "Pero bien segura?",
    "Segurita Camila?",
    "Laura camila, segura",
    "Piensalo bien",
    "Va a ser un San valentin inolvidable",
    "Maraton de peliculas mi corazon de pollo quikiriki",
    "Quikiriki vamossssss!!!!!",
    "Ya, esta bien, dejo de preguntar",
    "❤️ No te creas, VENNNN, vamos a pasarla bien ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        return;
    }

    appendMessage(userMessage, true);

    // Réponse du chatbot
    const botMessage = getBotMessage(userMessage);
    appendMessage(botMessage, false);

    userInput.value = "";
}

function appendMessage(message, isUser) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(isUser ? "user" : "bot");
    messageElement.innerText = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotMessage(userMessage) {
    let botMessage;

    switch (userMessage.toLowerCase()) {
        case "bonjour":
        case "salut":
            botMessage = "Bonjour ! Comment puis-je vous aider ?";
            break;

        case "aurevoir":
            botMessage = "Au revoir ! A bientôt.";
            break;

        case "quel est ton nom ?":
            botMessage = "Je m'appelle bobot.";
            break;

        case "quelle est la météo ?":
            botMessage = "Je ne peux pas vous donner la météo pour le moment, désolé.";
            break;

        default:
            botMessage = "Je ne comprends pas. Pouvez-vous reformuler votre question ?";
            break;
    }

    return botMessage;
}

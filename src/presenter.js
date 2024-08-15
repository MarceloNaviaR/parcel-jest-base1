import { handleBotInput } from './bot.js';

document.getElementById('bot-button').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() !== "") {
    const botResponse = handleBotInput(userInput);
    document.getElementById('botResponse').textContent = botResponse;
    document.getElementById('userInput').value = ''; // Limpiar el campo de entrada
  }
});

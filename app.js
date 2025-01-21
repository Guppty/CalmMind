// Handle User Input and Bot Response
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById('user-input').value.trim();
  if (userInput) {
    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = ''; // Clear input after sending

    // Simulate bot response (you can replace this with actual AI processing logic)
    setTimeout(() => {
      appendMessage(
        "Hello! How Can I Help ?", 'bot');
    }, 1000);
  }
}

function appendMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = text;
  document.querySelector('.messages').appendChild(messageElement);
  scrollToBottom();
}

function scrollToBottom() {
  const chatWindow = document.querySelector('.chat-window');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

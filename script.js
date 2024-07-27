const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const konsol = document.getElementById('konsol');

let intervalId = null;
let lineCount = 0;
const maxLines = 1000000000000000000000000000000000000000;

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'CustomSearchTag';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function updateConsoleText() {
  let currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  konsol.textContent += generateRandomString(60) + ' | 0.00 [Custom Coin] ~ 0.00$' + '\n';
  konsol.scrollTop = konsol.scrollHeight;
}

startBtn.addEventListener('click', function() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Clear console
  konsol.textContent = '';
  lineCount = 0;

  intervalId = setInterval(function() {
    if (lineCount >= maxLines) {
      konsol.textContent = '';
      lineCount = 0;
    }
    updateConsoleText();
    lineCount++;
  }, 20); // Update interval set to 100 milliseconds (0.1 seconds)
});

stopBtn.addEventListener('click', function() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

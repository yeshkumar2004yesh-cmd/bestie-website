const themes = ['', 'lavender', 'peach'];
let currentTheme = 0;

function toggleTheme() {
  currentTheme = (currentTheme + 1) % themes.length;
  if (themes[currentTheme]) {
    document.body.setAttribute('data-theme', themes[currentTheme]);
  } else {
    document.body.removeAttribute('data-theme');
  }
}

function blowCandle() {
  const flame = document.getElementById('flame');
  const instruction = document.getElementById('cakeInstruction');
  if (flame.style.display === 'none') {
    flame.style.display = 'block';
    instruction.innerText = '🔥 TOUCH AGAIN TO BLOW OUT 🔥';
  } else {
    flame.style.display = 'none';
    instruction.innerText = '✨ WISH GRANTED! HAPPY FRIENDSHIP DAY! ✨';
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

let poppedCount = 0;
let revealedSentence = [];

function popBalloon(element, word) {
  if (element.style.visibility === 'hidden') return;
  element.style.visibility = 'hidden';
  poppedCount++;
  document.getElementById('popCounter').innerText = `${poppedCount} / 4 POPPED`;
  revealedSentence.push(word);
  document.getElementById('revealedWords').innerText = revealedSentence.join(' ');
  if (poppedCount === 4) {
    document.getElementById('surpriseCard').classList.remove('hidden');
    triggerConfetti();
  }
}

function saveNote() {
  const note = document.getElementById('noteInput').value;
  const display = document.getElementById('savedNoteDisplay');
  if (note.trim()) {
    display.innerText = `💌 Note Saved: "${note}"`;
    document.getElementById('noteInput').value = '';
  }
}

function createFloatItem() {
  const bg = document.getElementById('floatingBg');
  if (!bg) return;
  const item = document.createElement('div');
  const icons = ['❤️', '🎀', '✨', '🌸', '💖'];
  item.className = 'float-item';
  item.innerText = icons[Math.floor(Math.random() * icons.length)];
  item.style.left = Math.random() * 100 + 'vw';
  item.style.animationDuration = (Math.random() * 3 + 4) + 's';
  bg.appendChild(item);
  setTimeout(() => item.remove(), 6000);
}

function triggerConfetti() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFloatItem, i * 100);
  }
}

setInterval(createFloatItem, 400);

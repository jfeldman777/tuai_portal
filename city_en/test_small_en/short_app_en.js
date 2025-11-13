const totalLevels = 8;
let currentIndex = 0;
const scores = Array(totalLevels + 1).fill(0); // 1..8

const quizEl = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const barsEl   = document.getElementById('bars');

function renderQuestion() {
  const q = SMALL_QUESTIONS[currentIndex];
  let html = `<div class="question"><h2>Question ${currentIndex + 1} of ${SMALL_QUESTIONS.length}</h2>`;
  html += `<p>${q.text}</p><div class="options">`;
  q.options.forEach((opt, idx) => {
    const id = `q${currentIndex}_opt${idx}`;
    html += `
      <label>
        <input type="radio" name="q${currentIndex}" id="${id}" value="${idx}">
        ${opt.text}
      </label>
    `;
  });
  html += `</div></div>`;
  quizEl.innerHTML = html;
}

function getSelectedOption() {
  const radios = document.querySelectorAll(`input[name="q${currentIndex}"]`);
  for (const r of radios) {
    if (r.checked) return parseInt(r.value, 10);
  }
  return null;
}

nextBtn.addEventListener('click', () => {
  const sel = getSelectedOption();
  if (sel === null) {
    alert('Please choose one option.');
    return;
  }
  const q = SMALL_QUESTIONS[currentIndex];
  const chosen = q.options[sel];
  scores[chosen.level]++;

  currentIndex++;
  if (currentIndex < SMALL_QUESTIONS.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('controls').classList.add('hidden');
  quizEl.classList.add('hidden');
  resultEl.classList.remove('hidden');

  const totalAnswers = SMALL_QUESTIONS.length;
  barsEl.innerHTML = '';

  for (let level = 1; level <= totalLevels; level++) {
    const count = scores[level];
    const percent = Math.round((count / totalAnswers) * 100);
    const row = document.createElement('div');
    row.className = 'bar-row';
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = `L${level}`;
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${percent * 2}px`;
    const val = document.createElement('div');
    val.className = 'bar-value';
    val.textContent = `${percent}%`;
    row.appendChild(label);
    row.appendChild(bar);
    row.appendChild(val);
    barsEl.appendChild(row);
  }
}

renderQuestion();

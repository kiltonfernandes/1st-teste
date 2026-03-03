const STORAGE_KEY = 'simple-counter-value';
const counter = new Counter(0, STORAGE_KEY);
const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');

const resetBtn = document.getElementById('reset');

const renderCount = () => {
  countEl.textContent = counter.getValue();
};

incrementBtn.addEventListener('click', () => {
  counter.increment();
  renderCount();
});

resetBtn.addEventListener('click', () => {
  counter.reset();
  renderCount();
});

renderCount();

const counter = new Counter();
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

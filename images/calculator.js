const screen = document.getElementById('screen');
const history = document.getElementById('history');

let total = 0;
let currentInput = '';
let awaitingAutoAdd = false;
let justEvaluated = false;

function render() {
  if (currentInput === '') {
    screen.textContent = String(total);
    history.textContent = String(total);
    return;
  }

  screen.textContent = currentInput;
  history.textContent = `${total} + ${currentInput}`;
}

function addCurrentValue() {
  if (currentInput === '') {
    return;
  }

  total += Number(currentInput);
  currentInput = '';
  awaitingAutoAdd = true;
  justEvaluated = false;
  render();
}

function clearAll() {
  total = 0;
  currentInput = '';
  awaitingAutoAdd = false;
  justEvaluated = false;
  render();
}

function deleteLastDigit() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    render();
  }
}

function finishCalculation() {
  if (currentInput !== '') {
    total += Number(currentInput);
    currentInput = '';
  }

  awaitingAutoAdd = false;
  justEvaluated = true;
  render();
}

function handleDigit(value) {
  if (justEvaluated) {
    total = 0;
    currentInput = '';
    awaitingAutoAdd = false;
    justEvaluated = false;
  }

  if (awaitingAutoAdd && currentInput !== '') {
    addCurrentValue();
  }

  currentInput += value;
  awaitingAutoAdd = true;
  render();
}

function handleAction(action) {
  if (action === 'clear') {
    clearAll();
    return;
  }

  if (action === 'delete') {
    deleteLastDigit();
    return;
  }

  if (action === 'equals') {
    finishCalculation();
  }
}

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleDigit(button.dataset.value);
  });
});

const actionButtons = document.querySelectorAll('.action, .operator');
actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    if (action === 'add') {
      addCurrentValue();
      return;
    }

    handleAction(action);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/^[0-9.]$/.test(key)) {
    handleDigit(key);
    return;
  }

  if (key === 'Enter' || key === '=') {
    finishCalculation();
    return;
  }

  if (key === 'Backspace') {
    deleteLastDigit();
    return;
  }

  if (key === 'Escape') {
    clearAll();
  }
});

render();

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

let action = '';
resultElement.textContent = 0;

const buttonContainer = document.getElementById('buttonContainer');

function addBorder(event) {
  const targetButton = event.target;
  action = targetButton.textContent;

  const buttons = buttonContainer.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.style.border = 'none';
  });
  targetButton.style.border = '2px solid white';
}

buttonContainer.addEventListener('click', addBorder);

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol === '+') {
    return num1 + num2;
  } else if (actionSymbol === '-') {
    return num1 - num2;
  } else if (actionSymbol === '*') {
    return num1 * num2;
  } else if (actionSymbol === '/') {
    return num1 / num2;
  } else return 'error';
}

submitBtn.onclick = function () {
  if (input1.value === '') {
    alert('Введіть 1 число');
    return;
  }

  if (input2.value === '') {
    alert('Введіть 2 число');
    return;
  }

  const result = computeNumbersWithAction(input1, input2, action);
  if (action === '') {
    alert('Оберіть дію!');
    return;
  }

  printResult(result);
};

resetBtn.onclick = function () {
  resultElement.textContent = 0;
  input1.value = '';
  input2.value = '';
};

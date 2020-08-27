function addNumbers() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;

  var result = Number(firstNumber) + Number(secondNumber);

  ons.notification.toast('Result: ' + result, { timeout: 2000 });
}

function clearInputs() {
  document.getElementById('firstNumber').value = '';
  document.getElementById('secondNumber').value = '';
}

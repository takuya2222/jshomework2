`use strict`

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const elemFizzNumber = document.getElementById('fizz');
    const fizzNumber = elemFizzNumber.value;
    const elemBuzzNumber = document.getElementById('buzz');
    const buzzNumber = elemBuzzNumber.value;

    const outputArea = document.getElementById('output');
    outputArea.innerHTML = '';
    
    const ptag = document.createElement('p');
    ptag.textContent = '【出力】';
    outputArea.appendChild(ptag);

    for (let i = 1; i < 100; i++) {
      let value = '';
      if (i % fizzNumber === 0 && i % buzzNumber === 0) {
        value = `FizzBuzz ${i}`;
      } else if (i % fizzNumber === 0) {
        value = `Fizz ${i}`;
      } else if (i % buzzNumber === 0) {
        value = `Buzz ${i}`;
      } else {
        value = ``;
      }

      const fizzbuzz = document.createElement('p');
      fizzbuzz.textContent = value;
      const div = document.querySelector('div');
      outputArea.appendChild(fizzbuzz);
  }

    if (!fizzNumber || !buzzNumber) {
      output.innerHTML = '';
      output.innerHTML = '<p>整数値を入力してください</p>';

    } else if (fizzNumber.match(/^\D+$/) || buzzNumber.match(/^\D+$/)) {
      output.innerHTML = '';
      output.innerHTML = '<p>整数値を入力してください</p>';

    } else if (fizzNumber.match(/^-?[0-9]+\.[0-9]+$/) || buzzNumber.match(/^-?[0-9]+\.[0-9]+$/)) {
      output.innerHTML = '';
      output.innerHTML = '<p>整数値を入力してください</p>';
    }
});
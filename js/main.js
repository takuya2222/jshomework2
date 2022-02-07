const button = document.getElementById("button");
const fizzbuzzList = document.getElementById("output");

const listAdd = (num) => {
  const li = document.createElement("li");
  li.textContent = num;
  fizzbuzzList.appendChild(li);
};

button.addEventListener("click", () => {
  const fizzNum = Number(document.getElementById("fizzNum").value);
  const buzzNum = Number(document.getElementById("buzzNum").value);

  if (
    Number.isInteger(fizzNum) && 
    Number.isInteger(buzzNum) &&
    fizzNum > 0 && buzzNum > 0
  ) {
    for (i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        listAdd(`FizzBuzz ${i}`);
      } else if (i % fizzNum === 0) {
        listAdd(`Fizz ${i}`);
      } else if (i % buzzNum === 0) {
        listAdd(`Buzz ${i}`);
      }
    }
  } else {
    listAdd("整数値を入力してください");
  }
});
import "./styles.css";

const limitList = document.querySelectorAll(".limitBtn");
const inputVal = document.getElementById("guessBox");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("suggestText");
const restartBtn = document.getElementById("playAgain");
const triedList = document.getElementById("triedList");

let limit;
let target;
const tried = [];

restartBtn.addEventListener("click", () => {
  limit = undefined;
  target = undefined;
  submitBtn.setAttribute("disabled", true);
});

limitList.forEach((elm) => {
  elm.addEventListener("click", () => {
    limit = parseInt(elm.getAttribute("value"));
    target = Math.floor(Math.random() * (limit + 1));
    limitList.forEach((element) => {
      element.setAttribute("disabled", true);
    });
    submitBtn.removeAttribute("disabled");
    restartBtn.setAttribute("disabled", true);
  });
});

submitBtn.addEventListener("click", () => {
  if (inputVal.valueAsNumber === target) {
    message.innerHTML = "Congrats! You got it.";
    submitBtn.setAttribute("disabled", true);
    restartBtn.removeAttribute("disabled");
    tried.push(inputVal.valueAsNumber);
  } else if (inputVal.valueAsNumber > target) {
    message.innerHTML = "Too High";
    tried.push(inputVal.valueAsNumber);
  } else {
    message.innerHTML = "Too Low";
    tried.push(inputVal.valueAsNumber);
  }
  inputVal.value = "";
  triedList.innerHTML = `You have tried the following Numbers: ${JSON.stringify(
    tried
  )}`;
});

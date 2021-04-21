// buttons
const decreaseBtn = document.querySelector(".decrease__btn");
const resetBtn = document.querySelector(".reset__btn");
const increaseBtn = document.querySelector(".increase__btn");
// display digits
const counterDigit = document.querySelector(".counter__digit");
// counter function
const counter = function (digit) {
    counterDigit.textContent = digit;
};
// global variable
let count = 0;
// decrement event
decreaseBtn.addEventListener("click", function () {
    counter((count -= 1));
});
// increment event
increaseBtn.addEventListener("click", function () {
    counter((count += 1));
});
// reset event
resetBtn.addEventListener("click", function () {
    counter((count = 0));
});

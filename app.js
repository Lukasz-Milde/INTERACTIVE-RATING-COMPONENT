const submitBtn = document.querySelector(".btn-submit");
const stateOne = document.querySelector(".card-state-1");
const stateTwo = document.querySelector("card-state-2");
const ratingBtn = document.querySelectorAll("btn-rating");
const score = document.querySelector("score");

submitBtn.addEventListener("click", changeState);

function changeState() {
	stateTwo.classList.remove(".hide");
	stateOne.classList.add(".hide");
}

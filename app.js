const submitBtn = document.querySelector(".btn-submit");
const stateOne = document.querySelector(".card-state-1");
const stateTwo = document.querySelector(".card-state-2");
const ratingBtn = document.querySelectorAll(".btn-rating");
let score = document.querySelector(".score");

submitBtn.addEventListener("click", changeState);

function changeState() {
	stateOne.classList.add("hide");
	stateTwo.classList.remove("hide");
}

ratingBtn.forEach((rate) => {
	rate.addEventListener("click", handleRateClick);
});

function handleRateClick() {
	ratingBtn.forEach((rate) => rate.classList.remove("active"));
}

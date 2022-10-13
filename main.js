const ratingBtns = document.querySelectorAll('.card-body-vote__rating-button');
const ratingResult = document.querySelector('.card-body-result__vote-result');
const submitBtn = document.querySelector('.card-body-vote__button-submit');
const refreshBtn = document.querySelector('.card-body-result__button-refresh');
const voteCard = document.querySelector('.card-body-vote');
const resultCard = document.querySelector('.card-body-result');
ratingResult.textContent = '5';

ratingBtns.forEach((buttons) => {
	buttons.addEventListener('click', (event) => {
		ratingBtns.forEach((btn) => {
			btn.classList.remove('selected');
			btn.classList.add('non-selected');
		});
		if (event.target.classList.contains('card-body-vote__rating-button')) {
			event.target.classList.remove('non-selected');
			event.target.classList.add('selected');
		}
		ratingResult.textContent = event.target.textContent;
	});
});

submitBtn.addEventListener('click', () => {
	voteCard.classList.add('hide-element');
	resultCard.classList.remove('hide-element');
});
refreshBtn.addEventListener('click', () => {
	voteCard.classList.remove('hide-element');
	resultCard.classList.add('hide-element');
	ratingBtns.forEach((btn) => {
		btn.classList.remove('selected');
		btn.classList.add('non-selected');
		ratingResult.textContent = '5';
	});
});


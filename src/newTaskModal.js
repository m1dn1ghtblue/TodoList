import Todo from './todo';

export default function openModal(todo = null) {
	const container = document.getElementById('modal-container');
	container.classList.add('open');
	container.addEventListener('click', (event) => {
		if (event.target == container) {
			container.classList.remove('open');
		}
	});

	const submitBtn = document.getElementById('submit-btn');
	submitBtn.addEventListener('click', () => {
		container.classList.remove('open');
	});
}

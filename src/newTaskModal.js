import Todo from './todo';
import todoStorage from './todoStorage';

export default function openModal(todo = null) {
	const container = document.getElementById('modal-container');
	container.classList.add('open');
	container.addEventListener('click', (event) => {
		if (event.target == container) {
			container.classList.remove('open');
		}
	});

	const form = document.getElementById('edit-task-form');
	const titleInput = document.getElementById('title-input');
	const dateInput = document.getElementById('date-input');
	const prioritySelect = document.getElementById('priority-select');

	if (todo) {
		// TODO current value set
	}

	const submitBtn = document.getElementById('edit-submit-btn');
	form.onsubmit = () => {
		const title = titleInput.value;
		const dueDate = dateInput.value;
		const priority = prioritySelect.value;

		if (todo) {
			// TODO update
		} else {
			todoStorage.addTodo(new Todo(title, dueDate, priority));
		}

		container.classList.remove('open');
		form.reset();
	};

	const cancelButton = document.getElementById('edit-cancel-btn');
	cancelButton.addEventListener('click', () => {
		container.classList.remove('open');
	});
}

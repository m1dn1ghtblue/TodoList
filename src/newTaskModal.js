import Todo from './todo';
import todoStorage from './todoStorage';
import taskList from './taskList';

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

	form.onsubmit = () => {
		const title = titleInput.value;
		const dueDate = dateInput.value;
		const priority = prioritySelect.value;

		if (todo) {
			// TODO update
		} else {
			todo = new Todo(title, dueDate, priority);
			todoStorage.addTodo(todo);
		}

		taskList.updateList();
		container.classList.remove('open');
		form.reset();
	};

	const cancelButton = document.getElementById('edit-cancel-btn');
	cancelButton.addEventListener('click', () => {
		container.classList.remove('open');
	});
}

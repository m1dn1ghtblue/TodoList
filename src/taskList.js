import todoStorage from './todoStorage';

export default (function taskList() {
	const list = document.getElementById('todo-list');

	function _clear() {
		while (list.lastChild) {
			list.removeChild(list.lastChild);
		}
	}

	function updateList() {
		_clear();
		const todos = todoStorage.getAllTodos();
		for (let todo of todos) {
			list.appendChild(todoItemFactory(todo));
		}
	}

	return {
		updateList,
	};
})();

function todoItemFactory(todo) {
	const item = document.createElement('div');
	item.classList.add('todo-item');

	//check
	const completedCheck = document.createElement('input');
	completedCheck.setAttribute('type', 'checkbox');
	completedCheck.classList.add('complete-cb');
	completedCheck.checked = todo.isCompleted;
	completedCheck.addEventListener('click', () => {
		todo.toggleComplete();
		todoStorage.updateTodo(todo);
	});
	item.appendChild(completedCheck);

	// title
	const todoTitle = document.createElement('span');
	todoTitle.classList.add('todo-title');
	todoTitle.textContent = todo.title;
	item.appendChild(todoTitle);
	item.setAttribute('priority', todo.priority);

	// due date
	const date = todo.dueDate;
	const todoDate = document.createElement('span');
	todoDate.classList.add('todo-date');
	todoDate.textContent = date != '' ? date : 'No deadline';
	item.appendChild(todoDate);

	// edit button
	const editButton = document.createElement('button');
	editButton.classList.add('todo-edit-btn');
	item.appendChild(editButton);

	// delete button
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('todo-delete-btn');
	item.appendChild(deleteButton);

	return item;
}

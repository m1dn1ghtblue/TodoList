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
	item.textContent = todo.title;
	item.setAttribute('priority', todo.priority);
	return item;
}

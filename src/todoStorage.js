import todoRegistry from './todoRegistry.js';

export default (function TodoStorage() {
	function addTodo(todo) {
		const id = todo.getId();
		todoRegistry.addKey(id);
		localStorage.setItem(id, JSON.stringify(todo));
	}

	function deleteTodo(todo) {
		const id = todo.getId();
		todoRegistry.deleteKey(id);
		localStorage.removeItem(id);
	}

	function updateTodo(todo) {
		const id = todo.getId();
		if (!todoRegistry.containsKey(id)) {
			addTodo(todo);
			return;
		}

		localStorage.setItem(id, JSON.stringify(todo));
	}

	return {
		addTodo,
		deleteTodo,
		updateTodo,
	};
})();

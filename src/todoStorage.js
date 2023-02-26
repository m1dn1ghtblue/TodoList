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

	function getAllTodos() {
		const keys = todoRegistry.getKeys();
		const todos = [];

		for (let key of keys) {
			const todo = _getTodoById(key);
			if (todo == null) {
				throw StorageException.valueNotExists(key);
			}
			todos.push(todo);
		}

		return todos;
	}

	function _getTodoById(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	return {
		addTodo,
		deleteTodo,
		updateTodo,
		getAllTodos,
	};
})();

class StorageException extends Error {
	constructor(message) {
		super(message);
	}

	static valueNotExists(key) {
		return new StorageException(`Value for key ${key} does not found`);
	}
}

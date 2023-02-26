export default (function TodoRegistry() {
	// initialize
	let registry;

	if (!localStorage.getItem('todoRegistry')) {
		registry = { todoKeys: [] };
		localStorage.setItem('todoRegistry', JSON.stringify(registry));
	} else {
		registry = JSON.parse(localStorage.getItem('todoRegistry'));
	}

	function _updateRegistry() {
		localStorage.setItem('todoRegistry', JSON.stringify(registry));
	}

	function _addKey(key) {
		registry.todoKeys.push(key);
		_updateRegistry();
	}

	function __deleteKey(key) {
		const index = registry.todoKeys.indexOf(key);
		if (index == -1) {
			return;
		}

		registry.todoKeys.splice(index, 1);
		_updateRegistry();
	}

	function addTodo(todo) {
		// TODO validation before inserting into local storage
		const id = todo.getId();
		localStorage.setItem(id, JSON.stringify(todo));
		_addKey(id);
	}

	function removeTodo(todo) {
		const id = todo.getId;
		if (!registry.todoKeys.includes(id)) {
			return;
		}

		localStorage.removeItem(id);
		__deleteKey(id);
	}

	function updateTodo(todo) {
		const id = todo.getId();
		if (registry.indexOf(id) == -1) {
			addTodo(todo);
			return;
		}

		localStorage.setItem(id, JSON.stringify(todo));
	}

	return {
		addTodo,
		removeTodo,
		updateTodo,
	};
})();

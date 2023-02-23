function projectFactory(title) {
	const todoList = [];

	function addTodo(todo) {
		if (todoList.find(todo)) {
			return;
		}
		todoList.push(todo);
	}

	function removeTodo(todo) {
		const index = todoList.indexOf(todo);
		if (index != -1) {
			todoList.splice(index, 1);
		}
	}

	return {
		title,
		addTodo,
		removeTodo,
	};
}

export { projectFactory };

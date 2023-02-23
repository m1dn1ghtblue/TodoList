const MAX_PRIORITY = 3;

function todoFactory(title, dueDate, priority = 0, description) {
	function getPriority() {
		return priority;
	}

	function setPriority(newPriority) {
		if (newPriority == undefined) {
			priority = 0;
		}
		if (newPriority < 0) {
			throw new TodoException('Cannot assign negative priority');
		}
		if (newPriority > MAX_PRIORITY) {
			throw new TodoException(`Cannot assign priority higher than maximum priority: ${MAX_PRIORITY}`);
		}
		priority = newPriority;
	}

	return {
		title,
		dueDate,
		description,
		getPriority,
		setPriority,
	};
}

class TodoException extends Error {
	constructor(message) {
		super(message);
	}
}

export { todoFactory, TodoException };

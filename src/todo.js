import createUid from './uidGenerator';

const MAX_PRIORITY = 3;

function todoFactory(title, dueDate, priority = 0, description) {
	const _id = 'todoid_' + createUid();

	function getId() {
		return _id;
	}

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

	let _isCompleted = false;

	function isCompleted() {
		return _isCompleted;
	}

	function toggleState() {
		_isCompleted = !_isCompleted;
	}

	return {
		title,
		dueDate,
		description,
		getId,
		getPriority,
		setPriority,
		isCompleted,
		toggleState,
	};
}

class TodoException extends Error {
	constructor(message) {
		super(message);
	}
}

export { todoFactory, TodoException };

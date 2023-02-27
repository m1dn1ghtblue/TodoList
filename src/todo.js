import createUid from './uidGenerator';

const MAX_PRIORITY = 3;

export default class Todo {
	constructor(title, dueDate, priority = 0) {
		this._id = 'todoid_' + createUid();
		this.title = title;
		this.dueDate = dueDate;
		this._priority = priority;
	}

	get priority() {
		return this._priority;
	}

	set priority(value) {
		if (value < 0 || value > MAX_PRIORITY) {
			throw new Error(`Invalid task priority: ${value}`);
		}

		this._priority = this.priority;
	}

	get id() {
		return this._id;
	}
}

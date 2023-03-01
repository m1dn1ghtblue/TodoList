import createUid from './uidGenerator';

const MAX_PRIORITY = 3;

export default class Todo {
	constructor(title, dueDate, priority = 0, projectId = null) {
		this._id = 'todoid_' + createUid();
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this._isCompleted = false;
		this.projectId = projectId;
	}

	get priority() {
		return this._priority;
	}

	set priority(value) {
		if (value < 0 || value > MAX_PRIORITY) {
			throw new Error(`Invalid task priority: ${value}`);
		}

		this._priority = value;
	}

	get id() {
		return this._id;
	}

	get isCompleted() {
		return this._isCompleted;
	}

	toggleComplete() {
		this._isCompleted = !this._isCompleted;
	}
}

import createUid from './uidGenerator.js';

export default class Project {
	constructor(title) {
		this._id = 'projectid_' + createUid();
		this.title = title;
	}
}

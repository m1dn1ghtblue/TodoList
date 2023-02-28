import todoStorage from './todoStorage';
import openModal from './newTaskModal';
import { endOfWeek, format, min, startOfWeek } from 'date-fns';

export default (function taskList() {
	const list = document.getElementById('todo-list');

	let maxDate = null;
	let minDate = null;
	let completeFilter = null;

	function _clear() {
		while (list.lastChild) {
			list.removeChild(list.lastChild);
		}
	}

	function filter(todo) {
		if (completeFilter && todo.isCompleted != completeFilter) return false;
		if (minDate && (!todo.dueDate || minDate > todo.dueDate)) return false;
		if (maxDate && (!todo.dueDate || maxDate < todo.dueDate)) return false;

		return true;
	}

	function updateList() {
		_clear();
		const todos = todoStorage.getAllTodos();
		for (let todo of todos) {
			if (filter(todo)) {
				list.appendChild(todoItemFactory(todo, updateList));
			}
		}
	}

	function resetFilters() {
		minDate = null;
		maxDate = null;
		completeFilter = null;
	}

	function filterToday() {
		minDate = maxDate = format(new Date(), 'yyyy-MM-dd');
		console.log(minDate);
	}

	function filterWeek() {
		const today = new Date();
		minDate = format(startOfWeek(today, { weekStartsOn: 1 }), 'yyyy-MM-dd');
		maxDate = format(endOfWeek(today, { weekStartsOn: 1 }), 'yyyy-MM-dd');
	}

	function filterCompleted(state = true) {
		completeFilter = state;
	}

	return {
		updateList,
		resetFilters,
		filterToday,
		filterWeek,
		filterCompleted,
	};
})();

function todoItemFactory(todo, updateCallback) {
	const item = document.createElement('div');
	item.classList.add('todo-item');
	item.setAttribute('priority', todo.priority);
	item.setAttribute('completed', todo.isCompleted);

	//check
	const completedCheck = document.createElement('input');
	completedCheck.setAttribute('type', 'checkbox');
	completedCheck.classList.add('complete-cb');
	completedCheck.checked = todo.isCompleted;
	completedCheck.addEventListener('click', () => {
		todo.toggleComplete();
		todoStorage.updateTodo(todo);
		item.setAttribute('completed', todo.isCompleted);
	});
	item.appendChild(completedCheck);

	// title
	const todoTitle = document.createElement('span');
	todoTitle.classList.add('todo-title');
	todoTitle.textContent = todo.title;
	item.appendChild(todoTitle);

	// due date
	const date = todo.dueDate;
	const todoDate = document.createElement('span');
	todoDate.classList.add('todo-date');
	todoDate.textContent = date != '' ? date : 'No deadline';
	item.appendChild(todoDate);

	// edit button
	const editButton = document.createElement('button');
	editButton.classList.add('todo-edit-btn');
	editButton.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>';
	editButton.addEventListener('click', () => {
		openModal(todo);
	});
	item.appendChild(editButton);

	// delete button
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('todo-delete-btn');
	deleteButton.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">	<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>';
	deleteButton.addEventListener('click', () => {
		todoStorage.deleteTodo(todo);
		updateCallback();
	});
	item.appendChild(deleteButton);

	return item;
}

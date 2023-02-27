export default function tabFactory(tabName, todoList = []) {
	const content = document.createElement('div');
	content.classList.add('content');

	// header
	const header = document.createElement('div');
	header.classList.add('header');
	const title = document.createElement('h3');
	title.textContent = tabName;
	header.appendChild(title);
	const divider = document.createElement('hr');
	header.appendChild(divider);
	content.appendChild(header);

	// todo list

	const list = document.createElement('div');
	list.classList.add('todo-list');
	content.appendChild(list);

	const addItem = document.createElement('button');
	addItem.classList.add('add-item-btn');
	const addIcon = document.createElement('svg');
	addItem.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg><h4>Add task</h4>';
	list.appendChild(addItem);

	for (let todo of todoList) {
		list.appendChild(todoItemFactory(todo));
	}

	return content;
}

function todoItemFactory(todo) {
	const item = document.createElement('div');
	item.classList.add('todo-item');
	item.textContent = todo.title + ' ' + todo.id;
	item.setAttribute('priority', todo.priority);
	return item;
}

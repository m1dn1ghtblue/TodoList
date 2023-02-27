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

	const list = document.createElement('div');
	list.classList.add('todo-list');
	content.appendChild(list);

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

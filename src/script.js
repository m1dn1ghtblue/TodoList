import './styles/style.scss';
import { todoFactory } from './todo.js';
import { projectFectory } from './project.js';
import { tabAll } from './tab_all.js';

const contentContaier = document.getElementById('content-container');

switchTab(tabAll);

function switchTab(tabFactory) {
	clearContent();
	const content = tabFactory();
	contentContaier.appendChild(content);
}

function clearContent() {
	while (contentContaier.lastChild) {
		contentContaier.removeChild(contentContaier.lastChild);
	}
}

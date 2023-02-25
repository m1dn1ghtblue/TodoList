import './styles/style.scss';
import { todoFactory } from './todo.js';
import { projectFectory } from './project.js';

const contentContaier = document.getElementById('content-container');

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

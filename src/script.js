import './styles/style.scss';
import { todoFactory } from './todo.js';
import tabFactory from './tabFactory';

const contentContaier = document.getElementById('content-container');

const allBtn = document.getElementById('nav-all');
const todayBtn = document.getElementById('nav-today');
const weekBtn = document.getElementById('nav-week');
const completedbtn = document.getElementById('nav-completed');

switchTab(tabFactory('All tasks'), allBtn);

allBtn.addEventListener('click', () => {
	switchTab(tabFactory('All tasks'), allBtn);
});
todayBtn.addEventListener('click', () => {
	switchTab(tabFactory('Tasks for today'), todayBtn);
});
weekBtn.addEventListener('click', () => {
	switchTab(tabFactory('Tasks for this week'), weekBtn);
});
completedbtn.addEventListener('click', () => {
	switchTab(tabFactory('Completed tasks'), completedbtn);
});

function switchTab(tab, navBtn) {
	clearContent();
	contentContaier.appendChild(tab);
	navBtn?.classList.add('open');
}

function clearContent() {
	while (contentContaier.lastChild) {
		contentContaier.removeChild(contentContaier.lastChild);
	}
	const openNavBtns = document.getElementsByClassName('open');
	for (let btn of openNavBtns) {
		btn.classList.remove('open');
	}
}

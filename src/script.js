import './styles/style.scss';
import openModal from './newTaskModal';
import taskList from './taskList';

const allBtn = document.getElementById('nav-all');
const todayBtn = document.getElementById('nav-today');
const weekBtn = document.getElementById('nav-week');
const completedBtn = document.getElementById('nav-completed');
const addTaskBtn = document.getElementById('add-item-btn');

taskList.updateList();

addTaskBtn.addEventListener('click', () => {
	openModal(null);
});

allBtn.addEventListener('click', () => {
	taskList.resetFilters();
	switchTab(allBtn, 'All tasks');
});

todayBtn.addEventListener('click', () => {
	taskList.resetFilters();
	taskList.filterToday();
	switchTab(todayBtn, 'Tasks for today');
});

weekBtn.addEventListener('click', () => {
	taskList.resetFilters();
	taskList.filterWeek();
	switchTab(weekBtn, 'Tasks for the week');
});

completedBtn.addEventListener('click', () => {
	taskList.resetFilters();
	taskList.filterCompleted(true);
	switchTab(completedBtn, 'Completed tasks');
});

function switchTab(navBtn, tabTitle) {
	closeTabs();
	navBtn.classList.add('open');
	const tabLabel = document.getElementById('tab-label');
	tabLabel.innerText = tabTitle;
	taskList.updateList();
}

function closeTabs() {
	const openNavBtns = document.getElementsByClassName('open');
	for (let btn of openNavBtns) {
		btn.classList.remove('open');
	}
}

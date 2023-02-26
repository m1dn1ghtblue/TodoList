export default function tabFactory(tabName) {
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

	return content;
}

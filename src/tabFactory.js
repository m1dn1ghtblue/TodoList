export default function tabFactory(tabName) {
	const content = document.createElement('div');
	content.classList.add('content');

	// header
	const header = document.createElement('div');
	header.classList.add('header');
	header.textContent = tabName;
	const divider = document.createElement('hr');
	header.appendChild(divider);
	content.appendChild(header);

	return content;
}

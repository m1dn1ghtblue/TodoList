export default (function () {
	// initialize
	let registry;

	if (!localStorage.getItem('todoRegistry')) {
		registry = { todoKeys: [] };
		localStorage.setItem('todoRegistry', JSON.stringify(registry));
	} else {
		registry = JSON.parse(localStorage.getItem('todoRegistry'));
	}

	function _updateRegistry() {
		localStorage.setItem('todoRegistry', JSON.stringify(registry));
	}

	function addKey(key) {
		if (registry.includes(key)) {
			throw RegistryException.duplicateKey(key);
		}

		registry.todoKeys.push(key);
		_updateRegistry();
	}

	function deleteKey(key) {
		const index = registry.todoKeys.indexOf(key);
		if (index == -1) {
			return;
		}

		registry.todoKeys.splice(index, 1);
		_updateRegistry();
	}

	function containsKey(key) {
		return registry.includes(key);
	}

	return {
		addKey,
		deleteKey,
		containsKey,
	};
})();

class RegistryException extends Error {
	constructor(message) {
		super(message);
	}

	static duplicateKey(key) {
		return new RegistryException(`Key ${key} already exists in registry`);
	}
}

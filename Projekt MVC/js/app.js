window.addEventListener('DOMContentLoaded', function () {
	
	// projekt wykonany na wzor obeservera
	var footerView = new UAM.FooterView(document.querySelector('#footerView'));
	var inputView = new UAM.InputView(document.querySelector('#inputView'), document.querySelector('#addButton'));
	var listView = new UAM.ListView(document.querySelector('#listView'));
	var store = new UAM.Store();

	var footerController = new UAM.FooterController(footerView, store);
	var inputController = new UAM.InputController(inputView, store);
	var listController = new UAM.ListController(listView, store);
	
	inputView.configureViewEvents();
	listView.configureViewEvents();
	store.configureStoreEvents();
});

UAM.Store = function() {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

// dodawanie obiektu
UAM.Store.prototype.add = function(data) {
	var listObject = {
		text: data,
		state: "inactive"
	}
	
	this.data.push(listObject);
	this.emit("addNewItem", "addNewItem", listObject);
};

// zmiana stanu na liscie itemow
UAM.Store.prototype.changeListItemState = function(id) {
	if(this.data[id].state === "active") {
		this.data[id].state = "inactive";
	} else {
		this.data[id].state = "active";
	}
	
	this.emit("itemStateChanged", "itemStateChanged", this.data[id]);
};

UAM.Store.prototype.configureStoreEvents = function() {
	this.on("addNewItem", this.notifyObservers, this);
	this.on("itemStateChanged", this.notifyObservers, this);
};

UAM.Store.prototype.notifyObservers = function(event) {
	if(event === "addNewItem") {
		this.footerView.addNewItem();
		this.listView.addNewItem(arguments[1]);
	} else if(event === "itemStateChanged") {
		this.footerView.itemStateChanged(arguments[1]);
	}
};

UAM.Store.prototype.regFooterView = function(view) {
	this.footerView = view;
};

UAM.Store.prototype.regInputView = function(view) {
	this.inputView = view;
};

UAM.Store.prototype.regListView = function(view) {
	this.listView = view;
};

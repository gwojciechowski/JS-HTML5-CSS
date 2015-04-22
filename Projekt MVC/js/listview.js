UAM.ListView = function(list) {
	UAM.EventEmitter.call(this);
	this.list = list;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.getList = function() {
	return this.list;
};

// dodawanie nowego itemu do listy w widoku
UAM.ListView.prototype.addNewItem = function(listObject) {
	var item = document.createElement('li');
	
	item.innerHTML = listObject.text;
	item.setAttribute("id", this.list.childElementCount);
	item.style.backgroundColor = "white";
	
	this.list.appendChild(item);
};

UAM.ListView.prototype.configureViewEvents = function() {
	this.list.addEventListener("click", function(e) {this.emit("listItemClicked", e.target.id);}.bind(this));
};

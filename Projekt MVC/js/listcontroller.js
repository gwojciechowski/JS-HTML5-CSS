UAM.ListController = function(view, model) {
	UAM.Controller.call(this, view, model);
	this.model.regListView(view);
	
	// kontroler odpowiadajacy za wyswietlenie listy itemow
	this.getView().on("listItemClicked", function(id) {
		this.model.changeListItemState(id);
		var item = this.getView().getList().children[id];
		
		if(item.style.backgroundColor === "white") {
			item.style.backgroundColor = "yellow";
		} else {
			item.style.backgroundColor = "white";
		}	
	}, this);
};

UAM.utils.inherits(UAM.Controller, UAM.ListController);


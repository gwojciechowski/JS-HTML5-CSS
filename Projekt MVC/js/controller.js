UAM.Controller = function(view, model) {
	this.model = model;
	this.view = view;
};

// zaciagniecie modelu poprzez kontroler
UAM.Controller.prototype.getModel = function() {
	return this.model;
};

// zaciagniecie widoku poprzez kontroler
UAM.Controller.prototype.getView = function() {
	return this.view;
};

UAM.InputController = function(view, model) {
	UAM.Controller.call(this, view, model);
	this.model.regInputView(view);
	
	// kontroler odpowiadajcy za dodanie nowego itema
	this.getView().on("buttonClicked", function() {
		var text = this.getView().getInput().value;		
		this.getModel().add(text);
		this.getView().getInput().value = "";
	}, this);
};

UAM.utils.inherits(UAM.Controller, UAM.InputController);


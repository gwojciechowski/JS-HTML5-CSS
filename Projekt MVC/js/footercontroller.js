UAM.FooterController = function(view, model) {
	UAM.Controller.call(this, view, model);
	this.model.regFooterView(view);
};

UAM.utils.inherits(UAM.Controller, UAM.FooterController);

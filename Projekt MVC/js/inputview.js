UAM.InputView = function(input, button) {
	UAM.EventEmitter.call(this);
	this.input = input;
	this.button = button;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

// widok przycisku 'dodaj'
UAM.InputView.prototype.getButton = function() {
	return this.button;
};

// widok okienka inputowego
UAM.InputView.prototype.getInput = function() {
	return this.input;
};

// event klikniecia
UAM.InputView.prototype.configureViewEvents = function() {
	this.button.addEventListener("click", function() {this.emit("buttonClicked");}.bind(this));
};



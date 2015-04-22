(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		this.listeners = {};
	};

	EE.prototype.emit = function (eventName) {
		var args, listeners = this.listeners[eventName] || [];
		args = Array.prototype.slice.call(arguments, 1);
		listeners.forEach(function (listObject) {
			listObject.fn.apply(listObject.ctx, args);
		});
	};
	
	EE.prototype.on = function (eventName, listener, context) {
		var listenerObject, me = this;
		
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		
		listenerObject = {
			fn: listener,
			ctx: context || window
		};

		this.listeners[eventName].push(listenerObject);

		return function () {
			var index = me.listeners[eventName].indexOf(listenerObject);
			
			if (index > -1) {
				me.listeners[eventName].splice(index, 1);
			}
			
		};
	};

	global.UAM.EventEmitter = EE;

}(window));

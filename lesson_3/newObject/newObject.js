(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

  	function newObject() {
        var parameters = [];
        var constructor = arguments[0];
                
        for(var i = 1; i < arguments.length; i++) {
                parameters.push(arguments[i]);
        }
        
        var object = Object.create(constructor.prototype);
        var results = constructor.apply(object, parameters);
        
        return results != null && typeof results === 'object' ? results : object;
        return object;
}

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/



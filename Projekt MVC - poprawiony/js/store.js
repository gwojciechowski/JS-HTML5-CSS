UAM.Store = function () {
	UAM.EventEmitter.call(this);
	
	this.table  = [];
	
	var sum = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.addElement = function (table) {
    this.table.push(table);
    
    var id = this.table.indexOf(table);
    
    this.emit("AddItem", this.table, table, id);
    this.emit("UpdateItem", this.table, table, id);
    this.emit("UpdateActive", this.table, id, table.active)
};

UAM.Store.prototype.getActiveSize = function(sum){
    this.table.forEach(function(element){
		if(element.active) {
			sum++;
		}
    });
    
    return sum;
}

UAM.Store.prototype.getSize = function(){
    return this.table.length;
}

UAM.Store.prototype.simpleAdd = function(value){
    this.addElement({
		"value":value,
		"active":true
	});
};

UAM.Store.prototype.update = function (id, table){
    this.table[id]= table;
    
    listUpdateItem(table);
};

UAM.Store.prototype.updateActive = function(id, active){
    this.table[id].active = active;
    
    this.emit("UpdateActive",this.data, id, active);
    listUpdateItem(active);
}

UAM.Store.prototype.updateValue = function(id, value){
    this.table[id].value = value;
    
    listUpdateItem(value);
}

UAM.Store.prototype.listUpdateItem = function(x) {
	this.emit("UpdateItem", this.table, x, id);
}

UAM.ListView = function(element){
    UAM.EventEmitter.call(this);
    	
    this.frame = element.querySelector("li");
    this.ul = element.querySelector("ul");
    this.table=[];
    
    var a = this;
    
    this.Add = function(value){
        addItem(value);
        listChangeFunction();
    }
    this.Update = function(id,value){
        updateItem(id,value);
        listChangeFunction();
        listUpdateFunction();
    }
    
    function addItem(value){
        var item = a.frame.cloneNode(true);
        item.querySelector("span").textContent = getSize();
        item.querySelector("b").textContent = value;
        item.querySelector("a").addEventListener("click", function(elem){
            a.emit("ItemClick",parseInt(elem.target.parentElement.querySelector("span").innerHTML));
            listUpdateFunction();
        })
        a.table.push(item);
        a.ul.appendChild(item);
    }
    
    function listChangeFunction(){ 
		a.emit("listChange", getSize(), getActive(), getInactive());
	}
	
	function listUpdateFunction(){
		a.emit("listUpdate", getSize(), getActive(), getInactive());
	}
    
    function getActive(){
        return getSize() - getInactive();
    }
    
    function getInactive(){
        return a.ul.querySelectorAll(".inactive").length;
    }
    
    function getSize(){
        return a.table.length;
    }
    
    function updateItem(id,value){
        a.table[id].querySelector("b").textContent = value;
        a.ul.children[id] = a.table[id];
    }
}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.updateActive = function(id, active){
    this.table[id].className = active ? "active":"inactive";
    this.ul.children[id] = this.table[id];
}

UAM.ListView.prototype.isInactive = function(id){
    var elem = this.table[id];
    return elem.className.indexOf("active")>0 ? false:true;
}

UAM.FooterView = function(element){
    UAM.EventEmitter.call(this);
    
    this.activeSize = element.querySelector(".activeSize");
    this.size = element.querySelector(".size");
}

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.setActiveSize = function(element){
    this.activeSize.textContent = element;
}

UAM.FooterView.prototype.setSize = function(element){
    this.size.textContent = element;
}

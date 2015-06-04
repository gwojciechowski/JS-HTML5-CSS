UAM.InputView = function(element){
    UAM.EventEmitter.call(this);
    
    this.element = element;
    var a = this;
    
    this.input = this.element.querySelector("input[id=addText]");
    this.confirm = this.element.querySelector("input[id=addConfirm]");
    
    function confirm(){
        a.emit("InputConfirm", a.input.value);
    }
    
    this.confirm.addEventListener("click", confirm);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

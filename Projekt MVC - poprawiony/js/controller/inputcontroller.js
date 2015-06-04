function InputController(view, store){
    view.on("InputConfirm", submitData);
    
    function submitData(data){
        store.simpleAdd(data);
    }
}

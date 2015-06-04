function ListController(view, store){
    view.on("ItemClick", changeItemState);
    store.on("AddItem", addElement);
    
    var inactive = "inactive", tmp;
    
    function changeItemState(id){
		tmp = !view.isInactive(id) ? true:false;
		
		view.updateActive(id, tmp);
        store.updateActive(id, tmp);
    }
    
    function addElement(data, value, id){
        view.Add(value.value);
    }
}

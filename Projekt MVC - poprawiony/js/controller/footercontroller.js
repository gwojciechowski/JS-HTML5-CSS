function FooterController(view, store){ 
    store.on("UpdateActive", updateActive);
    store.on("UpdateItem", updateSize);
    
    function updateActive(){
        view.setActiveSize(store.getActiveSize(0));
    }
    
    function updateSize(){
        view.setSize(store.getSize());
    }
}

UAM.FooterView = function(footer) {
	UAM.EventEmitter.call(this);
	this.footer = footer;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

// zaciagniecie footera przez footerView
UAM.FooterView.prototype.getFooter = function() {
	return this.footer;
};

// widok ilosci itemow
UAM.FooterView.prototype.addNewItem = function() {
	this.footer.getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML = parseInt(this.footer.getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML)+1;
};

// widok ilosci aktywnych itemow
UAM.FooterView.prototype.itemStateChanged = function(listObject) {
	if(listObject.state === "inactive") {
		this.footer.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML = parseInt(this.footer.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML)-1;
	} else {
		this.footer.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML = parseInt(this.footer.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML)+1;
	}
};

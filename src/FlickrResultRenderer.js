var jstdd = jstdd || {};


jstdd.FlickrResultRenderer = function(searchResult) {
	this.searchResult = searchResult;
	
	this.getFirstResult = function() {
		return this.searchResult.items[0];
	}
};

jstdd.FlickrResultRenderer.prototype.render = function() {
	if (this.searchResult.length === 0) {
		return "No results found";
	}
	
	return this.getFirstResult().description;
}
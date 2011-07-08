var jstdd = jstdd || {};


jstdd.FlickrResultParser = function(searchResult) {
	this.searchResult = searchResult;

	this.getFirstResult = function() {
		return this.searchResult.items[0];
	}
};

jstdd.FlickrResultParser.prototype.getMarkup = function() {
	if (!this.searchResult || this.searchResult.length === 0) {
		return "No results found";
	}

	return this.getFirstResult().description;
}
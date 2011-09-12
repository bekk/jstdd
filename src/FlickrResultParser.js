var jstdd = jstdd || {}; // Ensure that the namespace exist

/**
 * Parses the result JSON structure from Flickr and exposes
 * functions to read the data-structure.
 */
jstdd.FlickrResultParser = function(searchResult) {
	this.searchResult = searchResult;

	this.getFirstResult = function() {
		return this.searchResult.items[0];
	}
};

/**
 * The only way to read the markup from the result. We only
 * need the first result.
 *
 * Handles empty result-sets by returning a "no result" message.
 */
jstdd.FlickrResultParser.prototype.getMarkup = function() {
	if (!this.searchResult || this.searchResult.length === 0) {
		return "No results found";
	}

	return this.getFirstResult().description;
}
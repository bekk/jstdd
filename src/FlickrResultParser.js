var jstdd = jstdd || {}; // Ensure that the namespace exist

/**
 * Parses the result JSON structure from Flickr and exposes
 * functions to read the data-structure.
 */
jstdd.FlickrResultParser = function(searchResult) {
    // Instance fields
    var _searchResult = searchResult;

    // Private methods
    function getFirstResult() {
        return _searchResult.items[0];
    }

    // Public API
    return {
        /**
         * The only way to read the markup from the result. We only
         * need the first result.
         *
         * Handles empty result-sets by returning a "no result" message.
         */
        getMarkup: function() {
            if (!_searchResult || _searchResult.length === 0) {
                return "No results found";
            }

            return getFirstResult().description;
        }
    }
};
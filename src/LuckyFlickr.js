var jstdd = jstdd || {}; // Ensure that the namespace exist

// Borrowed from CoffeeScript
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

/**
 * The main class that handles interaction with the UI
 * and delegates the search request.
 */
jstdd.LuckyFlickr = {
    // The DOM element that will display the results
	resultElementId: "results",

    // The implementation of the fetcher that does the request and gets the result
	fetcher: new jstdd.FlickrFetcher(),

    /**
     * When searching, the result element is replaced with a loading message.
     *
     * @param keyword to search for
     */
	search: function(keyword) {
        var resultElement = document.getElementById(this.resultElementId);

        resultElement.innerHTML = "Loading";
		this.fetcher.getResult(keyword, __bind(this.onResult, this));
	},

    /**
     * Handles the callback when the result is received.
     * Swaps the content of the result element with the result.
     *
     * @param searchResult JSON object containing the search result
     */
	onResult: function(searchResult) {
		var parser = new jstdd.FlickrResultParser(searchResult),
			resultElement = document.getElementById(this.resultElementId);

		resultElement.innerHTML = parser.getMarkup();
	}
};
var jstdd = jstdd || {}; // Ensure that the namespace exist

// Borrowed from CoffeeScript
var __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

/**
 * The main class that handles interaction with the UI
 * and delegates the search request.
 */
jstdd.LuckyFlickr = function(fetcher) {
    var _fetcher = fetcher;

    // Private methods

    function getResultElement() {
        return document.getElementById(jstdd.LuckyFlickr.ResultElementId);
    }

    /**
     * Handles the callback when the result is received.
     * Swaps the content of the result element with the result.
     *
     * @param searchResult JSON object containing the search result
     */
    function onResult(searchResult) {
        var parser = new jstdd.FlickrResultParser(searchResult),
            resultElement = getResultElement();

        resultElement.innerHTML = parser.getMarkup();
    }

    // The implementation of the fetcher that does the request and gets the result

    return {
        /**
         * When searching, the result element is replaced with a loading message.
         *
         * @param keyword to search for
         */
        search: function(keyword) {
            var resultElement = getResultElement();

            resultElement.innerHTML = "Loading";

            _fetcher.getResult(keyword, onResult);
        }
    }
};

// Static

// The ID to the DOM element that will display the results
jstdd.LuckyFlickr.ResultElementId = "results";
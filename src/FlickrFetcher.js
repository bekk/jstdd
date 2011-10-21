var jstdd = jstdd || {}; // Ensure that the namespace exist

/**
 * Does the actual request to Flickr.
 */
jstdd.FlickrFetcher = function() {
    // Private methods
    function getRandomNumber() {
        return ~~(Math.random() * 1000000000);
    }

    // Public API
    return {
        /**
         * Uses JSON-P to retrieve the result from Flickr.
         *
         * @param keyword What to search for
         * @param completeCallback Callback which handles the response
         */
        getResult: function(keyword, completeCallback) {

            var script = document.createElement('script'),
                randomNumber = getRandomNumber();

            script.src = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + keyword + "&tagmode=any&format=json&jsoncallback=handleResult_" + randomNumber;
            document.body.appendChild(script);

            window[jstdd.FlickrFetcher.ResultHandlerPrefix + randomNumber] = completeCallback;

            return randomNumber;
        }
    };
};

// Static 
jstdd.FlickrFetcher.ResultHandlerPrefix = "handleResult_";
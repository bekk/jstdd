describe("Flicker result fetcher", function() {

    describe("when querying flickr", function() {
        it("should create a global function that handles the JSON-P callback", function() {
            var fetcher = new jstdd.FlickrFetcher();

            var randomNumber = fetcher.getResult("Keyword", function() { });
            var callbackFunction = window[jstdd.FlickrFetcher.ResultHandlerPrefix + randomNumber];

            expect(callbackFunction).toBeDefined();
        });

        it("should do a search and call the callback function", function() {
            var keyword = "BEKK",
                fetcher = new jstdd.FlickrFetcher();

            var result;
            var randomNumber = fetcher.getResult(keyword, function(searchResult) {
                result = searchResult;
            });

            // Simlate JSON-P callback
            window[jstdd.FlickrFetcher.ResultHandlerPrefix  + randomNumber](flickrResultStub);

            expect(result).toBe(flickrResultStub);
        });
    });
});
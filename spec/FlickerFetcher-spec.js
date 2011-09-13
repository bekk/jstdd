describe("Flicker result fetcher", function() {

	describe("when querying flickr", function() {

		beforeEach(function() {
			this.originalXhr = XMLHttpRequest;
		    XMLHttpRequest = function() {
		        return {
		            readyState: 4,
		            status: 200,
		            responseText: flickrResultStub,
		            onreadystatechange: function() {},
		            open: function(type, url, async) { },
		            send: function() {
		                this.onreadystatechange();
		            }
		        };
		    };

		});

        afterEach(function() {
            XMLHttpRequest = this.originalXhr;
        });

        it("should do a search and call the callback function", function() {
            var keyword = "BEKK",
                fetcher = new jstdd.FlickrFetcher();

            var result;
            fetcher.getResult(keyword, function(searchResult) {
                result = searchResult;
            });

            expect(result).toBe(flickrResultStub);
        });
    });
});
describe("Flicker result fetcher", function() {

	describe("when querying flickr", function() {

		beforeEach(function() {
			this.originalXhr = XMLHttpRequest;
		    XMLHttpRequest = function() {
		        return {
		            readyState: 4,
		            status: 200,
		            responseText: flickrResultMock,
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

        it("should do a search with a given keyword", function() {
            var keyword = "BEKK",
                fetcher = new jstdd.FlickrFetcher();

            var result;
            fetcher.getResult(keyword, function(searchResult) {
                result = searchResult;
            });

            expect(result).toBe(flickrResultMock);
        });
    });
});
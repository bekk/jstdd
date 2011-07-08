describe("Flicker result fetcher", function() {

	describe("when querying flickr", function() {
		
		xit("should do a search with a given keyword", function() {
			var keyword = "BEKK",
				fetcher = new jstdd.FlickrFetcher();
				
			//setupAjaxMocking();
			XMLHttpRequest = function() { return {
				readyState: 4,
				status: 200,
				responseText: flickrResultMock,
				onreadystatechange: function() {},
				open: function(type, url, async) {
					console.log(arguments);
				}, 
				send: function() {
					console.log("Send");
					this.onreadystatechange();
				}
			}; };

			var result = fetcher.getResult(keyword);

			console.log(result, flickrResultMock);
			expect(result).toBe(flickrResultMock);
		});
		
		
	});
	
});
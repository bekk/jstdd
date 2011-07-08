describe("Flicker result fetcher", function() {

	describe("when querying flickr", function() {
		it("should do a search with a given keyword against flickr", function() {
			var keyword = "BEKK",
				outputElementId = "testDomElement",
				fetcher = new jstdd.FlickrFetcher();

			spyOn(fetcher, "getResult");

			jstdd.LuckyFlickr.fetcher = fetcher;
			jstdd.LuckyFlickr.search(keyword);

			expect(fetcher.getResult).toHaveBeenCalledWith(keyword);
		});
	});

});
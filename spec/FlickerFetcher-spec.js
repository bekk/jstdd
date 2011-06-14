describe("Flicker result fetcher", function() {

	describe("when querying flickr", function() {
		it("should do a search with a given keyword against flickr", function() {
			var keyword = "BEKK",
				outputElementId = "testDomElement",
				luckyFlickr = new jstdd.LuckyFlickr(outputElementId),
				fetcher = new jstdd.FlickrFetcher();

			spyOn(fetcher, "getResult");

			luckyFlickr.setFetcher(fetcher);
			luckyFlickr.search(keyword);

			expect(fetcher.getResult).toHaveBeenCalledWith(keyword);
		});
	});
});
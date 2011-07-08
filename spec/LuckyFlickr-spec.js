/*
it("should do a search with a given keyword against flickr", function() {
	var keyword = "BEKK",
		fetcher = new jstdd.FlickrFetcher();

	spyOn(fetcher, "getResult");

	jstdd.LuckyFlickr.fetcher = fetcher;
	jstdd.LuckyFlickr.search(keyword);

	expect(fetcher.getResult).toHaveBeenCalledWith(keyword);
});

it("should display the search result in the specified result element", function() {
	var result = flickrResultMock,
	 	parser = new jstdd.FlickrResultParser(result),
	
		fetcher = new jstdd.FlickrFetcher();
		fetcher.setParser(parser);
	
	var keyword = "BEKK",
	 	fakeResult = flickrResultMock,
		resultElementId = "testDomElement",
		fetcher = new jstdd.FlickrFetcher();
	
	spyOn(fetcher, "getResult").andReturn(fakeResult);

	// private method
	var fakeResultElement = document.createElement("div");
	fakeResultElement.setAttribute("id", resultElementId);
	
	jstdd.LuckyFlickr.resultElementId = resultElementId; 
	jstdd.LuckyFlickr.fetcher = fetcher;
	jstdd.LuckyFlickr.search(keyword);

	expect(fakeResultElement.innerHTML, toContain())
});
*/
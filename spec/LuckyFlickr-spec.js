describe("LuckyFlickr", function() {
	
	it("should display the search result in the specified result element", function() {
		var fakeResult = flickrResultMock,
			fetcher = new jstdd.FlickrFetcher(),
			resultElementId = "testDomElement";

		spyOn(fetcher, "getResult").andReturn(fakeResult);

		var fakeResultElement = document.createElement("div");
		fakeResultElement.setAttribute("id", resultElementId);
		document.body.appendChild(fakeResultElement);		
		
		jstdd.LuckyFlickr.resultElementId = resultElementId; 
		jstdd.LuckyFlickr.fetcher = fetcher;
		
		jstdd.LuckyFlickr.search("some random keyword");

		expect(fakeResultElement.innerHTML).toContain("<img");
	});
	
});
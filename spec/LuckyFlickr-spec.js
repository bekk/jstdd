describe("LuckyFlickr", function() {

    it("should display the search result in the specified result element", function() {
        var fakeResult = flickrResultStub,
            fetcher = new jstdd.FlickrFetcher(),
            resultElementId = "testDomElement";

        spyOn(fetcher, "getResult").andReturn(fakeResult);

        var fakeResultElement = document.createElement("div");
        fakeResultElement.setAttribute("id", resultElementId);
        document.body.appendChild(fakeResultElement);

        jstdd.LuckyFlickr.resultElementId = resultElementId;
        jstdd.LuckyFlickr.fetcher = fetcher;

        jstdd.LuckyFlickr.search("some random keyword", function(searchResult) {
            expect(fakeResultElement.innerHTML).toContain("<img");
            document.body.removeChild(fakeResultElement); // Clean up
        });
    });

    it("should display a loading indicator while searching flickr", function() {
        var fakeResult = flickrResultStub,
            fetcher = new jstdd.FlickrFetcher(),
            loadingElementId = "testLoadingDiv";

        spyOn(fetcher, "getResult").andReturn(fakeResult);

        var fakeLoadingElement = document.createElement("div");
        fakeLoadingElement.setAttribute("id", loadingElementId);
        document.body.appendChild(fakeLoadingElement);

        jstdd.LuckyFlickr.resultElementId = loadingElementId;
        jstdd.LuckyFlickr.fetcher = fetcher;

        jstdd.LuckyFlickr.search("some random keyword", function(ignore) { });

        expect(fakeLoadingElement.innerHTML).toContain("Loading");
    });
});
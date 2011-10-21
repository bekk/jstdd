describe("LuckyFlickr", function() {

    var fetcher;
    var fakeResultElement;

    beforeEach(function() {
        createFakeResultElement();

        fetcher = new jstdd.FlickrFetcher();
        spyOn(fetcher, "getResult").andReturn(flickrResultStub);
    });

    afterEach(function() {
        removeFakeResultElement();
    });


    it("should display the search result in the specified result element", function() {
        var luckyFlickr = new jstdd.LuckyFlickr(fetcher);

        luckyFlickr.search("some random keyword", function(searchResult) {
            expect(fakeResultElement.innerHTML).toContain("<img");
        });
    });

    it("should display a loading indicator while searching flickr", function() {
        var luckyFlickr = new jstdd.LuckyFlickr(fetcher);

        luckyFlickr.search("some random keyword", function(ignore) { });

        expect(fakeResultElement.innerHTML).toContain("Loading");
    });

    // Test helpers

    function createFakeResultElement() {
        fakeResultElement = document.createElement("div");
        fakeResultElement.setAttribute("id", jstdd.LuckyFlickr.ResultElementId);
        document.body.appendChild(fakeResultElement);
    }

    function removeFakeResultElement() {
        document.body.removeChild(fakeResultElement);
    }
});
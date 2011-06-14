describe("Flicker Search", function() {
	
	// describe("when querying flickr", function() {
	// 	xit("should ", function() {
	// 		
	// 	});
	// });
	
	
	describe("rendering result", function() {
		it("should not render an image when there are no results", function() {
			var result = [];
			var renderer = new jstdd.FlickrResultRenderer(result);
			
			var output = renderer.render();
			
			expect(output).toEqual("No results found");
		});
		
		it("should render the an image from the result", function() {
			var result = flickrResultMock;
			var renderer = new jstdd.FlickrResultRenderer(result);
			
			var output = renderer.render();
			
			expect(output).toContain("<img");
			
		});
	});
	
});
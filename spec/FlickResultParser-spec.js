describe("Flicker result parser", function() {
	
	describe("outputting result", function() {

		it("should not output an image when there are no results", function() {
			var result = undefined,
				parser = new jstdd.FlickrResultParser(result),
				
				output = parser.getMarkup();

			expect(output).toEqual("No results found");
		});

		it("should output the image from the result", function() {
			var result = flickrResultMock,
			 	parser = new jstdd.FlickrResultParser(result),
			
				output = parser.getMarkup();

			expect(output).toContain("<img");
		});
	});

});

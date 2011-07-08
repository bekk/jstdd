var jstdd = jstdd || {};


jstdd.LuckyFlickr = {
	resultElementId: "results",
	fetcher: new jstdd.FlickrFetcher(),

	search: function(keyword) {
		var result = this.fetcher.getResult.call(this, keyword),
			parser = new jstdd.FlickrResultParser(result),
			
			resultElement = document.getElementById(this.resultElementId);
			// feilsjekk
			resultElement.innerHTML = parser.getMarkup();
	}
};
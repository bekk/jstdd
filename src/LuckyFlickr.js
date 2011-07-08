var jstdd = jstdd || {};

// Borrowed from CoffeeScript
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

jstdd.LuckyFlickr = {
	resultElementId: "results",
	fetcher: new jstdd.FlickrFetcher(),

	search: function(keyword) {
		this.fetcher.getResult(keyword, __bind(this.onResult, this));
	},
	
	onResult: function(searchResult) {
		var parser = new jstdd.FlickrResultParser(searchResult),
			resultElement = document.getElementById(this.resultElementId);

		resultElement.innerHTML = parser.getMarkup();
	}
};
var jstdd = jstdd || {};


jstdd.LuckyFlickr = function() {
	console.log("W0000p!");
	this.fetcher = new jstdd.FlickrFetcher();
};

jstdd.LuckyFlickr.prototype.search = function(keyword) {
	this.fetcher.getResult.call(this, keyword);
};

jstdd.LuckyFlickr.prototype.setFetcher = function(fetcher) {
	this.fetcher = fetcher;
};

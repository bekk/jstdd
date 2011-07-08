var jstdd = jstdd || {};


jstdd.LuckyFlickr = {
	fetcher: new jstdd.FlickrFetcher(),

	search: function(keyword) {
		this.fetcher.getResult.call(this, keyword);
	}
};
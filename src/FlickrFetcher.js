var jstdd = jstdd || {}; // Ensure that the namespace exist

/**
 * Does the actual request to Flickr.
 *
 * NOTE: Only has one method, and could have been written much
 *       easier. But... whatevvah!
 */
jstdd.FlickrFetcher = function() { };

jstdd.FlickrFetcher.prototype.getResult = function(keyword, completeCallback) {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost/flickr/photos_public.gne?tags=" + keyword + "&tagmode=any&format=json&jsoncallback=?";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			completeCallback(eval(xmlhttp.responseText));
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};
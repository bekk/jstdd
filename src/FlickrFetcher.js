var jstdd = jstdd || {};


jstdd.FlickrFetcher = function() {

};

jstdd.FlickrFetcher.prototype.getResult = function(keyword) {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost/flickr/photos_public.gne?tags=" + keyword + "&tagmode=any&format=json&jsoncallback=?";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log(eval('( ' + xmlhttp.responseText + ' )'));
			return eval(xmlhttp.responseText);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};
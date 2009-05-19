/*

FlickrClient using GetSleep

flickr = FlickrClient.new('YOUR_API_KEY')
var query = 'colors';
flickr.get('photos.search', {text:query}, function(data){
	if(data.stat=='ok'){
		alert(data.photos.total + ' photos found');
	}else{
		alert('something terrible has happened');
	}
});

*/
var FlickrClient = function(account_api_key, user_opts){

	var defaults = {
		base_uri : 'http://api.flickr.com/services/rest',
		default_params : {
			format : 'json',
			api_key : account_api_key
		}
	}

	var opts = $.extend(defaults, user_opts);

	var m = new GetSleep(opts);

	function get(flickr_service, params, cb){
		flickr_service = 'flickr.' + flickr_service;
		m.get($.extend({method : flickr_service}, params), cb);
	}

	return {
		get : get
	}

}
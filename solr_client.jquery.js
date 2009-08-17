/*

SolrClient using GetSleep

solr = new SolrClient('http://localhost:8983/solr')
solr.get({q:'colors'}, function(data){
	alert(data.response.docs.length);
});

*/
var SolrClient = function(solr_url, user_opts){
    
	var defaults = {
		base_uri : solr_url,
		default_params : {
			'wt' : 'json',
			'json.wrf' : '?'
		}
	}
    
	var opts = $.extend(defaults, user_opts);
    
	var m = new GetSleep(opts);
    
	function get(handler, params, cb){
		m.get(handler, params, cb);
	}
    
	return {
		get : get
	}

}
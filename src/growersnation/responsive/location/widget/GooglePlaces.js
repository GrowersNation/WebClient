define([], function(){
	window.google = window.google || {};
	google.maps = google.maps || {};
	(function() {
	  
	  function getScript(src) {
	    document.write('<' + 'script src="' + src + '"' +
	                   ' type="text/javascript"><' + '/script>');
	  }
	  
	  var modules = google.maps.modules = {};
	  google.maps.__gjsload__ = function(name, text) {
	    modules[name] = text;
	  };
	  
	  google.maps.Load = function(apiLoad) {
	    delete google.maps.Load;
	    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=en-GB\u0026","http://mt1.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=en-GB\u0026"],null,null,null,null,"m@231000000"],[["http://khm0.googleapis.com/kh?v=137\u0026hl=en-GB\u0026","http://khm1.googleapis.com/kh?v=137\u0026hl=en-GB\u0026"],null,null,null,1,"137"],[["http://mt0.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=en-GB\u0026","http://mt1.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=en-GB\u0026"],null,null,null,null,"h@231000000"],[["http://mt0.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=en-GB\u0026","http://mt1.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=en-GB\u0026"],null,null,null,null,"t@131,r@231000000"],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=81\u0026hl=en-GB\u0026","http://khm1.googleapis.com/kh?v=81\u0026hl=en-GB\u0026"],null,null,null,null,"81"],[["http://mt0.googleapis.com/mapslt?hl=en-GB\u0026","http://mt1.googleapis.com/mapslt?hl=en-GB\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en-GB\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en-GB\u0026"]],[["http://mt0.googleapis.com/vt?hl=en-GB\u0026","http://mt1.googleapis.com/vt?hl=en-GB\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en-GB\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en-GB\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-GB\u0026","https://mts1.googleapis.com/mapslt?hl=en-GB\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-GB\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-GB\u0026"]]],["en-GB","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/en_gb/mapfiles/api-3/14/3","3.14.3"],[33211634],1,null,null,null,null,0,"",["places"],null,0,"http://khm.googleapis.com/mz?v=137\u0026","AIzaSyAkGg9qaoOU-kmk2sq832m0PKH4POj1Xm0","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",231000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",231000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"h",231000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"h",231000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",131],[0,"r",131000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],0],[null,[[4,"t",131],[0,"r",131000000]],[null,"en-GB","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],3],[null,null,[null,"en-GB","US",null,18],0],[null,null,[null,"en-GB","US",null,18],3],[null,null,[null,"en-GB","US",null,18],6],[null,null,[null,"en-GB","US",null,18],0]]], loadScriptTime);
	  };
	  var loadScriptTime = (new Date).getTime();
	  getScript("http://maps.gstatic.com/cat_js/intl/en_gb/mapfiles/api-3/14/3/%7Bmain,places%7D.js");
	})();
})

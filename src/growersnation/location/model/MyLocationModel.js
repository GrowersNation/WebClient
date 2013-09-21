define(["dojo/store/Memory",
 	 	"dojo/store/JsonRest",
 	 	"dojo/store/Cache",
 	 	"dojo/_base/declare",
 	 	"dojo/when"],

	function(Memory,
			 JsonRest,
			 Cache,
			 declare,
			 when){
		
		var service = new JsonRest({
			// google maps places api uri for location details, inc a api key and a unique reference parameter
			target: "/maps/api/place/details/json?sensor=false&key=AIzaSyAkGg9qaoOU-kmk2sq832m0PKH4POj1Xm0&reference="
		});
		var model = new Memory();
		var cache = new Cache(service, model);
			 	
		return {
			get: function(id){
				
				// description:
				//        For a get request, if the object exists in the memory store
				//        then return it with a promise, otherwise, return the promise
				//        that is returned by the json rest store.get()
				
				return when(cache.get(id));
			}
		};
		
	}
	
);

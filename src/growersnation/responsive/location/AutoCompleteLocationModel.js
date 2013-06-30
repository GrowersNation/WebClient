define(["dojo/store/Memory",
 	 	"dojo/store/JsonRest",
 	 	"dojo/store/Cache",
 	 	"dojo/_base/declare",
 	 	"dojo/Deferred"],

	function(Memory,
			 JsonRest,
			 Cache,
			 declare,
			 Deferred){
		
		var service = new JsonRest({
			// google maps places api uri for autocomplete location searches
			target: "/maps/api/place/autocomplete/json?&sensor=true&key=AIzaSyAdxFxJZ5P0VdgGB3okJ9GoiQ5ebT2FFYM&input="
		});
		var model = new Memory();
		var cache = new Cache(service, model);
			 	
		return {
			get: function(id){
				
				// description:
				//        For a get request, if the object exists in the memory store
				//        then return it with a promise, otherwise, return the promise
				//        that is returned by the json rest store.get()
				
				var result = cache.get(id);
				if(result.then){
					return result;
				} else {
					// return a fake promise with the returned object
					var deferred = new Deferred();
					 setTimeout(function(){
				      deferred.resolve(result);
				    }, 100);
					return deferred;
				}
			}
		}
		
	}
	
)

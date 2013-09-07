define(["dojo/store/Memory",
 	 	"dojo/store/JsonRest",
 	 	"dojo/store/Cache",
 	 	"dojo/_base/declare",
 	 	"dojo/Deferred",
 	 	"dojo/promise/Promise"],

	function(Memory,
			 JsonRest,
			 Cache,
			 declare,
			 Deferred,
			 Promise){
		
		var service = new JsonRest({ idProperty: "id", target: "/WebClient/test/resources/data/" });
		var model = new Memory({ idProperty: "id" });
		var cache = new Cache(service, model);
			 	
		return {
			get: function(id){
				
				// description:
				//        For a get request, if the object exists in the memory store
				//        then return it with a promise, otherwise, return the promise
				//        that is returned by the json rest store.get()
				
				var result = cache.get(id);
				if(result instanceof Promise){
					return result;
				} else {
					// return a fake promise with the returned object
					var deferred = new Deferred();
					 setTimeout(function(){
				      deferred.resolve(result);
				    }, 100);
					return deferred.promise;
				}
			}
		}
		
	}
	
)

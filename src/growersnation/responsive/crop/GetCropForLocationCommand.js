define([],
	function(){
		return {
			execute: function(options){
				var id = "crop.json?location=" + options.location.lat + "," + options.location.lng;
        		produceData.get(id).then(
        			function(data){
        				// tell others that the crop data is ready
        				
        			},
        			function(error){
        				console.log("Failed to get crop data:", error);
        			}
        		)
			}
		}
	}	
)

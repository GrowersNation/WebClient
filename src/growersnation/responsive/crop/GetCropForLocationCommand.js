define(["gn/produce/model/produceData"],
	function(produceData){
		return {
			execute: function(options){
				var id = "crops.json?location=" + options.location.lat + "," + options.location.lng;
        		produceData.get(id).then(
        			function(data){
        				// tell others that the crop data is ready
        				console.log(data);
        			},
        			function(error){
        				console.log("Failed to get crop data:", error);
        			}
        		);
			}
		};
	}	
);

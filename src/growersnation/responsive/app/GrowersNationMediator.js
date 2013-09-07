define(["gn/responsive/location/widget/MyLocation",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/domReady!"],
	
	function(MyLocation,
			 declare,
			 lang){
		
		return declare([],{
			constructor: function(){
				var myLocation = new MyLocation({});
				myLocation.placeAt("myLocationNode");
				myLocation.startup();
				myLocation.watch("currentLocation", lang.hitch(this, this.handleNewLocation));
			},
			
			handleNewlocation: function(attr, oldValue, newValue){
				var id = "crops.json?location=" + newValue.location.lat + "," + newValue.location.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// tell others that the crop data is ready
        				console.log(data);
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			}
		});
		
	}
);

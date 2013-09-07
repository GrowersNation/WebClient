define(["gn/responsive/location/widget/MyLocation",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/Stateful",
		"dojo/domReady!"],
	
	function(MyLocation,
			 declare,
			 lang,
			 Stateful){
		
		return declare([Stateful],{
			
			_myLocation: undefined,
			
			constructor: function(view){
				this.set("_myLocation", new MyLocation());
				this.get("_myLocation").placeAt(view.myLocationNode);
				this.get("_myLocation").startup();
				this.get("_myLocation").watch("currentLocation", lang.hitch(this, this.handleNewLocation));
			},
			
			handleNewLocation: function(attr, oldValue, newValue){
				console.log(attr, oldValue, newValue);
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

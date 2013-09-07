define(["gn/responsive/location/widget/MyLocation",
		"gn/responsive/produce/model/produceData",
		"gn/responsive/produce/widget/Produce",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/Stateful",
		"dojo/domReady!"],
	
	function(MyLocation,
			 produceData,
			 Produce,
			 declare,
			 lang,
			 Stateful){
		
		return declare([Stateful],{
			
			_location: undefined,
			_produce: undefined,
			
			constructor: function(view){
				// instantiate location widget
				this.set("_location", new MyLocation());
				this.get("_location").placeAt(view.myLocationNode);
				this.get("_location").startup();
				this.get("_location").watch("currentLocation", lang.hitch(this, this.handleNewLocation));
				
				// instantiate produce widget
				this.set("_produce", new Produce());
			},
			
			handleNewLocation: function(attr, oldValue, newValue){
				console.log(attr, oldValue, newValue);
				var id = "crops.json?location=" + newValue.lat + "," + newValue.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this.get("_produce").createCrops(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			}
		});
		
	}
);

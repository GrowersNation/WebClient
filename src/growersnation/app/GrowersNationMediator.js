define(["gn/location/widget/Location",
		"gn/produce/model/produceData",
		"gn/produce/widget/Produce",
		"gn/garden/widget/MyGarden",
		"gn/app/widget/Views",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/Stateful",
		"dijit/registry",
		"dojo/domReady!"],
	
	function(Location,
			 produceData,
			 Produce,
			 MyGarden,
			 Views,
			 declare,
			 lang,
			 Stateful,
			 registry){
		
		return declare([Stateful],{
			
			_views: undefined,
			_location: undefined,
			_produce: undefined,
			_garden: undefined,
			
			constructor: function(viewId){
				// instantiate the main views and startup
				this._views = new Views({}, viewId);
				this._views.startup();
				
				// instantiate location widget
				this._location = new Location();
				this._location.placeAt(this._views.get("locationNode"));
				this._location.startup();
				this._location.watch("selectedLocation", lang.hitch(this, this.handleNewLocation));
				
				// instantiate produce widget
				this._produce = new Produce();
				this._produce.placeAt(this._views.get("produceNode"));
				this._produce.startup();
				this._produce.watch("category", lang.hitch(this, this.handleNewCategory));
				this._produce.watch("crop", lang.hitch(this, this.handleNewItem));
				
				// initialise garden widget
				this._garden = new MyGarden();
				this._garden.placeAt(this._views.get("gardenNode"));
				this._garden.startup();
			},
			
			handleNewLocation: function(attr, oldValue, newValue){
				var id = "categorys.json?location=" + newValue.lat + "," + newValue.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this._views.toggleViews("produceView");
        				this._produce.loadCategories(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			},
			
			handleNewCategory: function(attr, oldValue, newValue){
				var location = this._location.get("selectedLocation");
				var id = "crops.json?location=" + location.lat + "," + location.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this._produce.loadCrops(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			},
			
			handleNewItem: function(attr, oldValue, newValue){
				var location = this._location.get("selectedLocation");
				var crop = this._produce.get("crop");
				
				this._garden.set("crop", crop);
				this._garden.get("image").src = crop.imgSrc;
				this._garden.get("planting").startDate = crop.endDate;
				this._garden.get("planting").endDate =  crop.startDate;
				this._garden.get("harvesting").startDate = crop.harvestStartDate;
				this._garden.get("harvesting").endDate = crop.harvestEndDate;
				
				this._views.toggleViews("gardenView");
			}
		});
		
	}
);

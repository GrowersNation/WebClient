define(["gn/responsive/location/widget/MyLocation",
		"gn/responsive/produce/model/produceData",
		"gn/responsive/produce/widget/Produce",
		"gn/responsive/app/widget/Views",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/Stateful",
		"dijit/registry",
		"dojo/domReady!"],
	
	function(MyLocation,
			 produceData,
			 Produce,
			 Views,
			 declare,
			 lang,
			 Stateful,
			 registry){
		
		return declare([Stateful],{
			
			_views: undefined,
			_location: undefined,
			_produce: undefined,
			
			_initWidget: function(attr, Widget, node, options){
				if (options === null || options === undefined){
					options = {};
				}
				this.set(attr, new Widget(options));
				this.get(attr).placeAt(node);
				this.get(attr).startup();
			},
			
			constructor: function(viewId){
				// instantiate the main views and startup
				this._initWidget("_views", Views, viewId);
				
				// instantiate location widget
				this._initWidget("_location", MyLocation, this.get("_views").locationNode);
				this.get("_location").watch("currentLocation", lang.hitch(this, this.handleNewLocation));
				
				// instantiate produce widget
				this._initWidget("_produce", Produce, this.get("_views").produceNode);
				this.get("_produce").watch("category", lang.hitch(this, this.handleNewCategory));
				this.get("_produce").watch("item", lang.hitch(this, this.handleNewItem));
			},
			
			handleNewLocation: function(attr, oldValue, newValue){
				var id = "categorys.json?location=" + newValue.lat + "," + newValue.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this.get("_views").toggleViews("produceView");
        				this.get("_produce").loadCategories(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			},
			
			handleNewCategory: function(attr, oldValue, newValue){
				var location = this.get("_location").currentLocation;
				var id = "crops.json?location=" + location.lat + "," + location.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this.get("_views").toggleViews("gardenView");
        				this.get("_produce").loadPlantingData(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			},
			
			handleNewItem: function(attr, oldValue, newValue){
				var location = this.get("_location").currentLocation;
				var id = "planting.json?location=" + location.lat + "," + location.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this.get("_produce").loadCrops(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		); 
			}
		});
		
	}
);

define(["gn/responsive/location/widget/Location",
		"gn/responsive/produce/model/produceData",
		"gn/responsive/produce/widget/Produce",
		"gn/responsive/garden/widget/MyGarden",
		"gn/responsive/app/widget/Views",
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
				this._initWidget("_location", Location, this.get("_views").locationNode);
				this.get("_location").watch("selectedLocation", lang.hitch(this, this.handleNewLocation));
				
				// instantiate produce widget
				this._initWidget("_produce", Produce, this.get("_views").produceNode);
				this.get("_produce").watch("category", lang.hitch(this, this.handleNewCategory));
				this.get("_produce").watch("crop", lang.hitch(this, this.handleNewItem));
				
				// initialise garden widget
				this._initWidget("_garden", MyGarden, this.get("_views").gardenNode);
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
				var location = this._location.get("selectedLocation");
				var id = "crops.json?location=" + location.lat + "," + location.lng;
        		produceData.get(id).then(
        			lang.hitch(this, function(data){
        				// inject crop data into widget for rendering
        				this.get("_produce").loadCrops(data.results);        				
        			}),
        			lang.hitch(this, function(error){
        				console.log("Failed to get crop data:", error);
        			})
        		);
			},
			
			handleNewItem: function(attr, oldValue, newValue){
				var location = this._location.get("selectedLocation");
				var crop = this.get("_produce").crop;
				
				this.get("_garden").crop = crop;
				this.get("_garden").image.src = crop.imgSrc;
				this.get("_garden").planting.startDate = crop.endDate;
				this.get("_garden").planting.endDate =  crop.startDate;
				this.get("_garden").harvesting.startDate = crop.harvestStartDate;
				this.get("_garden").harvesting.endDate = crop.harvestEndDate;
				
				this.get("_views").toggleViews("gardenView");
			}
		});
		
	}
);

/**
 * @author jeremy.brooks
 */
define(["dojo/on",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/text!./template/produce.html",
		"dijit/_WidgetBase",
		"dijit/_WidgetsInTemplateMixin",
		"dijit/_TemplatedMixin",
		"dijit/registry",
		"gn/responsive/produce/widget/Category",
		"gn/responsive/produce/widget/Crop",
		"gn/responsive/produce/widget/Type"],
	
	function(on,
			 declare,
			 lang,
			 template,
			 _WidgetBase,
			 _WidgetsInTemplateMixin,
			 _TemplatedMixin,
			 registry,
			 Category,
			 Crop,
			 Type){
		
		function formatDate(isoString){
			var date = new Date(isoString);
			var dateArray = isoString.split("T");
			dateArray = dateArray[0].split("-");
			return dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
		}
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			category: undefined,
			crop: undefined,
			
			templateString: template,
			
			loadCategories: function(categoryData){
				this.clearDomNode();
				var category = undefined;
				for (var i = 0; i < categoryData.length; i++){
					category = new Category({
						name: categoryData[i].category.name,
						imgSrc: categoryData[i].category.image
					});
					category.placeAt(this.domNode);
					category.startup();
					
					// listen for category selection
					on(category.image, "click", lang.hitch([this, category], function(event){
						var category = this[1];
						this[0].set("category", this[1]);
					}));
				}
			},
			
			loadCrops: function(cropData){
				this.clearDomNode();
				var crop = undefined;
				for (var i = 0; i < cropData.length; i++){
					crop = new Crop({
						name: cropData[i].crop.name,
						information: cropData[i].crop.information,
						imgSrc: cropData[i].crop.image,
						category: this.get("category").name,
						startDate: cropData[i].crop.planting.startDate,
						endDate: cropData[i].crop.planting.endDate
					});
					crop.placeAt(this.domNode);
					crop.startup();
					
					// listen for crop selection
					on(crop.image, "click", lang.hitch([this, crop], function(event){
						var crop = this[1];
						this[0].set("crop", this[1]);
					}));
				}
			},
			
			clearDomNode: function(){
				var allWidgets = registry.findWidgets(this.domNode);
				for (var i = 0; i < allWidgets.length; i++){
					allWidgets[i].destroyRecursive();
				}
			}
			
		});
	}
);

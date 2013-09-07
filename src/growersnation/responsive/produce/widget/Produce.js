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
			
			templateString: template,
			
			createCrops: function(categoryData){
				var category = undefined;
				for (var i = 0; i < categoryData.length; i++){
					category = new Category({
						name: categoryData[i].category.name,
						imgSrc: categoryData[i].category.image
					});
					category.placeAt(this.domNode);
					category.startup();
					
					// listen for category selection
					on(category.image, "click", lang.hitch(this, this.loadCrop));
				}
			},
			
			loadCrop: function(){
				
			}
			
		});
	}
);

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
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			templateString: template,
			
			createCrops: function(cropData){
				var crop = undefined;
				for (var i = 0; i < cropData.length; i++){
					crop = new Crop({
						name: cropData[i].crop.name,
						information: cropData[i].crop.information,
						imgSrc: cropData[i].crop.image,
						startDate: cropData[i].crop.planting.startDate,
						endDate: cropData[i].crop.planting.endDate
					});
					crop.placeAt(this.domNode);
					crop.startup();
				}
			}
			
		});
	}
);

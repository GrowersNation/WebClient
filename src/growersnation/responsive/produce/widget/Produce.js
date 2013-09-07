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
			crops: [],
			
			createCrops: function(cropData){
				var crop = undefined;
				for (var i = 0; i < cropData.length; i++){
					crop = new Crop().placeAt(this.domNode);
					crop.startup();
					crop.hide();
					this.get("crops").push(crop);
				}
			}
			
		});
	}
);

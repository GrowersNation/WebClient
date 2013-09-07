/**
 * @author jeremy.brooks
 */
define(["dojo/on",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/text!./template/produce.html",
		"dojo/text!./template/category.html",
		"dojo/text!./template/type.html",
		"dojo/text!./template/crop.html",
		"dijit/_WidgetBase",
		"dijit/_WidgetsInTemplateMixin",
		"dijit/_TemplatedMixin"],
	
	function(on,
			 declare,
			 lang,
			 produceTemplate,
			 categoryTemplate,
			 typeTemplate,
			 cropTemplate,
			 _WidgetBase,
			 _WidgetsInTemplateMixin,
			 _TemplatedMixin){
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			templateString: produceTemplate,
			
			createCrops: function(cropData){
				for (var i = 0; i < cropData.length; i++){
					console.log(cropData[i]);
				}
			}
			
		});
	}
);

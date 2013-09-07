/**
 * @author jeremy.brooks
 */
define(["dojo/on",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/text!./template/plantingCalendar.html",
		"dijit/_WidgetBase",
		"dijit/_WidgetsInTemplateMixin",
		"dijit/_TemplatedMixin"],
	
	function(on,
			 declare,
			 lang,
			 template,
			 _WidgetBase,
			 _WidgetsInTemplateMixin,
			 _TemplatedMixin){
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			templateString: template
			
		});
	}
);

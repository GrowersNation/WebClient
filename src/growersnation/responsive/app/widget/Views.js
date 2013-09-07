/**
 * @author jeremy.brooks
 */
define(["dojo/on",
		"dojo/_base/declare",
		"dojo/_base/lang",
		"dojo/text!./template/views.html",
		"dijit/_WidgetBase",
		"dijit/_WidgetsInTemplateMixin",
		"dijit/_TemplatedMixin",
		"dojox/mobile/View",
		"dojox/mobile/Heading",
		"dijit/registry",
		"dojo/domReady!"],
	
	function(on,
			 declare,
			 lang,
			 template,
			 _WidgetBase,
			 _WidgetsInTemplateMixin,
			 _TemplatedMixin,
			 View,
			 Heading,
			 registry){
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			templateString: template,
			
			toggleViews: function(view){
				
				// description:
				//		This will get all views under the domNode
				//		and hide them if they dont match the view
				//		attach point injected.
				
				var allViews = registry.findWidgets(this.domNode);
				for (var i = 0; i < allViews.length; i++){
					if (view === allViews[i].dojoAttachPoint){
						allViews[i].show();
					} else {
						allViews[i].hide();
					}
				}
			}
			
		});
	}
);

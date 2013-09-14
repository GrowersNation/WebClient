/**
 * @author jeremy.brooks
 */
define(
	["dojo/dom-construct",
	 "dojo/request",
	 "dojo/on",
	 "dojo/_base/declare",
	 "dojo/_base/lang",
	 "gn/responsive/location/model/MyLocationModel",
	 "gn/responsive/location/model/AutoCompleteLocationModel",
	 "dojo/text!./template/myLocation.html",
	 "dijit/_WidgetBase",
	 "dijit/_WidgetsInTemplateMixin",
	 "dijit/_TemplatedMixin",
	 "dojo/topic",
	 "googleMaps"],
	
	function(domConstruct, 
			 request,
			 on,
			 declare,
			 lang,
			 MyLocationModel,
			 AutoCompleteLocationModel,
			 template,
			 _WidgetBase,
			 _WidgetsInTemplateMixin,
			 _TemplatedMixin,
			 topic){
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			
			map: undefined,
			templateString: template,
			selectedLocationReference: undefined,
			currentLocation: undefined,
			
			startup: function(){
				this._googleSearch();
				//on(this.locationSearch, "keyup", lang.hitch(this, this.autoCompleteLocResults));
				//on(this.locSearchForm, "submit", lang.hitch(this, this.handleSubmit));
			},
			
			_googleSearch: function() {
		
				try {
					var locOptions = {};
					var autocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('searchField')[0], locOptions);
		
					google.maps.event.addListener(autocomplete, 'place_changed', function() {
						var place = autocomplete.getPlace();
						if (place.geometry && typeof place.geometry !== 'undefined') {
							console.log("location data: ", place);
						} else {
							alert("error");
						}
					});
		
				} catch(err) {
					alert("error", err);
				}
			}
		});
	}
);

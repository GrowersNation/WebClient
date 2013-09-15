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
	 "dojo/topic"],
	
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
		
		//var locInput = "<form>Location: <input id='location' type='text' name='location'><input type='submit' value='Submit'></form>";
		//var autoComplete = "<div id='locsFound'></div>";
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			map: undefined,
			templateString: template,
			selectedLocationReference: undefined,
			currentLocation: undefined,
			_autocomplete: undefined,
			
			postCreate: function(){
				this._autocomplete = new google.maps.places.Autocomplete(this.location, {});
				on(this.locSearchForm, "submit", lang.hitch(this, this.handleSubmit));
			},
			
			handleSubmit: function(event){
				event.preventDefault();
				var place = this._autocomplete.getPlace();
				
				// handle validity check and new location submit
				if(place !== undefined && place !== null && this.locSearchForm.checkValidity() && place.geometry){
		            console.log(event);
		        } else {
		        	console.log(place);
			        return false;
		        }
			}
		});
	}
);

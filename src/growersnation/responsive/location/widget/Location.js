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
			
			postCreate: function(){
				var input = this.location;
				var autocomplete = new google.maps.places.Autocomplete(input, {});
				
				google.maps.event.addListener(autocomplete, 'place_changed', function() {
					var place = autocomplete.getPlace();
					if (place.geometry && typeof place.geometry !== 'undefined') {
						console.log("location data: ", place);
					} else {
						console.log("error");
					}
				});

				//on(this.location, "keyup", lang.hitch(this, this.autoCompleteLocResults));
				//on(this.locSearchForm, "submit", lang.hitch(this, this.handleSubmit));
			},
			
			autoCompleteLocResults: function(args){
				
			},
			
			handleSelectedLocation: function(locationReference){
				/*MyLocationModel.get(locationReference).then(
					lang.hitch(this, function(data){
						var locGeometry = data.result.geometry;
						var locPosition = locGeometry.location;
						var locViewport = locGeometry.viewport;
						var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+locPosition.lat+","+locPosition.lng+"&zoom=14&size=400x300&sensor=false";
						this.locsFoundOnMap.innerHTML = "<img src='"+img_url+"'>";
					}),
					function(error){
						this.locsFoundOnMap.innerHTML = "<p>" + error + "</p>";
					}
				);*/
			},
			
			handleSubmit: function(event){
				event.preventDefault();
				
				// handle validity check and new location submit
				if(this.locSearchForm.checkValidity()){
		            console.log(event);
		        } else {
			        return false;
		        }
			}
		});
	}
);

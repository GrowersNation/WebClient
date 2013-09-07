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
	 "dojo/text!./template/myLocationTemplate.html",
	 "dijit/_WidgetBase",
	 "dijit/_WidgetsInTemplateMixin",
	 "dijit/_TemplatedMixin",
	 "gn/produce/model/produceData",
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
			 produceData,
			 topic){
		
		//var locInput = "<form>Location: <input id='location' type='text' name='location'><input type='submit' value='Submit'></form>";
		//var autoComplete = "<div id='locsFound'></div>";
		
		return declare([_WidgetBase, _WidgetsInTemplateMixin, _TemplatedMixin], {
			map: undefined,
			templateString: template,
			selectedLocationReference: undefined,
			currentLocation: undefined,
			
			startup: function(){
				on(this.location, "keyup", lang.hitch(this, this.autoCompleteLocResults));
				on(this.locSearchForm, "submit", lang.hitch(this, this.handleSubmit));
			},
			
			autoCompleteLocResults: function(args){
				var searchString = this.location.value;
				AutoCompleteLocationModel.get(searchString).then(
					lang.hitch(this, function(data){
						// clear results node
						domConstruct.empty("locsFound");
						
						// loop over all locations found
						for (var attribute in data){
							if (data.hasOwnProperty(attribute) === true && attribute === "predictions"){
								for (var index = 0; index < data[attribute].length; index++){
									// extract required data
									var uniqueRef = data[attribute][index].reference;
									var name = data[attribute][index].description;
									var node = domConstruct.toDom("<p class='locSearchResult' data-loc-name='" + name + "' data-loc-refernce='" + uniqueRef + "'>" + name + "</p>");
									
									// listen for click event on each location
									on(node, "click", lang.hitch(this, function(event){
										var locRef = event.currentTarget.dataset.locRefernce;
										var name = event.currentTarget.dataset.locName;
										this.location.value = name;
										this.handleSelectedLocation(locRef);
										this.selectedLocationReference = locRef;
									}));
									domConstruct.place(node, "locsFound");
								}
							}
						}
						
					}),
					function(error){
						document.getElementById("locsFound").innerHTML = error;
					}
				);
			},
			
			handleSelectedLocation: function(locationReference){
				MyLocationModel.get(locationReference).then(
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
				);
			},
			
			handleSubmit: function(event){
				event.preventDefault();
				
				// have to have this check because of a bug in the code
				// which is doing a double submit on 'submit'.
				// needs fixing, started when Views were added.
				if(this.get("currentLocation") !== undefined){
					return false;
				}
				
				// handle validity check and new location submit
				if(this.locSearchForm.checkValidity()){
		            MyLocationModel.get(this.selectedLocationReference).then(
		            	lang.hitch(this, function(data){
		            		this.set("currentLocation", data.result.geometry.location);
		            	}),
		            	function(error){
		            		this.locsFoundOnMap.innerHTML = "<p>" + error + "</p>";
		            	}
		            );
		        } else {
			        return false;
		        }
			}
		});
	}
);

/**
 * @author jeremy.brooks
 */
define(
	["dojo/dom-construct",
	 "dojo/request"],
	
	function(domConstruct, 
			 request){
		
		var placesUri = "/maps/api/place/autocomplete/json?&sensor=true&key=AIzaSyAdxFxJZ5P0VdgGB3okJ9GoiQ5ebT2FFYM";
		var locInput = "<form>Location: <input id='location' type='text' name='location'><input type='submit' value='Submit'></form>";
		
		domConstruct.empty("main");
		var input = domConstruct.place(locInput, "main");
		document.getElementById("location").onkeyup = function(args){
			var uri = placesUri + "&input=" + document.getElementById("location").value;
			request.get(uri, {
				handleAs: "text"
			}).then(
				function(data){
					var result = JSON.parse(data);
					var locNames = "";
					
					for (var attribute in result){
						if (result.hasOwnProperty(attribute) === true && attribute === "predictions"){
							for (var index = 0; index < result[attribute].length; index++){
								locNames += "<p>" + result[attribute][index].description + "</p>";
							}
						}
					}
					
					document.getElementById("test").innerHTML = locNames;
				},
				function(error){
					document.getElementById("test").innerHTML = error;
				}
			);
			return false;
		}
	}
)

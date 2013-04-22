/**
 * @author jeremy.brooks
 */
define(
	["dojo/dom-construct",
	 "dojo/request",
	 "dojo/_base/declare"],
	
	function(domConstruct, 
			 request,
			 declare){
		
		var placesUri = "/maps/api/place/autocomplete/json?&sensor=true&key=AIzaSyAdxFxJZ5P0VdgGB3okJ9GoiQ5ebT2FFYM";
		var locInput = "<form>Location: <input id='location' type='text' name='location'><input type='submit' value='Submit'></form>";
		
		return declare(null, {
			constructor: function(){
				
				//	summary
				//		adds listener and elements liked to location search results
				
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
										locNames += "<p><a href=''>" + result[attribute][index].description + "</a></p>";
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
		});
	}
)

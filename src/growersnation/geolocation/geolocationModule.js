define(
	["dijit/form/Button",
	"dojo/dom",
	"dojo/domReady!"],
	function(Button, dom){
		
		var locationContent = dom.byId("locationContent");
		var checkLocationContent = dom.byId("locationCheck");
		
		var yesButton = new Button(
				{label: "yes",
				title: "go and choose some produce",
				checked: false,
				onClick: nextSection},
				"yes"
			);
			yesButton.style.visibility = "hidden";
			yesButton.startup();
			
		var noButton = new Button(
				{label: "no",
				title: "try to find you with a different method",
				checked: false,
				onClick: useGears},
				"no"
			);
			noButton.style.visibility = "hidden";
			noButton.startup();
		
		function geolocate(event){
			navigator.geolocation.getCurrentPosition(showPositionOnMap);
		}
		
		function showPositionOnMap(position){
			var latlon=position.coords.latitude+","+position.coords.longitude;
			var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
			locationContent.innerHTML = "<img src='"+img_url+"'>";
			checkLocationContent.style.visibility = "visible";
			createCheckLocationButton();
		}
		
		function createCheckLocationButton(){
			yesButton.style.visibility = "visible";
			noButton.style.visibility = "visible";
			
			var locationConsentContent = dojo.byId("locationConsentContent");
			locationConsentContent.style.display = "none";
		}
		
		function useGears(event){
			locationContent.innerHTML = "";
		}
		
		function nextSection(event){
			
		}
		
		return {
			create: function(label, nodeId, handler){
				var btn = new Button(
					{label: label,
					checked: false,
					onClick: geolocate},
					nodeId
				);
				btn.startup();
			}	
		}
	}
)

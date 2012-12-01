define(
	["dijit/form/Button",
	"dojo/dom",
	"dojo/topic",
	"dojo/on",
	"src/utils/CategoryTopics",
	"dojo/domReady!"],
	function(Button, dom, topic, on, CategoryTopics){
		
		var lat, lng;
		
		var locationContent = dom.byId("locationContent");
		var checkLocationContent = dom.byId("locationCheck");
		
		var yesButton = new Button(
				{label: "yes",
				title: "go and choose some produce",
				checked: false,
				onClick: getCategoriesForLocation},
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
		
		function showPositionOnMap(position){
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=14&size=400x300&sensor=false";
			locationContent.innerHTML = "<img src='"+img_url+"'>";
			checkLocationContent.style.visibility = "visible";
			createCheckLocationButton();
			getCategoriesForLocation();
		}
		
		function createCheckLocationButton(){
			yesButton.style.visibility = "visible";
			noButton.style.visibility = "visible";
		}
		
		function useGears(event){
			locationContent.innerHTML = "";
		}

		function getCategoriesForLocation(){
			topic.publish(CategoryTopics().GET_CATEGORIES, lat, lng);
		}
		
		return {
			startup: function(){
				navigator.geolocation.getCurrentPosition(showPositionOnMap);
				on(document, "#reset-app:click", getCategoriesForLocation);
			}	
		}
	}
)

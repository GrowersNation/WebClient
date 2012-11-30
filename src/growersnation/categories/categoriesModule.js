define(
	["dojo/dom",
	"dojo/topic",
	"dojo/domReady!"],
	function(dom, topic){
		var handle = topic.subscribe("growersnation/get/categories", getCategories);
		
		var categoryContent = dom.byId("category-content");
		
		function getCategories(lat, lng){

			//Proof of concept
			categoryContent.innerHTML = "Your lat/lng is: " + lat + " / " + lng;
			
			//**********TODO************//
			
			//Call out to service to get JSON for categories against lat/lng
			//Parse data into model objects
			//Show data in right-hand panel
			//Add events etc to allow clickable to go to sub-categories
		}
		
	}
)

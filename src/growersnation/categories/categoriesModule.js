define(
	["dojo/dom",
	"dojo/topic",
	"src/utils/CategoryTopics",
	"src/growersnation/categories/model/CategoriesModel",
	"dojo/domReady!"],
	function(dom, topic, CategoryTopics, CategoriesModel){
		var handle = topic.subscribe(CategoryTopics().GET_CATEGORIES, getCategories);
		
		var categoryContent = dom.byId("category-content");
				
		function getCategories(lat, lng){

			//Proof of concept
			categoryContent.innerHTML = "Your lat/lng is: " + lat + " / " + lng;

			// Instantiate the Category Model:
			categoryModel = new CategoriesModel();
			
			//**********TODO************//
			
			//Call out to service to get JSON for categories against lat/lng
			//Parse data into model objects
			
			//Show data in right-hand panel
			var categoryTitle = '<h2>At your location, you can grow:</h2>'
			var content  = '';
			
			for (var i = 0; i < categoryModel.Categories.objectStore.data.length; i++) {
				content += '<div class="category-item">';
				content += '<div class="category-image"><img src="'+categoryModel.Categories.objectStore.data[i].img+'"/></div>';
				content += '<div class="category-title">'+categoryModel.Categories.objectStore.data[i].label+'</div>';
				content += '</div>';
			}
			
			dojo.html.set(categoryContent, categoryTitle+"<div id='categories'>"+content+"</div>");
			
			//Add events etc to allow clickable to go to sub-categories
		}
		
	}
)

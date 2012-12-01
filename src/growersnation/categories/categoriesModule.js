define(
	["dojo/dom",
	"dojo/topic",
	"dojo/on",
	"src/utils/CategoryTopics",
	"src/utils/GlobalTopics",
	"src/growersnation/categories/model/CategoriesModel",
	"dojo/domReady!"],
	function(dom, topic, on, CategoryTopics, GlobalTopics, CategoriesModel){
		var handle = topic.subscribe(CategoryTopics().GET_CATEGORIES, getCategories);
		
		var categoryContent = dom.byId("category-content");
				
		function getCategories(lat, lng) {

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
				content += '<div class="category-id">'+categoryModel.Categories.objectStore.data[i].id+'</div>';
				content += '<div class="category-image"><img src="'+categoryModel.Categories.objectStore.data[i].img+'"/></div>';
				content += '<div class="category-title">'+categoryModel.Categories.objectStore.data[i].label+'</div>';
				content += '</div>';
			}
			
			dojo.html.set(categoryContent, categoryTitle+"<div id='categories'>"+content+"</div>");
			
			//Add events etc to allow clickable to go to sub-categories
			on(document, ".category-item:click", categoryClicked);
			
			hideResetOption();
		}
		
		function hideResetOption(){
			dom.byId("reset-app").style.display = "none";
		}
		
		function categoryClicked(event){
			var categoryId;
			for (var children = 0; children < this.childNodes.length; children++) {
				if (this.childNodes[children].attributes[0].value == "category-title") {
					categoryId = this.childNodes[children].textContent;
					break;
				}
			}
			
			topic.publish(CategoryTopics().GET_SUB_CATEGORIES, categoryId);
			
		}
	}
)

define(
	["dojo/dom",
	"dojo/topic",
	"dojo/on",
	"src/utils/CategoryTopics",
	"src/growersnation/categories/subcategories/model/SubCategoriesModel",
	"dojo/domReady!"],
	function(dom, topic, on, CategoryTopics, SubCategoriesModel){
		var handle = topic.subscribe(CategoryTopics().GET_SUB_CATEGORIES, getSubCategories);
		
		var categoryContent = dom.byId("category-content");
				
		function getSubCategories(categoryId) {

			// Instantiate the SubCategory Model:
			subCategoriesModel = new SubCategoriesModel();

			//**********************************************************************
			//Dirty hack for stub data
			var subCategories;
			if (categoryId == "Vegetables") {
				subCategories = subCategoriesModel.SubCategoriesVeg.objectStore.data;
			} else {
				subCategories = subCategoriesModel.SubCategoriesFruit.objectStore.data;
			}
			
			//**********************************************************************
			
			//**********TODO************//
			
			//Call out to service to get JSON for sub categories based on category selected
			//Parse data into model objects
			
			//Show data in right-hand panel
			var categoryTitle = '<h2>'+categoryId+' that can grow at your location:</h2>'
			var content  = '';
			
			for (var i = 0; i < subCategories.length; i++) {
				content += '<div class="category-item">';
				content += '<div class="category-id">'+subCategories[i].id+'</div>';
				content += '<div class="category-image"><img src="'+subCategories[i].img+'"/></div>';
				content += '<div class="category-title">'+subCategories[i].label+'</div>';
				content += '</div>';
			}
			
			dojo.html.set(categoryContent, categoryTitle+"<div id='categories'>"+content+"</div>");
			
			//Add events etc to allow clickable to go to sub-categories
			on.once(document, ".category-item:click", subCategoryClicked);
			showResetOption();
		}

		function showResetOption(){
			dom.byId("reset-app").style.display = "block";
		}
		
		function subCategoryClicked(event){
			var categoryId;
			for (var children = 0; children < this.childNodes.length; children++) {
				if (this.childNodes[children].attributes[0].value == "category-title") {
					categoryId = this.childNodes[children].textContent;
					break;
				}
			}
			topic.publish(CategoryTopics().GET_SUB_CATEGORY_ITEMS, categoryId);
		}
	}
)

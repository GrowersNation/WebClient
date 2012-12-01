define(
	["dojo/dom",
	"dojo/topic",
	"dojo/on",
	"src/utils/CategoryTopics",
	"src/growersnation/categories/subcategoryItems/model/SubCategoryItemModel",
	"dojo/domReady!"],
	function(dom, topic, on, CategoryTopics, SubCategoryItemModel){
		var handle = topic.subscribe(CategoryTopics().GET_SUB_CATEGORY_ITEMS, getSubCategoryItems);
		
		var categoryContent = dom.byId("category-content");
				
		function getSubCategoryItems(subCategoryId) {

			// Instantiate the SubCategory Model:
			subCategoryItemModel = new SubCategoryItemModel();

			
			//**********TODO************//
			
			//Call out to service to get JSON for sub categories based on category selected
			//Parse data into model objects
			
			
			subCategoryItems = subCategoryItemModel.SubCategoryItems.objectStore.data;
			
			//Show data in right-hand panel
			var categoryTitle = '<h2>'+subCategoryId+' that can grow at your location:</h2>'
			var content  = '';
			
			for (var i = 0; i < subCategoryItems.length; i++) {
				content += '<div class="category-item">';
				content += '<div class="category-id">'+subCategoryItems[i].id+'</div>';
				content += '<div class="category-image"><img src="'+subCategoryItems[i].img+'"/></div>';
				content += '<div class="category-title">'+subCategoryItems[i].label+'</div>';
				content += '</div>';
			}
			
			dojo.html.set(categoryContent, categoryTitle+"<div id='categories'>"+content+"</div>");
			
			//Add events etc to allow clickable to go to sub-categories
			on(document, ".category-item:click", categoryClicked);
			showResetOption();
		}

		function showResetOption(){
			dom.byId("reset-app").style.display = "block";
		}
		
		function categoryClicked(event){
			var categoryId;
			for (var children = 0; children < this.childNodes.length; children++) {
				if (this.childNodes[children].attributes[0].value == "category-id") {
					categoryId = this.childNodes[children].textContent;
					break;
				}
			}
			//topic.publish(CategoryTopics().GET_SUB_CATEGORIES, categoryId);
		}
	}
)

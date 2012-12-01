define(
	["dojo/dom",
	"dojo/topic",
	"dojo/on",
	"utils/CategoryTopics",
	"utils/GlobalTopics",
	"growersnation/categories/subcategoryItems/model/SubCategoryItemModel",
	"dojo/domReady!"],
	function(dom, topic, on, CategoryTopics, GlobalTopics, SubCategoryItemModel){
		var handle = topic.subscribe(CategoryTopics().GET_SUB_CATEGORY_ITEMS, getSubCategoryItems);
		var handle = topic.subscribe(GlobalTopics().REMOVE_LISTENERS, removeListeners);
		
		var categoryContent = dom.byId("category-content");
		var clickListener;
		
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
			clickListener = on(document, ".category-item:click", categoryClicked);
		}

		function removeListeners(){
			clickListener.remove();
		}
		
		function categoryClicked(event){
			
			var produceId;
			var produceImage;
			for (var children = 0; children < this.childNodes.length; children++) {
				if (this.childNodes[children].attributes[0].value == "category-title") {
					produceId = this.childNodes[children].textContent;
				}
				if (this.childNodes[children].attributes[0].value == "category-image") {
					produceImage = this.childNodes[children].childNodes[0].src;
				}
			}
			topic.publish(GlobalTopics().SHOW_GROWING_INFO_FOR_PRODUCE, produceId, produceImage);
		}
	}
)

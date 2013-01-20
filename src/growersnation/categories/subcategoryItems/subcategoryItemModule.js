define(
	["dojo/dom",
	"dojo/topic",
	"dojo/on",
	"gn/categories/topic/CategoryTopics",
	"utils/GlobalTopics",
	"gn/categories/subcategoryItems/model/SubCategoryItemModel",
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
			

			//**********************************************************************
			//Dirty hack for stub data
			
			var subCategoryItems;
			if (subCategoryId == "Berries") {
				subCategoryItems = subCategoryItemModel.SubCategoryBerries.objectStore.data;
			} else if (subCategoryId == "Citrus") {
				subCategoryItems = subCategoryItemModel.SubCategoryCitrus.objectStore.data;
			} else if (subCategoryId == "Core") {
				subCategoryItems = subCategoryItemModel.SubCategoryCore.objectStore.data;
			} else if (subCategoryId == "Melons") {
				subCategoryItems = subCategoryItemModel.SubCategoryMelons.objectStore.data;
			} else if (subCategoryId == "Pitted") {
				subCategoryItems = subCategoryItemModel.SubCategoryPitted.objectStore.data;
			} else if (subCategoryId == "Bulb Veg") {
				subCategoryItems = subCategoryItemModel.SubCategoryBulb.objectStore.data;
			} else if (subCategoryId == "Salad Greens") {
				subCategoryItems = subCategoryItemModel.SubCategoryLeaf.objectStore.data;
			} else if (subCategoryId == "Legumes") {
				subCategoryItems = subCategoryItemModel.SubCategoryLegumes.objectStore.data;
			} else if (subCategoryId == "Root Veg") {
				subCategoryItems = subCategoryItemModel.SubCategoryRoot.objectStore.data;
			} else {
				subCategoryItems = subCategoryItemModel.SubCategoryBerries.objectStore.data;
			}
			
			//**********************************************************************
			
			
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

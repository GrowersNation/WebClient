define(
	["dojo/dom",
	"dijit/registry",
	"dojo/topic",
	"dojo/on",
	"src/utils/GlobalTopics",
	"dojo/domReady!"],
	function(dom, registry, topic, on, GlobalTopics){
		var handle = topic.subscribe(GlobalTopics().SHOW_GROWING_INFO_FOR_PRODUCE, getGrowingInfo);
		
		var categoryContent = dom.byId("category-content");
				
		function getGrowingInfo(subCategoryId) {
			dom.byId("growingInfoView").innerHTML = "Growing info for " + subCategoryId;
			
			var growingTab = registry.byId("growingInfoView");
			var tabs = registry.byId("growersTabs");
			tabs.selectChild(growingTab);
		}

	}
)

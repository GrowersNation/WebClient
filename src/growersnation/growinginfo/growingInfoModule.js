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
			
			//TODO
			//Get data
			
			
			var monthDivs = '<div class="month-header-container">';
			for (var monthIndex = 0; monthIndex < 12; monthIndex++) {
				var monthName;
				if (monthIndex == 0) {
					monthName = 'Jan';
				} else if (monthIndex == 1) {
					monthName = 'Feb';
				} else if (monthIndex == 2) {
					monthName = 'Mar';
				} else if (monthIndex == 3) {
					monthName = 'Apr';
				} else if (monthIndex == 4) {
					monthName = 'May';
				} else if (monthIndex == 5) {
					monthName = 'Jun';
				} else if (monthIndex == 6) {
					monthName = 'Jul';
				} else if (monthIndex == 7) {
					monthName = 'Aug';
				} else if (monthIndex == 8) {
					monthName = 'Sep';
				} else if (monthIndex == 9) {
					monthName = 'Oct';
				} else if (monthIndex == 10) {
					monthName = 'Nov';
				} else if (monthIndex == 11) {
					monthName = 'Dec';
				}
				
				monthDivs += '<div class="month month-header">'+monthName+'</div>';
			}
			monthDivs += '</div>';
			
			var growDivs = '<div class="month-header-container">';
			for (var growIndex = 0; growIndex < 12; growIndex++) {
				if (growIndex > 2 && growIndex < 4) {
					growDivs += '<div class="month month-sow"></div>';
				} else if (growIndex > 3 && growIndex < 5) {
					growDivs += '<div class="month month-plant"></div>';
				} else if (growIndex > 4 && growIndex < 9) {
					growDivs += '<div class="month month-grow"></div>';
				} else if (growIndex > 8 && growIndex < 11) {
					growDivs += '<div class="month month-harvest"></div>';
				} else {
					growDivs += '<div class="month month-nothing"></div>';
				}
			}
			growDivs += '</div>';
			
			dom.byId("growingInfoView").innerHTML = "Growing info for " + subCategoryId + monthDivs + growDivs;
			
			
			var growingTab = registry.byId("growingInfoView");
			var tabs = registry.byId("growersTabs");
			tabs.selectChild(growingTab);
		}

	}
)

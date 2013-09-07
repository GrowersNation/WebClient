define(
	["dojo/dom",
	"dijit/registry",
	"dojo/topic",
	"dojo/on",
	"utils/GlobalTopics",
	"dojo/domReady!"],
	function(dom, registry, topic, on, GlobalTopics){
		var handle = topic.subscribe(GlobalTopics().SHOW_GROWING_INFO_FOR_PRODUCE, getGrowingInfo);
		
		var categoryContent = dom.byId("category-content");
				
		function getGrowingInfo(produceId, produceImage) {
			
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
			
			var randomMonth = Math.floor((Math.random()*5)+1);
			var randomDay = Math.floor((Math.random()*29)+1);
			
			var growDivs = '<div class="growing-produce">';
			growDivs += growingSection(new Date(2012, randomMonth, randomDay, 0, 0, 0, 0), new Date(2012, randomMonth+2, randomDay+10, 0, 0, 0, 0), 'sow');
			growDivs += growingSection(new Date(2012, randomMonth+2, randomDay+7, 0, 0, 0, 0), new Date(2012, randomMonth+3, randomDay, 0, 0, 0, 0), 'plant');
			growDivs += growingSection(new Date(2012, randomMonth+4, randomDay+20, 0, 0, 0, 0), new Date(2012, randomMonth+5, randomDay+3, 0, 0, 0, 0), 'harvest');
			growDivs += '</div>';
			
//
//			var wikiTipsButton = new Button(
//					{label: "View wiki tips",
//					title: "View wiki tips",
//					checked: false,
//					onClick: getCategoriesForLocation},
//					"yes"
//				);
//				yesButton.style.visibility = "hidden";
//				yesButton.startup();
//			
			
			dom.byId("growingInfoView").innerHTML = "<div class='growing-info'><img src='"+produceImage+"'/><h3>Growing info for " + produceId + "</h3></div>" + monthDivs + growDivs;
			
			
			var growingTab = registry.byId("growingInfoView");
			var tabs = registry.byId("growersTabs");
			tabs.selectChild(growingTab);
		}

		function growingSection(startDate, endDate, growingType) {
			var today = new Date();
			var daysInYear = 365;
			var firstDateOfYear = new Date(today.getFullYear(), 0, 1);
			var dayOfStart = Math.round(((startDate - firstDateOfYear) / 1000 / 60 / 60 / 24) + .5, 0);
			var startPercentage = (dayOfStart / daysInYear)*100;
			
			var dayOfEnd = Math.round(((endDate - firstDateOfYear) / 1000 / 60 / 60 / 24) + .5, 0);
			var endPercentage = ((dayOfEnd - dayOfStart) / daysInYear)*100;
			
			var growDivs = '<div class="growing-bar">';
			growDivs += '<div style="float:left;width:'+startPercentage+'%;">&nbsp;</div>';
			
			growDivs += '<div class="growing-section '+growingType+'" style="width:'+endPercentage+'%;">&nbsp;</div>';

			growDivs += '</div>';
			
			return growDivs;
		}
	}
);

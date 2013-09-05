define(["gn/responsive/crop/GetCropForLocationCommand",
		"gn/responsive/location/topic/MyLocationTopic",
		"dojo/topic",
		"dijit/Destroyable",
		"dojo/_base/declare"],
	
	function(GetCropForLocationCommand,
			 MyLocationTopic,
			 topic,
			 Destroyable,
			 declare){
		
		return declare([Destroyable], {
			
			constructor: function(){
				this.own(topic.subscribe(MyLocationTopic.GET_CROPS_FOR_LOCATION(), GetCropForLocationCommand.execute));
			}
			
		});
				 	
	}
	
)

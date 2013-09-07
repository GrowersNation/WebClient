define(["gn/responsive/location/widget/MyLocation",
		"dojo/_base/declare",
		"dojo/domReady!"],
	
	function(MyLocation,
			 declare){
		
		return declare([],{
			constructor: function(){
				var myLocation = new MyLocation({});
				myLocation.placeAt("myLocationNode");
				myLocation.startup();
			}
		});
		
	}
);

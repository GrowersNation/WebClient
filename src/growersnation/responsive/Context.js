define(
	["dojo/_base/declare",
	 "gn/responsive/location/MyLocation"],
	
	function (declare,
			  MyLocation){
		return declare(null, {
			constructor: function(){
				new MyLocation({}, "main").startup();
			}
		});
	}
)

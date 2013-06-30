define(
	["dojo/_base/declare",
	 "gn/responsive/Bootstrap"],
	
	function (declare,
			  Bootstrap){
			  	
		return declare(null, {
			constructor: function(){
				new Bootstrap();
			}
		});
	}
)

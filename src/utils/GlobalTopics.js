define([
    "dojo/_base/declare"
],
    function(declare){

		// module: 
		// 		meto/utils/CategoryTopics

        return declare(null, {
			
			// summary:
			// 		Defines constants for use as topic channel names. These are 'global' topics which any widget 
			//		can subscribe to. Local topics should simply use Strings within that class, so they don't get
			//		used globally. 
			// 		NB. According to the Dojo style guide, these should really be defined within an object, 
			//		but that seems unnecessary as the sole purpose of this class is to define the constants. 
			
			RESET_APP: "growersnation/reset/app",
			SHOW_GROWING_INFO_FOR_PRODUCE: "growersnation/show/produce"
				
		});
		

});
	

define([
    "dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/store/Memory",
	"dojo/data/ObjectStore",
    "dojo/topic"
],
    function(declare, lang, Memory, ObjectStore, topic){

		// module: 
		// 		growersnation/categories/model/CategoriesModel

        return declare(null, {
			// summary: 
			//		The Categories model class, which stores the SiteCategories data

			// Categories: ObjectStore
			//		Stores the object containing the site information used by the Select list
        	Categories: null,

			constructor: function() {
				// summary:
				// 		Initialises the model. Sets up event listeners.  
				// tags:
				//		public

                // TODO: Get this data from a data feed containing all the site config info

				this.Categories = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Fruits", img: "assets/images/produce/fruit.jpg" },
							{ id: "2", label: "Vegetables", img: "assets/images/produce/veg.jpg" },
							{ id: "3", label: "Grains", img: "assets/images/produce/grains.jpg" },
							{ id: "4", label: "Herbs", img: "assets/images/produce/herbs.jpg" },
							{ id: "5", label: "Other", img: "assets/images/produce/nuts.jpg" }
						]
					})		
				});

                // TODO: Listen for a successful response from the site list service call

				// TODO: Instantiate the site list service:
				
			},
			
			getCategories: function() {
				// summary: 
				//		Returns the Categories data.
				// tags:
				//		public
				
				return this.Categories; /* ObjectStore */
				
			}

	});

});
		
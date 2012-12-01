define([
    "dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/store/Memory",
	"dojo/data/ObjectStore",
    "dojo/topic"
],
    function(declare, lang, Memory, ObjectStore, topic){

		// module: 
		// 		growersnation/categories/subcategories/model/SubCategoriesModel

        return declare(null, {
			// summary: 
			//		The SubCategories model class, which stores the SiteSubCategories data

			// subCategories: ObjectStore
			//		Stores the object containing the site information used by the Select list
        	SubCategoryItems: null,

			constructor: function() {
				// summary:
				// 		Initialises the model. Sets up event listeners.  
				// tags:
				//		public

                // TODO: Get this data from a data feed containing all the site config info

				this.SubCategoryItems = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Strawberries", img: "http://www.gyoveg.com/images/organic50x50.jpg" },
							{ id: "2", label: "Blueberries", img: "http://www.gyoveg.com/images/organic50x50.jpg" },
							{ id: "3", label: "Gooseberries", img: "http://www.gyoveg.com/images/organic50x50.jpg" },
							{ id: "4", label: "Blackberries", img: "http://www.gyoveg.com/images/organic50x50.jpg" }
						]
					})		
				});
				

                // TODO: Listen for a successful response from the site list service call

				// TODO: Instantiate the site list service:
				
			},
			
			getSubCategoryItems: function() {
				// summary: 
				//		Returns the SubCategoryItems data.
				// tags:
				//		public
				
				return this.SubCategoryItems; /* ObjectStore */
				
			}

	});

});
		
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
        	SubCategoriesFruit: null,
        	SubCategoriesVeg: null,
        	SubCategoriesGrains: null,

			constructor: function() {
				// summary:
				// 		Initialises the model. Sets up event listeners.  
				// tags:
				//		public

                // TODO: Get this data from a data feed containing all the site config info

				this.SubCategoriesFruit = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Berries", img: "assets/images/produce/berries.jpg" },
							{ id: "2", label: "Citrus", img: "assets/images/produce/citrus.jpg" },
							{ id: "3", label: "Core", img: "assets/images/produce/core.jpg"},
							{ id: "4", label: "Melons", img: "assets/images/produce/melons.jpg" },
							{ id: "5", label: "Pitted", img: "assets/images/produce/pitted.jpg" }
						]
					})		
				});
				
				this.SubCategoriesVeg = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Root Veg", img: "assets/images/produce/root.jpg" },
							{ id: "2", label: "Salad Greens", img: "assets/images/produce/leaf.jpg" },
							{ id: "3", label: "Stalk Veg", img: "assets/images/produce/stalk.jpg" },
							{ id: "4", label: "Legumes", img: "assets/images/produce/legumes.jpg" }
						]
					})		
				});

				this.SubCategoriesGrains = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Cereal", img: "assets/images/produce/cereal.jpg" },
							{ id: "2", label: "Grass", img: "assets/images/produce/grass.jpg" },
							{ id: "3", label: "Millets", img: "assets/images/produce/millets.jpg" }
						]
					})		
				});
                // TODO: Listen for a successful response from the site list service call

				// TODO: Instantiate the site list service:
				
			},
			
			getSubCategories: function() {
				// summary: 
				//		Returns the SubCategories data.
				// tags:
				//		public
				
				return this.SubCategories; /* ObjectStore */
				
			}

	});

});
		
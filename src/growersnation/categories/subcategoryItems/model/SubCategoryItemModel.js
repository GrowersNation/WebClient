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

        	SubCategoryBerries: null,
			SubCategoryCitrus: null,
			SubCategoryCore: null,
			SubCategoryMelons: null,
			SubCategoryPitted: null,
			SubCategoryBulb: null,
			SubCategoryLeaf: null,
			SubCategoryLegumes: null,
			SubCategoryRoot: null,
			
			constructor: function() {
				// summary:
				// 		Initialises the model. Sets up event listeners.  
				// tags:
				//		public

                // TODO: Get this data from a data feed containing all the site config info

	
				this.SubCategoryBerries = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Bilberries", img: "assets/images/produce/items/bilberry.jpg" },
							{ id: "2", label: "Blackberries", img: "assets/images/produce/items/blackberry.jpg" },
							{ id: "3", label: "Blueberries", img: "assets/images/produce/items/blueberry.jpg" },
							{ id: "4", label: "Boysenberries", img: "assets/images/produce/items/boysenberry.jpg" },						
							{ id: "5", label: "Cranberries", img: "assets/images/produce/items/cranberries.jpg" },
							{ id: "6", label: "Currants", img: "assets/images/produce/items/currants.jpg" },
							{ id: "7", label: "Gooseberries", img: "assets/images/produce/items/gooseberries.jpg" },												
							{ id: "8", label: "Grapes", img: "assets/images/produce/items/grapes.jpg" },
							{ id: "9", label: "Huckleberries", img: "assets/images/produce/items/huckleberries.jpg" },
							{ id: "10", label: "Raspberries", img: "assets/images/produce/items/raspberries.jpg" },
							{ id: "11", label: "Red berries", img: "assets/images/produce/items/redberries.jpg" },
							{ id: "12", label: "Strawberries", img: "assets/images/produce/items/strawberries.jpg" }
						]
					})		
				});
				
				this.SubCategoryCitrus = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Clementines", img: "assets/images/produce/items/clementines.jpg" },
							{ id: "2", label: "Grapefruit", img: "assets/images/produce/items/grapefruit.jpg" },
							{ id: "3", label: "Kumquat", img: "assets/images/produce/items/kumquat.jpg" },
							{ id: "4", label: "Lemon", img: "assets/images/produce/items/lemon.jpg" },						
							{ id: "5", label: "Lime", img: "assets/images/produce/items/lime.jpg" },
							{ id: "6", label: "Mandarin", img: "assets/images/produce/items/mandarin.jpg" },
							{ id: "7", label: "Minneola", img: "assets/images/produce/items/minneola.jpg" },
							{ id: "8", label: "Orange", img: "assets/images/produce/items/orange.jpg" },												
							{ id: "9", label: "Pummelo", img: "assets/images/produce/items/pummelo.jpg" },
							{ id: "10", label: "Satsuma", img: "assets/images/produce/items/satsuma.jpg" },
							{ id: "11", label: "Tangerine", img: "assets/images/produce/items/tangerine.jpg" },
							{ id: "12", label: "Tangelo", img: "assets/images/produce/items/tangelo.jpg" },
							{ id: "13", label: "Ugli", img: "assets/images/produce/items/ugli.jpg" }
						]
					})		
				});
	
				this.SubCategoryCore = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Apples", img: "assets/images/produce/items/apples.jpg" },
						]
					})		
				});
	
				this.SubCategoryMelons = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Canary", img: "assets/images/produce/items/canary.jpg" },
							{ id: "2", label: "Cantaloupe", img: "assets/images/produce/items/cantaloupe.jpg" },
							{ id: "3", label: "Casaba", img: "assets/images/produce/items/casaba.jpg" },
							{ id: "4", label: "Charentais", img: "assets/images/produce/items/charentais.jpg" },						
							{ id: "5", label: "Christmas", img: "assets/images/produce/items/christmas.jpg" },
							{ id: "6", label: "Crenshaw", img: "assets/images/produce/items/crenshaw.jpg" },
							{ id: "7", label: "Galia", img: "assets/images/produce/items/galia.jpg" },
							{ id: "8", label: "Honeydew", img: "assets/images/produce/items/honeydew.jpg" },												
							{ id: "9", label: "Ogen", img: "assets/images/produce/items/ogen.jpg" },
							{ id: "10", label: "Persian", img: "assets/images/produce/items/persian.jpg" },
							{ id: "11", label: "Sharlyn", img: "assets/images/produce/items/sharlyn.jpg" },
							{ id: "12", label: "Watermelon", img: "assets/images/produce/items/watermelon.jpg" }
						]
					})		
				});
				
				this.SubCategoryPitted = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Apricots", img: "assets/images/produce/items/apricots.jpg" },
							{ id: "2", label: "Avocados", img: "assets/images/produce/items/avocados.jpg" },
							{ id: "3", label: "Cherries", img: "assets/images/produce/items/cherries.jpg" },
							{ id: "4", label: "Nectarines", img: "assets/images/produce/items/nectarines.jpg" },						
							{ id: "5", label: "Peaches", img: "assets/images/produce/items/peaches.jpg" },
							{ id: "6", label: "Plums", img: "assets/images/produce/items/plums.jpg" }
						]
					})		
				});	
	
				this.SubCategoryBulb = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Asparagus", img: "assets/images/produce/items/asparagus.jpg" },
							{ id: "2", label: "Celery", img: "assets/images/produce/items/celery.jpg" },
							{ id: "3", label: "Fennel", img: "assets/images/produce/items/fennel.jpg" },
							{ id: "4", label: "Garlic", img: "assets/images/produce/items/garlic.jpg" },						
							{ id: "5", label: "Leeks", img: "assets/images/produce/items/leeks.jpg" },
							{ id: "6", label: "Onions", img: "assets/images/produce/items/onions.jpg" },
							{ id: "5", label: "Shallots", img: "assets/images/produce/items/shallots.jpg" },
							{ id: "6", label: "Spring onions", img: "assets/images/produce/items/spring_onions.jpg" }
						]
					})		
				});
				
				this.SubCategoryLeaf = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Brocolli", img: "assets/images/produce/items/brocolli.jpg" },
							{ id: "2", label: "Brussell Sprouts", img: "assets/images/produce/items/brussel_sprouts.jpg" },
							{ id: "3", label: "Cabbage", img: "assets/images/produce/items/cabbage.jpg" },
							{ id: "4", label: "Cauliflower", img: "assets/images/produce/items/cauliflower.jpg" },						
							{ id: "5", label: "Cress", img: "assets/images/produce/items/cress.jpg" },
							{ id: "6", label: "Kale", img: "assets/images/produce/items/kale.jpg" },
							{ id: "7", label: "Lettuce", img: "assets/images/produce/items/lettuce.jpg" },
							{ id: "8", label: "Spinach", img: "assets/images/produce/items/spinach.jpg" }
						]
					})		
				});
				
				this.SubCategoryLegumes = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Beans", img: "assets/images/produce/items/beans.jpg" },
							{ id: "2", label: "Lentils", img: "assets/images/produce/items/lentils.jpg" },
							{ id: "3", label: "Peas", img: "assets/images/produce/items/peas.jpg" }
						]
					})		
				});
	
				this.SubCategoryRoot = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Burdock", img: "assets/images/produce/items/burdock.jpg" },
							{ id: "2", label: "Carrot", img: "assets/images/produce/items/carrot.jpg" },
							{ id: "3", label: "Casava", img: "assets/images/produce/items/casava.jpg" },
							{ id: "4", label: "Celeraic", img: "assets/images/produce/items/celeraic.jpg" },
							{ id: "5", label: "Daikon", img: "assets/images/produce/items/daikon.jpg" },
							{ id: "6", label: "Ginger", img: "assets/images/produce/items/ginger.jpg" },
							{ id: "7", label: "Parsnip", img: "assets/images/produce/items/parsnip.jpg" },
							{ id: "8", label: "Potatoes", img: "assets/images/produce/items/potatoes.jpg" },
							{ id: "9", label: "Radish", img: "assets/images/produce/items/radish.jpg" },
							{ id: "10", label: "Turnip", img: "assets/images/produce/items/turnip.jpg" },
							{ id: "11", label: "Yam", img: "assets/images/produce/items/yam.jpg" },
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
		
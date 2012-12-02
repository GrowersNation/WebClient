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
							{ id: "1", label: "Bilberries", img: "images/bilberry.jpg" },
							{ id: "2", label: "Blackberries", img: "images/blackberry.jpg" },
							{ id: "3", label: "Blueberries", img: "images/blueberry.jpg" },
							{ id: "4", label: "Boysenberries", img: "images/boysenberry.jpg" },						
							{ id: "5", label: "Cranberries", img: "images/cranberries.jpg" },
							{ id: "6", label: "Currants", img: "images/currants.jpg" },
							{ id: "7", label: "Gooseberries", img: "images/gooseberries.jpg" },												
							{ id: "8", label: "Grapes", img: "images/grapes.jpg" },
							{ id: "9", label: "Huckleberries", img: "images/huckleberries.jpg" },
							{ id: "10", label: "Raspberries", img: "images/raspberries.jpg" },
							{ id: "11", label: "Red berries", img: "images/redberries.jpg" },
							{ id: "12", label: "Strawberries", img: "images/strawberries.jpg" }
						]
					})		
				});
				
				this.SubCategoryCitrus = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Clementines", img: "images/clementines.jpg" },
							{ id: "2", label: "Grapefruit", img: "images/grapefruit.jpg" },
							{ id: "3", label: "Kumquat", img: "images/kumquat.jpg" },
							{ id: "4", label: "Lemon", img: "images/lemon.jpg" },						
							{ id: "5", label: "Lime", img: "images/lime.jpg" },
							{ id: "6", label: "Mandarin", img: "images/mandarin.jpg" },
							{ id: "7", label: "Minneola", img: "images/minneola.jpg" },
							{ id: "8", label: "Orange", img: "images/orange.jpg" },												
							{ id: "9", label: "Pummelo", img: "images/pummelo.jpg" },
							{ id: "10", label: "Satsuma", img: "images/satsuma.jpg" },
							{ id: "11", label: "Tangerine", img: "images/tangerine.jpg" },
							{ id: "12", label: "Tangelo", img: "images/tangelo.jpg" },
							{ id: "13", label: "Ugli", img: "images/ugli.jpg" }
						]
					})		
				});
	
				this.SubCategoryCore = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Apples", img: "images/apples.jpg" },
						]
					})		
				});
	
				this.SubCategoryMelons = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Canary", img: "images/canary.jpg" },
							{ id: "2", label: "Cantaloupe", img: "images/cantaloupe.jpg" },
							{ id: "3", label: "Casaba", img: "images/casaba.jpg" },
							{ id: "4", label: "Charentais", img: "images/charentais.jpg" },						
							{ id: "5", label: "Christmas", img: "images/christmas.jpg" },
							{ id: "6", label: "Crenshaw", img: "images/crenshaw.jpg" },
							{ id: "7", label: "Galia", img: "images/galia.jpg" },
							{ id: "8", label: "Honeydew", img: "images/honeydew.jpg" },												
							{ id: "9", label: "Ogen", img: "images/ogen.jpg" },
							{ id: "10", label: "Persian", img: "images/persian.jpg" },
							{ id: "11", label: "Sharlyn", img: "images/sharlyn.jpg" },
							{ id: "12", label: "Watermelon", img: "images/watermelon.jpg" }
						]
					})		
				});
				
				this.SubCategoryPitted = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Apricots", img: "images/apricots.jpg" },
							{ id: "2", label: "Avocados", img: "images/avocados.jpg" },
							{ id: "3", label: "Cherries", img: "images/cherries.jpg" },
							{ id: "4", label: "Nectarines", img: "images/nectarines.jpg" },						
							{ id: "5", label: "Peaches", img: "images/peaches.jpg" },
							{ id: "6", label: "Plums", img: "images/plums.jpg" }
						]
					})		
				});	
	
				this.SubCategoryBulb = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Asparagus", img: "images/asparagus.jpg" },
							{ id: "2", label: "Celery", img: "images/celery.jpg" },
							{ id: "3", label: "Fennel", img: "images/fennel.jpg" },
							{ id: "4", label: "Garlic", img: "images/garlic.jpg" },						
							{ id: "5", label: "Leeks", img: "images/leeks.jpg" },
							{ id: "6", label: "Onions", img: "images/onions.jpg" },
							{ id: "5", label: "Shallots", img: "images/shallots.jpg" },
							{ id: "6", label: "Spring onions", img: "images/spring_onions.jpg" }
						]
					})		
				});
				
				this.SubCategoryLeaf = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Brocolli", img: "images/brocolli.jpg" },
							{ id: "2", label: "Brussell Sprouts", img: "images/brussel_sprouts.jpg" },
							{ id: "3", label: "Cabbage", img: "images/cabbage.jpg" },
							{ id: "4", label: "Cauliflower", img: "images/cauliflower.jpg" },						
							{ id: "5", label: "Cress", img: "images/cress.jpg" },
							{ id: "6", label: "Kale", img: "images/kale.jpg" },
							{ id: "7", label: "Lettuce", img: "images/lettuce.jpg" },
							{ id: "8", label: "Spinach", img: "images/spinach.jpg" }
						]
					})		
				});
				
				this.SubCategoryLegumes = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Beans", img: "images/beans.jpg" },
							{ id: "2", label: "Lentils", img: "images/lentils.jpg" },
							{ id: "3", label: "Peas", img: "images/peas.jpg" }
						]
					})		
				});
	
				this.SubCategoryRoot = new ObjectStore({
					objectStore: new Memory({ 
						data: [
							{ id: "1", label: "Burdock", img: "images/burdock.jpg" },
							{ id: "2", label: "Carrot", img: "images/carrot.jpg" },
							{ id: "3", label: "Casava", img: "images/casava.jpg" },
							{ id: "4", label: "Celeraic", img: "images/celeraic.jpg" },
							{ id: "5", label: "Daikon", img: "images/daikon.jpg" },
							{ id: "6", label: "Ginger", img: "images/ginger.jpg" },
							{ id: "7", label: "Parsnip", img: "images/parsnip.jpg" },
							{ id: "8", label: "Potatoes", img: "images/potatoes.jpg" },
							{ id: "9", label: "Radish", img: "images/radish.jpg" },
							{ id: "10", label: "Turnip", img: "images/turnip.jpg" },
							{ id: "11", label: "Yam", img: "images/yam.jpg" },
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
		
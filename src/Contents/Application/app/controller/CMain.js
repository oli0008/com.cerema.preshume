App.controller.define('CMain', {

	views: [
		"VMain"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			},
			"button#clickme": {
				click: "clickme_onclick"
			}
		});
		
		App.init('VMain',this.onLoad);
		
	},
	Menu_onClick: function(p)
	{
		if (p.itemId) {
			if (p.itemId=="MNU_NEW") alert('clic sur MNU_NEW');
		};			
	},
	clickme_onclick: function()

	{
		function async_addition(a,b,retour) {
			retour(a+b);
		}
		var total=0;
		function calcul(i,cb) {
			async_addition(2,i,function(e) {
				total+=e;
				console.log('total= ' + total);	//résultat==> total= 2,5,9,14,20
				if (i<=3) calcul(i+1,cb); else cb(total);
			});
		};

		calcul(0,function(reponse) {
			console.log('reponse= ' + reponse);	
		});		//résultat==> reponse= 20 --- Ok
		
/*3
			funtion grand2(reponse){
				console.log('reponse1= ' + reponse);
			};
				calcul(0,function grand2(reponse));
				console.log('reponse2= ' + reponse);		//résultat==> reponse= 20   ---NOK
*/

	},

	
/*2
	{
		function async_addition(a,b,fonction_retour) {
			fonction_retour(a+b);
			// return a+b
		}

		var total=0;
		function calcul(i,cb) {
			async_addition(3,i,function(e) {
				total+=e;
			
				if (i<=3) {
					console.log(total);
					calcul(i+1,cb);	
				} else cb(total);
			});
		};

		calcul(0,function(reponse) {
			console.log(reponse);	
		});
	},
*/
/*1	
	{
		// on charge le store avec une variable "recherche"
		App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
		// on rafraichit le store
		App.get('grid#grid1').getStore().load();
	},
	*/
	onLoad: function()
	{
		// form loaded	
		//App.get('textfield#text1').setValue('bonjour');
	}
	
	
});

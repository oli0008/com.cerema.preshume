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
			if (p.itemId=="mnuPresent") 
				alert('clic sur mnuPresent -- TODO');
			else if (p.itemId=="mnuFuture") 
				alert('clic sur mnuFuture -- TODO');
		};			
	},
	clickme_onclick: function()
	
	{
		// on charge le store avec une variable "recherche"
		App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
		// on rafraichit le store
		App.get('grid#grid1').getStore().load();
	},

	onLoad: function()
	{
		// form loaded	
		//App.get('textfield#text1').setValue('bonjour');
	}
	
	
});

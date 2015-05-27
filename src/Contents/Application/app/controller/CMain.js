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
			"combo#cboEtablis": {
				select: "valider_cboUnite"
			},
			"combo#cboUnite": {
				select: "valider_cboService"
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
	
	//Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
	valider_cboUnite: function(p, record) {
		var kets = App.get('combo#cboEtablis').getValue();
		App.get('combo#cboUnite').setValue('');
		App.get('combo#cboUnite').getStore().getProxy().extraParams.id_Etablis = kets;
		App.get('combo#cboUnite').getStore().load();
	},
	
	//Sélectionner une unité affiche le service correspondant (cela active le store du service)
	valider_cboService: function(p, record) {
		var kets = App.get('combo#cboUnite').getValue();
		App.get('combo#cboService').setValue('');
		App.get('combo#cboService').getStore().getProxy().extraParams.id_Service = kuni;
		App.get('combo#cboService').getStore().load();
	},
	
	clickme_onclick: function()
	{
		//on passe la valeur sélectionnée dans cboEtablis comme argument à la requette pour charger cboUnite
		//App.get('combo#cboUnite').getStore().getProxy().extraParams.recherche = App.get('combo#cboEtablis').getValue();
		
		
		//on passe la valeur sélectionnée dans cboUnite comme argument à la requette pour charger cboService
		//App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboUnite').getValue();
		
		//
		
		// on charge le store avec une variable "recherche"
		App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
		// on rafraichit le store
		App.get('grid#grid1').getStore().load();
		
		/*
			//combo logic here
			// **************************************************************** 
			Selection Logique des combos
			E	U 	S 	
			0	0	0	tous les établissements
			1	0	0	par établissements
			1	1	0	par unité
			1	1 	1 	par service

			// ****************************************************************
		*/
	},

	onLoad: function()
	{
		// form loaded	
		//App.get('textfield#text1').setValue('bonjour');
	}
	
	
});

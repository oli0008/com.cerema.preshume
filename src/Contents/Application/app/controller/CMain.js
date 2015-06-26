/**************************************************
*
*	Controlleur principal
*
*	Fonction: Gérer sa fenêtre et ces événements. Le controlleur principal gére aussi les fenêtres secondaires. 
*
**************************************************/

/******************
* Déclaration des constantes globales à l'application
******************/
//nok	var G_BASE_DONNEES = 'bpclight';	//base de données de l'application


/******************
* Déclaration des variables globales à l'application
******************/
// var VAgent_label_width = 	350;
// var VAgent_width = 			350;

//var re = new RegExp ("[0-9]{5}");	//("#[0-9]{5}#");


App.controller.define('CMain', {

	views: [
		"VMain"
/* 		,
		"main.VAgent" */
/* 		,
		"main.VContratTravail" */
	],
	
	models: [
	],
	
	init: function()
	{
		//declaration des évenements
		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			},
			"combo#cboMainEtablis": {
				select: "valider_cboMainUnite"
			},
			"combo#cboMainUnite": {
				select: "valider_cboMainService"
			},
			"button#btnMainOk": {
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
			else if (p.itemId=="mnuModAgent") {
			//	alert('clic sur mnuModAgent -- TODO');	
				this.open_window_agent();
			}
/* TODO -- temp fix */			
						else if (p.itemId=="mnuFutureXXX") {
			//	alert('clic sur mnuModAgent -- TODO');	
				this.open_window_contrat_travail();
			}
		};			
	},
	
	//Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
	valider_cboMainUnite: function(p, record) 
	{
		var Kets2 = App.get('combo#cboMainEtablis').getValue();
//		console.log(App.get('combo#cboMainEtablis').getValue());
		//Efface les infos montrées (displayField) sur les 2 combos esclaves
		App.get('combo#cboMainUnite').setValue('');
		App.get('combo#cboMainService').setValue('');
		App.get('combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = Kets2;
		App.get('combo#cboMainUnite').getStore().load();
	},
	
	//Sélectionner une unité affiche le service correspondant (cela active le store du service)
	valider_cboMainService: function(p, record) 
	{
		var Kuni2 = App.get('combo#cboMainUnite').getValue();
//		console.log(App.get('combo#cboMainUnite').getValue());
		//Efface l'info montrée (displayField) sur le combo esclave
		App.get('combo#cboMainService').setValue('');
		App.get('combo#cboMainService').getStore().getProxy().extraParams.id_Service = Kuni2;
		App.get('combo#cboMainService').getStore().load();
	},
	
	clickme_onclick: function()
	{
		//on passe la valeur sélectionnée dans cboMainEtablis comme argument à la requette pour charger cboMainUnite
		//App.get('combo#cboMainUnite').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainEtablis').getValue();
		
		
		//on passe la valeur sélectionnée dans cboMainUnite comme argument à la requette pour charger cboMainService
		//App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainUnite').getValue();
		
		//
		
		// on charge le store avec une variable "recherche"
		tempVar = 1;
//		console.log('** HERE **');
	//	App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
		//Passe un parametre au Store 
		App.get('grid#gridTotalsPresent').getStore().getProxy().extraParams.param_recherche='11';
		// on rafraichit le store
		App.get('grid#gridTotalsPresent').getStore().load();
		
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
//***********
	
	open_window_agent: function()
	{
		App.view.create('main.VAgent',{			
			modal:true
		}).show();
	},
	
	open_window_contrat_travail: function()
	{
		App.view.create('main.VContratTravail',{			
			modal:true
		}).show();		
	},
//****************
	onLoad: function()
	{
		// form loaded	
		//App.get('textfield#text1').setValue('bonjour');
	}
	
	
});

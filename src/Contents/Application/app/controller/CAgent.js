App.controller.define('CAgent', {
	views: [		
		"main.VAgent",
	],	
	models: [
	],	
	init: function()
	{
alert('CAgent.init()');
		
		//declaration des évenements
		this.control({
			"combo#cboMainEtablis": {
				select: "valider_cboMainUnite"
			},
			"combo#cboMainUnite": {
				select: "valider_cboMainService"
			},
 			
			"combo#cboAgentDomaine": {
				select: "valider_cboAgentThematique"
			},
/*			
			"button#btnMainOk": {
				click: "clickme_onclick"
			},			
			
		//	"combo#cboAgentThematique": {
		//		select: "valider_cboAgentThematique"
			},
			
			
			"button#btnSupprAgent": {
				click: "btnSupprAgent_onclick"
			},
			"button#btnModifAgent": {
				click: "btnModifAgent_onclick"
			},
			"button#btnAjoutAgent": {
				click: "btnAjoutAgent_onclick"
			},
			"grid#gridAgents": {
				itemclick: "gridAgents_onclick"
			}, */
		});				
	},
	
	
	
	
	
	
	
	
	//----------------------------------------------	
	// OLD stuff
	//----------------------------------------------
	//Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
//	valider_cboMainUnite: function(p, record) {
	valider_cboAgentThematique: function(p, record) 
	{
		alert('select sur cboAgentDomaine interv');
		
		var id_domaine2 = App.get('combo#cboAgentDomaine').getValue();
		console.log(App.get('combo#cboAgentDomaine').getValue());
		//Efface les infos montrées (displayField) sur les 2 combos
		App.get('combo#cboAgentThematique').setValue('');
	//	App.get('combo#cboMainService').setValue('');
		App.get('combo#cboAgentThematique').getStore().getProxy().extraParams.id_domaine = id_domaine2;
		App.get('combo#cboAgentThematique').getStore().load();
//	},
	},
	
	//---------------------------------------------
	gridAgents_onclick: function( item, record) //, item, index, e, eOpts )
	{
		App.get('textfield#nomAgent').setValue(record.data.nom);
		App.get('textfield#prenomAgent').setValue(record.data.prenom);
		App.get('textfield#idAgent').setValue(record.data.kage);
	},
	//---------------------------------------------
	btnSupprAgent_onclick: function()
	{
		var id = App.get('textfield#idAgent').getValue();
		if (id) {
			var obj = {
				matri	: id,
			};
			App.Agents.delete(obj, function(result) {
				App.get('grid#gridAgents').getStore().load();
				App.get('textfield#nomAgent').setValue('');
				App.get('textfield#prenomAgent').setValue('');
				App.get('textfield#idAgent').setValue('');
			});
		}
	},
	//---------------------------------------------
	btnModifAgent_onclick: function()
	{
		var id = App.get('textfield#idAgent').getValue();
		if (id) {
			var obj = {
				matri 	: id,
				nom		: App.get('textfield#nomAgent').getValue(),
				prenom	: App.get('textfield#prenomAgent').getValue(),
			};
			App.Agents.update(obj, function(result) {
				App.get('grid#gridAgents').getStore().load();
			});
		}
	},
	//---------------------------------------------
	btnAjoutAgent_onclick: function()
	{
		var obj = {
				nom		: App.get('textfield#nomAgent').getValue(),
				prenom	: App.get('textfield#prenomAgent').getValue(),
			};
		console.log(obj);
		App.Agents.create(obj, function(result) {
			App.get('grid#gridAgents').getStore().load();
		});
		
	},
	//---------------------------------------------
	onLoad: function()
	{
				alert('CAgent.onLoad()');
		// form loaded	
		Ext.tip.QuickTipManager.init(); // lance de quicktip manager (pour les bulles d'aide)
	}
	
	
});

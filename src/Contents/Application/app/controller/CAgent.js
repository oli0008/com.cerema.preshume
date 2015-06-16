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
			"combo#cboAgentEtablis": {
				select: "valider_cboAgentUnite"
			},
			"combo#cboAgentUnite": {
				select: "valider_cboAgentService"
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
	
	//Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
	valider_cboAgentUnite: function(p, record) 
//	valider_cboMainUnite: function(p, record) 
	{
		var KetsTemp = App.get('combo#cboAgentEtablis').getValue();
		console.log(App.get('combo#cboAgentEtablis').getValue());
		//Efface les infos montrées (displayField) sur les 2 combos esclaves
		App.get('combo#cboAgentUnite').setValue('');
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
		App.get('combo#cboAgentUnite').getStore().load();
	},
	
	//Sélectionner une unité affiche le service correspondant (cela active le store du service)
	valider_cboAgentService: function(p, record) 
	{
		var KuniTemp = App.get('combo#cboAgentUnite').getValue();
		console.log(App.get('combo#cboAgentUnite').getValue());
		//Efface l'info montrée (displayField) sur le combo
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentService').getStore().getProxy().extraParams.id_Service = KuniTemp;
		App.get('combo#cboAgentService').getStore().load();
	},
		
	
	
	
	
	
	

	//Sélectionner un domaine d'intervention affiche la thématique correspondante (cela active le store de l'unité)
	valider_cboAgentThematique: function(p, record) 
	{
		alert('select sur cboAgentDomaine interv');
		
		var id_domaineTemp = App.get('combo#cboAgentDomaine').getValue();
		console.log(App.get('combo#cboAgentDomaine').getValue());
		//Efface les infos montrées (displayField) sur le combo esclave
		App.get('combo#cboAgentThematique').setValue('');
		App.get('combo#cboAgentThematique').getStore().getProxy().extraParams.id_domaine = id_domaineTemp;
		App.get('combo#cboAgentThematique').getStore().load();
	},

	
	//----------------------------------------------	
	// OLD stuff
	//----------------------------------------------	
	
	
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

App.controller.define('CAgent', {
	views: [		
		"main.VAgent",
	],	
	models: [
	],	
	init: function()
	{
alert('CAgent.init()');
		this.control({
			"combo#cboMainEtablis": {
				select: "valider_cboMainUnite"
			},
			"combo#cboMainUnite": {
				select: "valider_cboMainService"
			},
/* 			
			
			"button#btnMainOk": {
				click: "clickme_onclick"
			},			
			
			"combo#cboAgentThematique": {
				select: "valider_cboAgentThematique"
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
	valider_cboAgentThematique: function()
	{
		alert('select sur cboAgentThematique');
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

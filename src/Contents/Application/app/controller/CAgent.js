App.controller.define('CAgent', {
	views: [		
		"main.VAgent",
	],	
	models: [
	],	
	init: function()
	{
//	alert('CAgent.init()');
		
		//declaration des évenements
		this.control({
			"agent": {
				show: "agent_onshow"
			},
			"agent combo#cboAgentEtablis": {
				select: "valider_cboAgentUnite"
			},
			"agent combo#cboAgentUnite": {
				select: "valider_cboAgentService"
			},			
			"agent combo#cboAgentDomaine": {
				select: "valider_cboAgentThematique"
			},
			"agent grid#gridAgents": {
	//			select: "display_AgentsDetails"
					itemclick: "display_AgentsDetails"
			}, 
/* 			"agent grid#gridAgents": {
				itemclick: "itemclick_AgentsDetails"
			},  */
			
/*			
			"button#btnMainOk": {
				click: "clickme_onclick"
			},			
			
		//	"combo#cboAgentThematique": {
		//		select: "valider_cboAgentThematiqueXXX"
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
			"agent button#btnAgentEnregistrer": {
				click: "btnAgentEnregistrer_onclick"
			}, 
			"agent button#btnAgentAnuler": {
				click: "XXXbtnAgentEnregistrer_onclick"
			} 
		});				
	},
	btnAgentEnregistrer_onclick: function()
	{
		alert('CAgent.btnAgentEnregistrer_onclick()');
		var errors = [];
		if (!App.get('agent combo#cboAgentEtablis').getValue()) {			
			errors.push("combo Etablissement est vide");
		};
			if (!App.get('agent combo#cboAgentUnite').getValue()) {			
			errors.push("combo Unité est vide");
		};
			if (!App.get('agent combo#cboAgentService').getValue()) {			
			errors.push("combo Service est vide");
		};
		if (errors.length > 0) {
			alert('vous avez fait des erreurs:\n '+errors.join('\n'))
			return;
		}
		var quest = {
			etablissement: App.get('agent combo#Etablissement').getValue(),
			unite: App.get('agent combo#Etablissement').getValue(),
			service: App.get('agent combo#Etablissement').getValue()			
		};
		App.mon_web_service.insert(quest,function(err,response) {
			if (err) alert('ca c mal passe'); 
			else App.get('agent').close();
			
		})
	},
	agent_onshow: function(item)
	{
		//affiche valeur dans combo aprés sa création
		App.get('agent combo#cboAgentEtablis').setValue('007');		
	},	
	//Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
	valider_cboAgentUnite: function(p, record) 
	{
		var KetsTemp = App.get('combo#cboAgentEtablis').getValue();
//		alert('CAgent.valider_cboAgentUnite() KetsTemp = ' + KetsTemp);
//		console.log('KetsTemp= '+ JSON.stringify(KetsTemp));
//		console.log(App.get('combo#cboAgentEtablis').getValue());
		//Efface les infos montrées (displayField) sur les 2 combos esclaves
		App.get('combo#cboAgentUnite').setValue('');
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
		App.get('combo#cboAgentUnite').getStore().load();
		
		//met à jour gridAgents pour cette valeur d'établissement
//		App.get('grid#gridAgents').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
//		App.get('grid#gridAgents').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
//		App.get('grid#gridAgents').getStore().load();
	},
	
	//Sélectionner une unité affiche le service correspondant (cela active le store du service)
	valider_cboAgentService: function(p, record) 
	{
		var KuniTemp = App.get('combo#cboAgentUnite').getValue();
//		console.log(App.get('combo#cboAgentUnite').getValue());
		//Efface l'info montrée (displayField) sur le combo
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentService').getStore().getProxy().extraParams.id_Service = KuniTemp;
		App.get('combo#cboAgentService').getStore().load();
	},

	//Sélectionner un domaine d'intervention affiche la thématique correspondante (cela active le store de l'unité)
	valider_cboAgentThematique: function(p, record) 
	{	
		var id_domaineTemp = App.get('combo#cboAgentDomaine').getValue();
//		console.log(App.get('combo#cboAgentDomaine').getValue());
		//Efface les infos montrées (displayField) sur le combo esclave
		App.get('combo#cboAgentThematique').setValue('');
		App.get('combo#cboAgentThematique').getStore().getProxy().extraParams.id_domaine = id_domaineTemp;
		App.get('combo#cboAgentThematique').getStore().load();
	},
	//---------------------------------------------
	display_AgentsDetails: function(item, record, index, eOpts )
	{
		console.log(record); 
		//Récupére les données de l'agent sélectionné
		var KageTemp = record.data.Kage; 
		var id_residenceTemp = record.data.id_residence;		
		 
	alert('id_residenceTemp = ' + id_residenceTemp ); 
		
		var id_metierTemp = record.data.id_metier;
		var id_contrat_travailTemp = record.data.id_contrat_travail;

/* ------------------------ SIMULATION ----------------------- */		
		var id_domaineTemp = 4;
		var id_thematiqueTemp = 14;
		var id_type_contratTemp = 1;		
		
		var numeo_contratTemp = '12345';	
		var salaireTemp = '52.000';	
		var date_debut_contratTemp = '2015-03-02';	
		var desc_posteTemp = 'Description du poste';		
		
		var req={
			id_metierTemp : 3,
			id_domaineTemp : 4,
			id_thematiqueTemp : 14,
			id_type_contratTemp : 1,
			numeo_contratTemp : '12345',
			salaireTemp : '52.000',
			date_debut_contratTemp : '2015-03-02',
			desc_posteTemp : 'Description du poste',			
		};
		
		/* App.monwebservice.insert(req,function(err,response) {		
			
		}) */
		App.AgentsMod.get_desc_poste(KageTemp,function(err,response) {
			App.get('agent htmleditor#txthtmlDescriptionPoste').setValue(result); 	
			
		})
		
/* ------------------------ SIMULATION ----------------------- */		

		App.get('agent combo#cboAgentResAdmin').setValue(id_residenceTemp); 
		App.get('agent combo#cboAgentMetier').setValue(id_metierTemp); 

/* necessite requette sur table domaine et thematique	*/		
		App.get('agent combo#cboAgentDomaine').setValue(id_domaineTemp); 
	//	App.get('agent combo#cboAgentThematique').setValue(id_thematiqueTemp); 
	
		App.get('agent combo#cboTypeContrat').setValue(id_type_contratTemp);
		
/* necessite requette sur table contrat_travail	*/
		App.get('agent textfield#txtNumeroContrat').setValue(numeo_contratTemp); 		
		App.get('agent textfield#txtSalaire').setValue(salaireTemp); 
		App.get('agent datefield#datDateArrivee').setValue(date_debut_contratTemp); 
// temp		App.get('agent htmleditor#txthtmlDescriptionPoste').setValue(desc_posteTemp); 
	},
	//---------------------------------------------
	itemclick_AgentsDetails: function(item1, record, item, index, e, eOpts )
	{
		alert('itemclick_AgentsDetails XXX');
		//Récupére l'identifiant de l'agent sélectionné
		var agent_id = App.get('agent grid#gridAgents').getValue();
		console.log(agent_id);
	//	alert('vous avez fait des erreurs:\n '+errors.join('\n'));
		alert('agent_id = ');// + agent_id.join );
/* 		if (id) {
			var obj = {
				matri 	: id,
				nom		: App.get('textfield#nomAgent').getValue(),
				prenom	: App.get('textfield#prenomAgent').getValue(),
			};
			App.Agents.update(obj, function(result) {
				App.get('grid#gridAgents').getStore().load();
			});		 */
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
//		console.log(obj);
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

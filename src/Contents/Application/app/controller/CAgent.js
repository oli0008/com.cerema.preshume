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
				select: "update_cboAgentUnite"
			},
			"agent combo#cboAgentUnite": {
				select: "update_cboAgentService"
			},			
			"agent combo#cboAgentDomaine": {
				select: "update_cboAgentThematique"
			},
			"agent grid#gridAgents": {
				itemclick: "display_AgentsDetails"
			}, 

			
/*			
		//	"combo#cboAgentThematique": {
		//		select: "update_cboAgentThematiqueXXX"
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
			}, 
*/
			"agent button#btnAgentEnregistrer": {
				click: "btnAgentEnregistrer_onclick"
			}, 
			"agent button#btnAgentAnnuler": {
				click: "btnAgentAnnuler_onclick"
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
	
	btnAgentAnnuler_onclick: function()
	{
		App.get('agent').close();
	},
	
	agent_onshow: function(item)
	{
		//DEBUG INFO *** affiche valeur dans combo aprés sa création
		App.get('agent combo#cboAgentEtablis').setValue('007');		
	},	
	
	//Quand un établissement est sélectionné, la liste des unités correspondantes est mise à jour(cela active le store de l'unité)
	update_cboAgentUnite: function(p, record) 
	{
		var KetsTemp = App.get('combo#cboAgentEtablis').getValue();
//		alert('CAgent.update_cboAgentUnite() KetsTemp = ' + KetsTemp);
//		console.log('KetsTemp= '+ JSON.stringify(KetsTemp));
//		console.log(App.get('combo#cboAgentEtablis').getValue());

		//Efface les infos montrées (displayField) sur les 2 combos esclaves
		App.get('combo#cboAgentUnite').setValue('');
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
		App.get('combo#cboAgentUnite').getStore().load();

//*************** TODO **************//	
	
		//met à jour gridAgents pour cette valeur d'établissement
//		App.get('grid#gridAgents').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
//		App.get('grid#gridAgents').getStore().load();
	},

	//Quand une unité est sélectionné, la liste des services correspondants est mise à jour(cela active le store du service)	
	update_cboAgentService: function(p, record) 
	{
		var KuniTemp = App.get('combo#cboAgentUnite').getValue();
//		console.log(App.get('combo#cboAgentUnite').getValue());
		//Efface l'info montrée (displayField) sur le combo
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentService').getStore().getProxy().extraParams.id_Service = KuniTemp;
		App.get('combo#cboAgentService').getStore().load();
	},

	//Quand un domaine d'intervention est sélectionné, la liste des thématiques correspondants est mise à jour (cela active le store du thématique)
	update_cboAgentThematique: function(p, record) 
	{	
		var id_domaineTemp = App.get('combo#cboAgentDomaine').getValue();
//		console.log(App.get('combo#cboAgentDomaine').getValue());
		//Efface les infos montrées (displayField) sur le combo esclave
		App.get('combo#cboAgentThematique').setValue('');
		App.get('combo#cboAgentThematique').getStore().getProxy().extraParams.id_domaine = id_domaineTemp;
		App.get('combo#cboAgentThematique').getStore().load();
	},
	
	//---------------------------------------------
	// Cette méthode remplie tous les champs de cette fenêtre lors d'un événement itemclick sur le grid gridAgents.
	// A chaque visite tous les données des champs sont éffacés avant de rafraichir pour éviter de montrer de vieilles données. 
	display_AgentsDetails: function(item, record, index, eOpts )
	{
		//Récupére les données de l'agent sélectionné
	//	var KageTemp = record.data.Kage; 
//		var id_residenceTemp = record.data.id_residence;		
		 
//	alert('KageTemp  = ' + KageTemp  ); 
		
//		var id_metierTemp = record.data.id_metier;
//		var id_contrat_travailTemp = record.data.id_contrat_travail;

/* ------------------------ SIMULATION ----------------------- */		
	//	var id_domaineTemp = 4;
	//	var id_thematiqueTemp = 14;
	//	var id_type_contratTemp = 1;		
		
		var numero_contratTemp = '12345';	
		var salaireTemp = '52.000';	
		var date_debut_contratTemp = '2015-03-02';	
		var desc_posteTemp = 'Description du poste';		
		
		var agentData = {
			KageTemp : 					record.data.Kage,
			id_residenceTemp : 			record.data.id_residence,
			id_metierTemp : 			record.data.id_metier,
			id_contrat_travailTemp : 	record.data.id_contrat_travail,
		//	id_domaineTemp: 4,
		//	id_thematiqueTemp : 14,
		//	id_type_contratTemp : 1,
		//	numeo_contratTemp : '12345',
		//	salaireTemp : '52.000',
		//	date_debut_contratTemp : '2015-03-02',
		//	desc_posteTemp : 'Description du poste',			
		};
		
		//éfface les contenus avant les mise à jour
		App.get('agent combo#cboAgentResAdmin').setValue('');
		App.get('agent combo#cboAgentResAdmin').setValue(agentData.id_residenceTemp); 

		App.get('agent combo#cboAgentMetier').setValue(''); 		
		App.get('agent combo#cboAgentMetier').setValue(agentData.id_metierTemp); 

		App.get('agent combo#cboAgentDomaine').setValue(''); 
		App.AgentsMod.get_domaineIntervention(agentData,function(err,response) {
//			console.log(response.result); 
			App.get('agent combo#cboAgentDomaine').setValue(response.result.data[0].nom_domaine);
		})	
		
		App.get('agent combo#cboAgentThematique').setValue(''); 
		App.AgentsMod.get_thematique(agentData,function(err,response) {
			App.get('agent combo#cboAgentThematique').setValue(response.result.data[0].nom_thematique);
		})	
 		
		App.get('agent combo#cboTypeContrat').setValue('');
		App.AgentsMod.get_typeContrat(agentData,function(err,response) { 
			App.get('agent combo#cboTypeContrat').setValue(response.result.data[0].type_contrat);
		})	 

		App.get('agent textfield#txtNumeroContrat').setValue('');		
		App.AgentsMod.get_numero_contrat(agentData,function(err,response) { 
			App.get('agent textfield#txtNumeroContrat').setValue(response.result.data[0].numero_contrat);
		})	 
		
		App.get('agent textfield#txtSalaire').setValue(''); 
		App.AgentsMod.get_salaire(agentData,function(err,response) { 
			App.get('agent textfield#txtSalaire').setValue(response.result.data[0].salaire);
		})		

		App.get('agent datefield#datDateArrivee').setValue(''); 
		App.AgentsMod.get_date_arrivee(agentData,function(err,response) { 
			App.get('agent datefield#datDateArrivee').setValue(response.result.data[0].date_debut_contrat);
		})
//		App.get('agent datefield#datDateArrivee').setValue(date_debut_contratTemp); 
		
/* ------------------------ SIMULATION ----------------------- */
	
		//éfface le contenu avant mise à jour
		App.get('agent htmleditor#txthtmlDescriptionPoste').setValue('');
		App.AgentsMod.get_desc_poste(agentData,function(err,response) { 
			App.get('agent htmleditor#txthtmlDescriptionPoste').setValue(response.result.data[0].desc_poste);
		})	
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

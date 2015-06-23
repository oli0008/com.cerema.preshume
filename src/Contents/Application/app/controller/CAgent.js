/*
*	Controlleur secondaire
*
*	Fonction: Gérer la fenêtre de modification des agents.
*/

// Déclaration des variables globales
//Dimmentionnement des objets d'interface
var VAgent_label_width = 	350;
var VAgent_width = 			350;

//
var validation_txtNumeroContrat = new RegExp ("[0-9]{5}");	//("#[0-9]{5}#");

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

			
/*	 NOT USED ***	
		
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

 NOT USED *** */
 
			"agent button#btnAgentEnregistrer": {
				click: "btnAgentEnregistrer_onclick"
			}, 
			"agent button#btnAgentAnnuler": {
				click: "btnAgentAnnuler_onclick"
			} 
		});				
	},
	
	/*
	*	Méthode de sauvegarde des données de modification d'un agent.
	*	Cette méthode eregistre toutes les saisie qui apparaissent à l'écran, puis elle detruit cette fenêtre.	
	*/
	btnAgentEnregistrer_onclick: function()
	{
		var errors = [];
/* 		
		if (!App.get('agent combo#cboAgentEtablis').getValue()) {			
			errors.push("Le combo Etablissement est vide.");
		};
		if (!App.get('agent combo#cboAgentUnite').getValue()) {			
			errors.push("Le combo Unité est vide.");
		};
		if (!App.get('agent combo#cboAgentService').getValue()) {			
			errors.push("Le combo Service est vide.");
		};
	 */	
		if (!App.get('agent combo#cboAgentResAdmin').getValue()) {
			errors.push("Le champ Résidence administrative est vide.");
		};		
		if (!App.get('agent combo#cboAgentMetier').getValue()) {
			errors.push("Le champ Metier est vide.");
		};		
		if (!App.get('agent combo#cboAgentDomaine').getValue()) {
			errors.push("Le champ Domaine d'intervention est vide.");
		};		
		if (!App.get('agent combo#cboAgentThematique').getValue()) {
			errors.push("Le champ Thématique est vide.");
		};		
		if (!App.get('agent combo#cboTypeContrat').getValue()) {
			errors.push("Le champ Type de contrat est vide.");
		};			
		if (!App.get('agent textfield#txtNumeroContrat').getValue()) {
			errors.push("Le champ  Numéro de contrat est vide.");
		};		
		if (!App.get('agent numberfield#numSalaire').getValue()) {
			errors.push("Le champ Salaire est vide.");
		};		
		if (!App.get('agent datefield#datDateArrivee').getValue()) {
			errors.push("Le champ Date d'arrivée est vide.");
		};		
		if (!App.get('agent htmleditor#htmlDescriptionPoste').getValue()) {
			errors.push("Le champ Description du poste est vide.");
		};		
		
		if (errors.length > 0) {
			alert('vous avez fait des erreurs:\n '+errors.join('\n'))
			return;
		}
		var quest = {
/*			
			etablissement: 	App.get('agent combo#cboAgentEtablis').getValue(),
			unite: 			App.get('agent combo#cboAgentUnite').getValue(),
			service: 		App.get('agent combo#cboAgentService').getValue(),	
*/	
			res_admin: 		App.get('agent combo#cboAgentResAdmin').getValue(),
			metier: 		App.get('agent combo#cboAgentMetier').getValue(),			
			domaine_interv: App.get('agent combo#cboAgentDomaine').getValue(),			
			thematique: 	App.get('agent combo#cboAgentThematique').getValue(),			
			type_contrat: 	App.get('agent combo#cboTypeContrat').getValue(),			
			num_contrat: 	App.get('agent textfield#txtNumeroContrat').getValue(),			
			salaire: 		App.get('agent numberfield#numSalaire').getValue(),
			
			date_arrivee: 	App.get('agent datefield#datDateArrivee').getValue(),
			desc_poste: 	App.get('agent htmleditor#htmlDescriptionPoste').getValue()			
		};
		
//		alert('CAgent.update_cboAgentUnite() KetsTemp = ' + KetsTemp);
//		console.log('KetsTemp= '+ JSON.stringify(KetsTemp));
//		console.log(App.get('combo#cboAgentEtablis').getValue());		
		
/* 
		alert ('res_admin= ' + quest.res_admin + '\n metier= ' + quest.metier + '\n domaine= ' + quest.domaine_interv + '\n thematique= ' + quest.thematique  );
		alert ('type_contrat= ' + quest.type_contrat + '\n num_contrat= ' + quest.num_contrat + '\n salaire= ' + quest.salaire + '\n date_arrivee= ' + quest.date_arrivee  );
		alert ('desc_poste= ' + quest.desc_poste  );
*/
		alert ('res_admin= ' + quest.res_admin + '\n metier= ' + quest.metier + '\n domaine= ' + quest.domaine_interv 
			+ '\n thematique= ' + quest.thematique  + 'type_contrat= ' + quest.type_contrat + '\n num_contrat= ' + quest.num_contrat 
			+ '\n salaire= ' + quest.salaire + '\n date_arrivee= ' + quest.date_arrivee + 'desc_poste= ' + quest.desc_poste  );
		
		App.mon_web_service.insert(quest,function(err,response) {
			if (err) 
				alert('Une érreur est survenue pendant la sauvagarde des données.'); 
			else 
				App.get('agent').close();			
		})
	},
	
	/*
	*	Méthode d'annulation des modifications faites sur un agent.
	*	Cette méthode abandonne toutes les saisies qui apparaissent à l'écran en fermant la fenêtre. 	
	*/
	btnAgentAnnuler_onclick: function()
	{
		App.get('agent').close();
	},
	
/* 	
	//TEMP FIX
	agent_onshow: function(item)
	{
		//DEBUG INFO *** affiche valeur dans combo aprés sa création
	//	App.get('agent combo#cboAgentEtablis').setValue('007');		
	},	
*/
	 
	//Quand un établissement est sélectionné, la liste des unités correspondantes est mise à jour(cela active le store de l'unité)
	update_cboAgentUnite2: function(p, record) 
	{
		alert('update_cboAgentUnite: function(p, record) -- INVOKED');
	},

	/*
	*	Cette méthode est le point d'entrée de la fenêtre de modification d'un agent.
	*	Elle est invoquée avant tous les événements agissant sur les composants graphiques.	
	*/
	agent_onshow: function(item)
	{
	//	var KetsTemp = App.get('combo#cboAgentEtablis').getValue();
		//Vérouille le combo cboAgentEtablis sur D.TerMed
 		
		var KetsTemp = 1;		 
		App.get('combo#cboAgentEtablis').setValue(KetsTemp);	
		 
//		alert('CAgent.update_cboAgentUnite() KetsTemp = ' + KetsTemp);
//		console.log('KetsTemp= '+ JSON.stringify(KetsTemp));
//		console.log(App.get('combo#cboAgentEtablis').getValue());

		//Efface les infos montrées (displayField) sur les 2 combos esclaves
		App.get('combo#cboAgentUnite').setValue('');
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
		App.get('combo#cboAgentUnite').getStore().load();

//*** TODO ************** Find out how to change store //	
	
		//met à jour gridAgents pour cette valeur d'établissement
//		App.get('grid#gridAgents').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
//		App.get('grid#gridAgents').getStore().load();
	},

	/*
	*	Cette méthode est invoquée quand une unité est sélectionné. Quand cela arrive, la liste des 
	*	services correspondants est mise à jour(cela active le store du service).
	*/
	update_cboAgentService: function(p, record) 
	{
		var KuniTemp = App.get('combo#cboAgentUnite').getValue();
//		console.log(App.get('combo#cboAgentUnite').getValue());
		//Efface l'info montrée (displayField) sur le combo
		App.get('combo#cboAgentService').setValue('');
		App.get('combo#cboAgentService').getStore().getProxy().extraParams.id_Service = KuniTemp;
		App.get('combo#cboAgentService').getStore().load();
	},

	/*
	*	Cette méthode est invoquée quand un domaine d'intervention est sélectionné. Quand cela arrive, la liste des 
	*	thématiques correspondants est mise à jour (cela active le store du thématique).
	*/
	update_cboAgentThematique: function(p, record) 
	{	
		var id_domaineTemp = App.get('combo#cboAgentDomaine').getValue();
//		console.log(App.get('combo#cboAgentDomaine').getValue());
		//Efface les infos montrées (displayField) sur le combo esclave
		App.get('combo#cboAgentThematique').setValue('');
		App.get('combo#cboAgentThematique').getStore().getProxy().extraParams.id_domaine = id_domaineTemp;
		App.get('combo#cboAgentThematique').getStore().load();
	},
	
	/*
	*	Cette méthode remplie tous les champs de cette fenêtre lors d'un événement itemclick sur le grid gridAgents.
	*	A chaque visite tous les données des champs sont éffacés avant d'être rafraichies. 
	*/
	display_AgentsDetails: function(item, record, index, eOpts )
	{
		//Récupére les données de l'agent sélectionné
		var agentData = {
			KageTemp: 				record.data.Kage,
			Nom:					record.data.Nom,
			Prenom:					record.data.Prenom,
			id_residenceTemp: 		record.data.id_residence,
			id_metierTemp: 			record.data.id_metier,
			id_contrat_travailTemp: record.data.id_contrat_travail			
		};
		
		//éfface les contenus avant les mise à jour
		App.get('agent textfield#txtAgent').setValue('');
		var obj1 = agentData.Nom;
		App.get('agent textfield#txtAgent').setValue(obj1.concat( " - ", agentData.Prenom));
/* 
		App.AgentsMod.get_agent(agentData,function(err,response) { 
			App.get('agent textfield#txtAgent').setValue(response.result.data[0].nom_prenom);
		})
 */
		//Efface ce champs s'il n'y a pas de données pour cet agent, sinon, affiche les données de cet agent. 
		App.get('agent combo#cboAgentResAdmin').setValue('');
		if ((agentData.id_residenceTemp == null) || (agentData.id_residenceTemp == 0))
			App.get('agent combo#cboAgentResAdmin').setValue('');
		else
			App.get('agent combo#cboAgentResAdmin').setValue(agentData.id_residenceTemp); 
		
		App.get('agent combo#cboAgentMetier').setValue(''); 
		if ((agentData.id_metierTemp == null) || (agentData.id_metierTemp == 0))
			App.get('agent combo#cboAgentMetier').setValue('');
		else
			App.get('agent combo#cboAgentMetier').setValue(agentData.id_metierTemp); 

		App.get('agent combo#cboAgentDomaine').setValue(''); 
		App.AgentsMod.get_domaineIntervention(agentData,function(err,response){
//			console.log(response.result); 
			if (response == null)
				App.get('agent combo#cboAgentDomaine').setValue('');
			else {
					if (response.result.data.length > 0) 
						App.get('agent combo#cboAgentDomaine').setValue(response.result.data[0].nom_domaine);		
			}			
		})	
		
		App.get('agent combo#cboAgentThematique').setValue(''); 
		App.AgentsMod.get_thematique(agentData,function(err,response) {
			if (response == null)
				App.get('agent combo#cboAgentThematique').setValue('');
			else {
					if (response.result.data.length > 0) 
						App.get('agent combo#cboAgentThematique').setValue(response.result.data[0].nom_thematique);
			}
		})	
 		
		App.get('agent combo#cboTypeContrat').setValue('');
		App.AgentsMod.get_typeContrat(agentData,function(err,response) { 
			if (response == null)
				App.get('agent combo#cboTypeContrat').setValue('');
			else {
					if (response.result.data.length > 0) 
						App.get('agent combo#cboTypeContrat').setValue(response.result.data[0].type_contrat);
			}
		})	 

		App.get('agent textfield#txtNumeroContrat').setValue('');		
		App.AgentsMod.get_numero_contrat(agentData,function(err,response) { 
			if (response == null)
				App.get('agent textfield#txtNumeroContrat').setValue('');
			else {
					if (response.result.data.length > 0) 			
						App.get('agent textfield#txtNumeroContrat').setValue(response.result.data[0].numero_contrat);
			}
		})	 
		
		App.get('agent numberfield#numSalaire').setValue(''); 
		App.AgentsMod.get_salaire(agentData,function(err,response) { 
			if (response == null)
				App.get('agent numberfield#numSalaire').setValue('');
			else {
					if (response.result.data.length > 0) 
						App.get('agent numberfield#numSalaire').setValue(response.result.data[0].salaire);
			}
		})		

		App.get('agent datefield#datDateArrivee').setValue(''); 
  		App.AgentsMod.get_date_arrivee(agentData,function(err,response) { 
			if (response == null)
				App.get('agent datefield#datDateArrivee').setValue('');
			else {
					if (response.result.data.length > 0) 
						App.get('agent datefield#datDateArrivee').setValue(response.result.data[0].date_debut_contrat.toDate());
			}
		}) 
 
		//éfface le contenu avant mise à jour
		App.get('agent htmleditor#htmlDescriptionPoste').setValue('');
		App.AgentsMod.get_desc_poste(agentData,function(err,response) { 
			if (response == null)
				App.get('agent htmleditor#htmlDescriptionPoste').setValue('');
//			console.log(response.result);
			else {
					if (response.result.data.length > 0) 
			App.get('agent htmleditor#htmlDescriptionPoste').setValue(response.result.data[0].libelle_poste);
			}
		})	
	},
	



	
//----- NOT USED ----------------------------------------
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
	//	Ext.tip.QuickTipManager.init(); // lance de quicktip manager (pour les bulles d'aide)
	}
	
	
});

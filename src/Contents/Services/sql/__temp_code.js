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
		
// ***************		
	//Récupére le domaine d'intervention d'un agent particulier.
	get_domaineIntervention: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select d.id_domaine, d.nom_domaine from intervenir i join thematiques t on '
				+ 'i.id_thematique = t.id_thematique join domaine d on t.id_domaine = d.id_domaine '
				+ 'where i.Kage = ' + in1.KageTemp, fn_cb);	
	},
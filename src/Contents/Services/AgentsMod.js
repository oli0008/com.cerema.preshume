// class AgentsMod
// class omneedia db = classe moteur d'abstraction de base de données
AgentsMod = {

// ---------------------------------------- Lecture des données ------------------------------------------//
	 	 
	get_etablis: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
  		var q = AgentsMod.using('db');	
//		console.log('>>AgentsMod.get_etablis()');
//		console.log(q.sql('qget_etablis'));		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_etablis'),fn_cb);  
	},

	get_unite: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_unite()');
		console.log('in1= '+ JSON.stringify(in1));
//		console.log(q.sql( 'qget_unite' + {RECHERCHE: in1.id_Etablis} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_unite',{RECHERCHE: in1.id_Etablis}),fn_cb);
	},	

	get_service: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_service()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	
	
	get_agent: function(in1,fn_cb) {
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agent()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	

	readAllAgents: function(o,cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.readAllAgents()');
		q.model('bpclight','SELECT Nom, Prenom, Matri FROM agents',cb);
	},
	
	get_allAgents: function(in1,fn_cb) {	
	  	var q = AgentsMod.using('db'); 
//		alert('AgentsMod.get_allAgents()');
//		console.log('>>AgentsMod.get_allAgents()');
//		console.log(q.sql('qget_allAgents'));		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_allAgents'),fn_cb);  
	},
	
	get_agentsByEtablis: function(in1, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agentsByEtablis()');
		alert('AgentsMod.get_agentsByEtablis');
	//	alert('AgentsMod.get_agentsByEtablis() in1.id_Etablis = ' + in1.id_Etablis);
//		console.log(q.sql( 'qget_agentsByEtablis' + {P_ETABLIS: in1.id_Etablis} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agentsByEtablis',{P_ETABLIS: in1.id_Etablis}),fn_cb);
	},
	
	get_agentsByUnite: function(in1, in2, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agentsByUnite()');
//		console.log(q.sql( 'qget_agentsByUnite' + {P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agentsByUnite',{P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} ),fn_cb);
	},
	
	get_agentsByService: function(in1, in2, in3, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agentsByService()');
//		console.log(q.sql( 'qget_agentsByService' + {P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} + {P_SERVICE: in2.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agentsByService',{P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} + {P_SERVICE: in2.id_Service} ),fn_cb);
	},


	
/* 
	cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response	
  		var q = Agents.using('db');
//		console.log('>>Agents.cherche()');
//		console.log(q.sql('qget_agent' + {RECHERCHE: in1.recherche} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agent',{RECHERCHE: in1.recherche}),fn_cb);
	}
	 */	
	
	get_residence_admin: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_residence_admin()');
//		console.log(q.sql( 'qget_service' + {ID_AGENT: in1.Kage} ) );		//log apparait dans DOS box
//		q.model('bpclight',q.sql('qget_agentResAdmin',{ID_AGENT: in1.Kage}),fn_cb);
		q.model('bpclight', 'select id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence from residence_admin order by id_residence asc', fn_cb);
//		q.model('bpclight', 'select r.id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence from residence_admin r join agents a on r.id_residence = a.id_residence where a.Kage = '+ in1.Kage, fn_cb);
//		q.model('bpclight', 'select r.id_residence from agents where Kage = '+ in1.Kage, fn_cb);
		},	

	
	get_residence_admin2: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_residence_admin()');
//		console.log(q.sql( 'qget_service' + {ID_AGENT: in1.Kage} ) );		//log apparait dans DOS box
//		q.model('bpclight',q.sql('qget_agentResAdmin',{ID_AGENT: in1.Kage}),fn_cb);
//		q.model('bpclight', 'select id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence from residence_admin order by id_residence asc', fn_cb);
//		q.model('bpclight', 'select r.id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence from residence_admin r join agents a on r.id_residence = a.id_residence where a.Kage = '+ in1.Kage, fn_cb);
		q.model('bpclight', 'select r.id_residence from agents where Kage = '+ in1.Kage, fn_cb);
		},				


//*********************************************** 
//Hard coded query
//		Etablis.using('db').model('bpclight', 'select kets, LibEts from etablissements where archive = 0', fn_cb); 

//Version with parameter
//		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);	
//*********************************************** 		
		
	//Récupére la liste de tous les métiers. 
	get_listMetier: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select id_metier, nom_metier from metier order by id_metier asc', fn_cb);
	},	

	//Récupére la liste de tous les domaines d'interventions. 	
	get_listDomaineIntervention: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select id_domaine, nom_domaine from domaine order by id_domaine asc', fn_cb);
	},	
	
	//Récupére le domaine d'intervention d'un agent particulier.
	get_domaineIntervention: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select d.id_domaine, d.nom_domaine from intervenir i join thematiques t on '
				+ 'i.id_thematique = t.id_thematique join domaine d on t.id_domaine = d.id_domaine '
				+ 'where i.Kage = ' + in1.KageTemp, fn_cb);	
	},
 
	//Récupére la liste de tous les thématiques. 	
	get_listThematique: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select id_thematique, nom_thematique from thematiques where id_domaine = ' 
				+ in1.id_domaine +  ' order by id_thematique asc', fn_cb);
	},
	
	//Récupére la thématique d'un agent particulier.
	get_thematique: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select t.id_thematique, t.nom_thematique from intervenir i join thematiques t '
				+ 'on i.id_thematique = t.id_thematique where i.Kage = ' + in1.KageTemp, fn_cb);				
	},		
	
	//Récupére la liste de tous les type de contrats. 
	get_listTypeContrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select id_type_contrat, type_contrat from type_contrat order by id_type_contrat asc', fn_cb);
	},	

/////////////////
	
	//Récupére le type de contrat d'un agent particulier.
	get_typeContrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model('bpclight', 'select id_type_contrat, type_contrat from type_contrat order by id_type_contrat asc', fn_cb);
	},		

	get_numero_contrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_numero_contrat()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('XXX_qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	

	get_salaire: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_salaire()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('XXX_qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	

	get_date_arrivee: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_date_arrivee()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('XXX_qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	

	get_desc_poste: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_desc_poste()');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.KageTemp} ) );		//log apparait dans DOS box
//		q.model('bpclight',q.sql('XXX_qget_service',{RECHERCHE: in1.KageTemp}),fn_cb);
		console.log('select desc_poste from contrat_travail where Kage = ' + in1.KageTemp);
		q.model('bpclight', 'select desc_poste from contrat_travail where Kage = ' + in1.KageTemp, fn_cb);
	},	
	
// ---------------------------------------- Sauvegarde des données -----------------------------------------------//

/* 	
///////////////////////////////
	 
	 cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = AgentsMod.using('db');  

//		console.log('>>AgentsMod.cherche()');
//		console.log(q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}));			//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}),fn_cb);
		//q.model('bpclight','select nom,prenom from agents',fn_cb);
	},
	
	 cherche2: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = AgentsMod.using('db');  

//		console.log('>>AgentsMod.cherche2()');
//		console.log(q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}));			//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}),fn_cb);
		//q.model('bpclight','select nom,prenom from agents',fn_cb);
	},	
 */	
};

module.exports = AgentsMod;


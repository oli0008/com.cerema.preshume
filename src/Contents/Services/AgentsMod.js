/***********************************************************
*
*	class AgentsMod
*
*	Fonction: Gérer l'accès aux données de la fenêtre 'Modification agent'.
*
************************************************************/
 

/*****************
* Déclaration des constantes pour cette classe
******************/
var BASE_DONNEES = 'bpclight';	//base de données de l'application 

AgentsMod = {

// ---------------------------------------- Lecture des données ------------------------------------------//
	 //Récupére 1 établissement prédéfinit. 	 
	get_etablis1: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
  		var q = AgentsMod.using('db');	
		q.model(BASE_DONNEES, 'select Kets, LibEts from etablissements where archive = 0 and Kets = 1', fn_cb); 
	},
	
	//Retourne une sélection d'Unités.
	get_uniteSel: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log('in1= '+ JSON.stringify(in1));
//		console.log(q.sql( 'qget_unite' + {RECHERCHE: in1.id_Etablis} ) );		//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_unite',{RECHERCHE: in1.id_Etablis}),fn_cb);
	},	

	//Retourne une sélection de Services.
	get_serviceSel: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	},	



	//Récupére les détails d'un agent particulier.
	get_agentFName: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select Kage, concat(Nom, \' - \', Prenom) as nom_prenom from agents where Kage = ' + in1.KageTemp, fn_cb);
		},	
		
	//Trouve un agent par nom de famille
	get_agent: function(in1,fn_cb) {
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES,q.sql('qget_agent',{RECHERCHE: in1.nom}),fn_cb);
	},	

	readAllAgents: function(o,cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.readAllAgents()');
		q.model(BASE_DONNEES,'SELECT Nom, Prenom, Matri FROM agents',cb);
	},
	
	get_allAgents: function(in1,fn_cb) {	
	  	var q = AgentsMod.using('db'); 
		q.model(BASE_DONNEES,q.sql('qget_allAgents'),fn_cb);  
	},
	
	get_agentsByEtablis: function(in1, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log(q.sql( 'qget_agentsByEtablis' + {P_ETABLIS: in1.id_Etablis} ) );		//log apparait dans DOS box
		// Temp fix: have set Kets = 1
//		console.log(q.sql('qget_agentsByEtablis',{P_ETABLIS: 1}));
	q.model(BASE_DONNEES,q.sql('qget_agentsByEtablis',{P_ETABLIS: 1}),fn_cb);		
//		q.model(BASE_DONNEES,q.sql('qget_agentsByEtablis',{P_ETABLIS: in1.id_Etablis}),fn_cb);
/* 
	q.model(BASE_DONNEES,'select a.Nom, a.Prenom, a.Matri, e.Kets, e.LibEts, u.Kuni, u.LibUnic, s.Ksub, s.LibSubC' 
	+ ' from agents a join unites u on u.Kuni = a.Kuni join subdis s on s.Ksub = a.Ksub join etablissements e on e.Kets = u.Kets'
	+ ' where a.actif = 1 and a.kgra <> 66 and a.kgra <> 67 and e.archive = 0 and u.archive = 0 and s.archive = 0 and e.Kets = 1'
	+ ' order by a.Nom, a.Prenom,e.Kets, u.Kuni, s.Ksub	',fn_cb);	
	 */
	},
	
	get_agentsByUnite: function(in1, in2, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agentsByUnite()');
//		console.log(q.sql( 'qget_agentsByUnite' + {P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} ) );		//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_agentsByUnite',{P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} ),fn_cb);
	},
	
	get_agentsByService: function(in1, in2, in3, fn_cb) {	
	  	var q = AgentsMod.using('db');
//		console.log('>>AgentsMod.get_agentsByService()');
//		console.log(q.sql( 'qget_agentsByService' + {P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} + {P_SERVICE: in2.id_Service} ) );		//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_agentsByService',{P_ETABLIS: in1.id_Etablis} + {P_UNITE: in2.id_Unite} + {P_SERVICE: in2.id_Service} ),fn_cb);
	},
	 
	//Récupére la liste des résidences administratives. 
	get_listResidence_admin: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence '
				+ 'from residence_admin order by id_residence asc', fn_cb);
		},	

	//Récupére la résidence administrative d'un agent particulier.
	get_residence_admin: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		q.model(BASE_DONNEES,q.sql('qget_agentResAdmin',{ID_AGENT: in1.Kage}),fn_cb);	
		q.model(BASE_DONNEES, 'select r.id_residence, concat(rue_residence, \' - \', ville_residence) as rue_ville_residence '
				+ 'from residence_admin r join agents a on r.id_residence = a.id_residence where Kage = ' + in1.KageTemp, fn_cb);
		},						
		
	//Récupére la liste de tous les métiers. 
	get_listMetier: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		q.model(BASE_DONNEES, 'select id_metier, nom_metier from metier order by id_metier asc', fn_cb);
		q.model(BASE_DONNEES, 'select id_metier, nom_metier from metier order by id_metier asc', fn_cb);  
	},
	
	//Récupére le métier d'un agent particulier.
	get_metier: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select m.id_metier, m.nom_metier from metier m join agents a on '
				+ 'm.id_metier = a.id_metier where Kage = ' + in1.KageTemp, fn_cb);	
	},	

//*********************

	//Récupére la liste de tous les domaines d'interventions. 	
	get_listDomaineIntervention: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_domaine, nom_domaine from domaine order by id_domaine asc', fn_cb);
	},	
	
	//Récupére le domaine d'intervention d'un agent particulier.
	get_domaineIntervention: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select d.id_domaine, d.nom_domaine from intervenir i join thematiques t on '
				+ 'i.id_thematique = t.id_thematique join domaine d on t.id_domaine = d.id_domaine '
				+ 'where i.Kage = ' + in1.KageTemp, fn_cb);	
	},
 
	//Récupére la liste de tous les thématiques. 	
	get_listThematique: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_thematique, nom_thematique from thematiques where id_domaine = ' 
				+ in1.id_domaine +  ' order by id_thematique asc', fn_cb);
	},
	
	//Récupére la thématique d'un agent particulier.
	get_thematique: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select t.id_thematique, t.nom_thematique from intervenir i join thematiques t '
				+ 'on i.id_thematique = t.id_thematique where i.Kage = ' + in1.KageTemp, fn_cb);				
	},		
	
	//Récupére la liste de tous les type de contrats. 
	get_listTypeContrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_type_contrat, type_contrat from type_contrat order by id_type_contrat asc', fn_cb);
	},	

	//Récupére le type de contrat d'un agent particulier.
	get_typeContrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select t.id_type_contrat, t.type_contrat from type_contrat t join contrat_travail c '
				+ 'on t.id_type_contrat = c.id_type_contrat where c.Kage = ' + in1.KageTemp, fn_cb);
	},	
	
	//Récupére le numéro de contrat d'un agent particulier.
	get_numero_contrat: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_contrat_travail, numero_contrat from contrat_travail where Kage = ' + in1.KageTemp, fn_cb);
	},	
	
	//Récupére le salaire annuel d'un agent particulier.	
	get_salaire: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_contrat_travail, salaire from contrat_travail where Kage = ' + in1.KageTemp, fn_cb);
	},	
	
	//Récupére ldate d'arrivée d'un agent particulier.
	get_date_arrivee: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select id_contrat_travail, date_debut_contrat from contrat_travail where Kage = ' + in1.KageTemp, fn_cb);
	},
	
	//Récupére la description de poste d'un agent particulier.
	get_desc_poste: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log(q.sql( 'XXX_qget_service' + {RECHERCHE: in1.KageTemp} ) );		//log apparait dans DOS box
//		q.model(BASE_DONNEES,q.sql('XXX_qget_service',{RECHERCHE: in1.KageTemp}),fn_cb);
//		console.log('select desc_poste from contrat_travail where Kage = ' + in1.KageTemp);
//*//		q.model(BASE_DONNEES, 'select desc_poste from contrat_travail where Kage = ' + in1.KageTemp, fn_cb);
		q.model(BASE_DONNEES, 'select libelle_poste from agents where Kage = ' + in1.KageTemp, fn_cb);
	},	
	
// ---------------------------------------- Sauvegarde des données -----------------------------------------------//

	//Met à jour la table agents avec les infos provenants de la fenêtre Modification agent.
	update_agents: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'update agents set id_residence = ' + in1.res_admin + ', id_metier = ' + in1.metier 
				+ ', id_contrat_travail = ' + in1.contrat_travail + ' where Kage = ' + in1.Kage, fn_cb);
	},	
/* 	
update agents set id_residence = ' + in1.res_admin + ', id_metier = ' + in1.metier + ', id_contrat_travail = ' + in1.contrat_travail + 
' where Kage = ' + in1.Kage, fn_cb);
Kage =  2638
	 */

//xxx
	update_metier: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
//		q.model(BASE_DONNEES,q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
		q.model(BASE_DONNEES, 'select libelle_poste from agents where Kage = ' + in1.KageTemp, fn_cb);
	},
	
	insert_metier: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
//		q.model(BASE_DONNEES,q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
		q.model(BASE_DONNEES, 'select libelle_poste from agents where Kage = ' + in1.KageTemp, fn_cb);
	},

	//Met à jour la table contrat_travail avec les infos provenants de la fenêtre Modification agent.
	update_contrat_travail: function(in1,fn_cb) {		
  		var q = AgentsMod.using('db');
		q.model(BASE_DONNEES, 'select libelle_poste from agents where Kage = ' + in1.KageTemp, fn_cb);
		q.model(BASE_DONNEES, 'update contrat_travail set id_thematique = ' + in1.thematique 
				+ ', id_contrat_travail = ' + in1.contrat_travail 
				+ ' where Kage = ' + in1.Kage, fn_cb);
	},

/* 	
///////////////////////////////
	 
	 YY_cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = AgentsMod.using('db');  

//		console.log('>>AgentsMod.cherche()');
//		console.log(q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}));			//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}),fn_cb);
		//q.model(BASE_DONNEES,'select nom,prenom from agents',fn_cb);
	},
	
	 cherche2: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = AgentsMod.using('db');  

//		console.log('>>AgentsMod.cherche2()');
//		console.log(q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}));			//log apparait dans DOS box
		q.model(BASE_DONNEES,q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}),fn_cb);
		//q.model(BASE_DONNEES,'select nom,prenom from agents',fn_cb);
	},	
 */	
};

module.exports = AgentsMod;


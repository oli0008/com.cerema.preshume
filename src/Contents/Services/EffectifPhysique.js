/***********************************************************
*
*	class EffectifPhysique
*
*	Fonction: Gérer les effectifs physiques.
*
************************************************************/
 

/*****************
* Déclaration des constantes pour cette classe
******************/
var BASE_DONNEES = 'bpclight';	//base de données de l'application 


EffectifPhysique = {
	//Calcule les effectif présents
//	 cherche: function(in1,fn_cb) {
	calculate_EffPresent: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
		var q = EffectifPhysique.using('db');  
//		console.log('>>EffectifPhysique.cherche()');
//		console.log(q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}));	//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);
	},
	
	
	//Récupére les effectif présents du mois 	 
	get_effPresent: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');	
		console.log('select Kets, LibEts from etablissements where archive = 0 and Kets = 1 ');		//log apparait dans DOS box
	//	q.model(BASE_DONNEES, 'select Kets, LibEts from etablissements where archive = 0 and Kets = 1', fn_cb);
		q.model(BASE_DONNEES, 'select  lib_departement_ep, lib_categorie_ep, count_agent,  Kets,  date_ep '
			+ 'from effectif_physique where date_ep >= \'2015-07-01\' and date_ep <= \'2015-07-31\' ', fn_cb);
//		q.model(BASE_DONNEES,q.sql('qget_etablis'),fn_cb);  
	},
	
	
	//Récupére les grand totaux des effectif présents du mois 	 
	get_gdTotalEffPresent: function(in1,fn_cb) {	
  		var q = AgentsMod.using('db');	
		console.log('select Kets, LibEts from etablissements where archive = 0 and Kets = 1 ');		//log apparait dans DOS box
	//	q.model(BASE_DONNEES, 'select Kets, LibEts from etablissements where archive = 0 and Kets = 1', fn_cb);
		q.model(BASE_DONNEES, 'select lib_departement_ep, sum(count_agent) as GrandTotal '
			+ 'from effectif_physique where date_ep >= \'2015-07-01\' and date_ep <= \'2015-07-31\' '
			+ 'group by lib_departement_ep', fn_cb);
//		q.model(BASE_DONNEES,q.sql('qget_etablis'),fn_cb);  
	}
	
};

module.exports = EffectifPhysique;

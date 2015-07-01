/***********************************************************
*
*	class Maintenance
*
*	Fonction: Gérer l'accès aux données de la fenêtre "Maintenance Résidence administrative".
*
************************************************************/
 

/*****************
* Déclaration des constantes pour cette classe
******************/
var BASE_DONNEES = 'bpclight';	//base de données de l'application 


//*********************************************** 
//Hard coded query
//		Etablis.using('db').model(BASE_DONNEES, 'select kets, LibEts from etablissements where archive = 0', fn_cb); 

//Version with parameter
//		q.model(BASE_DONNEES,q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);	
//*********************************************** 


Maintenance = {

	//Enregistre une nouvelle résidence administrative
	create: function(in1,fn_cb) {
  		var q = Maintenance.using('db');
	//	q.model(BASE_DONNEES,q.sql('qget_agent',{RECHERCHE: in1.nom}),fn_cb);
		q.model(BASE_DONNEES, 'insert into residence_admin (rue_residence, code_postal_residence, ville_residence) values ("' 
			+ in1.rue_residence + '", "' + in1.code_postal_residence '", "' + in1.ville_residence '")', fn_cb); 
	},

	read: function(in1,fn_cb) {
  		var q = Maintenance.using('db');
		q.model(BASE_DONNEES, 'SELECT id_residence, rue_residence, code_postal_residence, ville_residence FROM residence_admin',cb);
	},
	update: function(in1,fn_cb) {	
	  	var q = Maintenance.using('db');
		q.model(BASE_DONNEES, 'UPDATE residence_admin SET rue_residence = "' + in1.rue_residence 
				+ '", code_postal_residence = "' + in1.code_postal_residence  
				+ '", ville_residence = "' + in1.ville_residence 
				+ '" WHERE id_residence = ' + in1.id_residence + ' ',cb);
	}
/* 	
	,
	delete: function(o,cb) {	// Delete = delete
		Agents.using('db').query('bpclight','DELETE FROM agents WHERE kage='+o.matri,cb);
	}
*/
/* 
	create: function(o,cb) {	// Create = insert
		console.log('INSERT INTO agents (nom,prenom) VALUES ("'+o.nom+'","'+o.prenom+'")');
		Agents.using('db').model('bpclight','INSERT INTO agents (nom,prenom) VALUES ("'+o.nom+'","'+o.prenom+'")',cb);
	},
 */	
}

module.exports = Maintenance;
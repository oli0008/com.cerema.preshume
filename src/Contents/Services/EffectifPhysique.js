// class EffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

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
	
	
	//Récupére 1 établissement prédéfinit. 	 
	get_EffPresent: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
  		var q = AgentsMod.using('db');	
		console.log('select Kets, LibEts from etablissements where archive = 0 and Kets = 1 ');		//log apparait dans DOS box
		q.model(BASE_DONNEES, 'select Kets, LibEts from etablissements where archive = 0 and Kets = 1', fn_cb);
//		q.model(BASE_DONNEES,q.sql('qget_etablis'),fn_cb);  
	}
};

module.exports = EffectifPhysique;

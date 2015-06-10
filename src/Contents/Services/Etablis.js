// class Etablis
// class omneedia db = classe moteur d'abstraction de base de données
Etablis = {
	 get_Etablis: function(o,cb) {
		// 1er argument = error
		// 2eme argument = response
// works Ok		
//				Etablis.using('db').model('bpclight', 'select kets, LibEts from etablissements where archive = 0', cb); 
// works Ok			
  		var q = Etablis.using('db');
		q.model('bpclight',q.sql('get_etablis'),cb);  
// param		q.model('bpclight',q.sql('get_EffectifPhysique',{RECHERCHE: t.param_recherche}),fonction_retour);			

//NOK		Etablis.using('db').model('bpclight',q.sql('get_etablis'),cb); 
		//q.model
		//q.post
		//q.delete
		//q.sql method
//		console.log(q.sql('get_agent',{RECHERCHE:'%' + t.recherche + '%'}));	//log apparait dans DOS box
//		console.log('*** oli ***');
//		q.model('bpclight',q.sql('get_agent',{RECHERCHE:'%' + t.recherche + '%'}),fonction_retour);
		//q.model('bpclight','select nom,prenom from Etablis',fonction_retour);
	}
	
};

module.exports=Etablis;

//	'select kets, LibEts from etablissements where archive = 0'
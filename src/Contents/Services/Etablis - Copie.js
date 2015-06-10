// class Etablis
// class omneedia db = classe moteur d'abstraction de base de données
Etablis = {
	 get_Etablis: function(input_p,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Etablis.using('db');
//		console.log('*************** OLI ********************');
//		console.log(q.sql('get_etablis'));		//log apparait dans DOS box
		q.model('bpclight',q.sql('get_etablis'),fn_cb);  
 
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

module.exports = Etablis;


//Hard coded query
//				Etablis.using('db').model('bpclight', 'select kets, LibEts from etablissements where archive = 0', fn_cb); 

//Version with parameter
//		q.model('bpclight',q.sql('get_EffectifPhysique',{RECHERCHE: t.param_recherche}),fonction_retour);
// class Etablis
// class omneedia db = classe moteur d'abstraction de base de données
Etablis = {
	 get_etablis: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Etablis.using('db');
		
		console.log('>>Etablis.get_etablis()');
		console.log(q.sql('qget_etablis'));		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_etablis'),fn_cb);  
	}
	
};

module.exports = Etablis;


//Hard coded query
//		Etablis.using('db').model('bpclight', 'select kets, LibEts from etablissements where archive = 0', fn_cb); 

//Version with parameter
//		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);
// class Etablis
// class omneedia db = classe moteur d'abstraction de base de données
Etablis = {
	 get_Etablis: function(input_p,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Etablis.using('db');
//		console.log(q.sql('get_etablis'));		//log apparait dans DOS box
		q.model('bpclight',q.sql('get_etablis'),fn_cb);  
	}
	
};

module.exports = Etablis;

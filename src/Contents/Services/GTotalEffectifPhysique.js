// class GTotalEffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

GTotalEffectifPhysique = {
	 cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = GTotalEffectifPhysique.using('db');  
		//q.model
		//q.post
		//q.delete
		//q.sql method
		console.log('>>GTotalEffectifPhysique.cherche()');
		console.log(q.sql('qget_GTotalEffectifPhysique',{RECHERCHE: in1.recherche}));	//log apparait dans DOS box

//test		q.model('bpclight',q.sql('get_GTotalEffectifPhysique',{RECHERCHE: in1.recherche}),fn_cb);
		//q.model('bpclight','select nom,prenom from EffectifPhysique',fn_cb);
		q.model('bpclight','select LibUnic, GrandTotal from GTotalEffectifPhysique',fn_cb);
//alt		q.model('bpclight','select LibUnic, sum(CountAge) as GrandTotal from GTotalEffectifPhysique',fn_cb);
	}
	
};

module.exports = GTotalEffectifPhysique;
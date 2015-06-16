// class EffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

EffectifPhysique = {
	 cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
		var q = EffectifPhysique.using('db');  
//		console.log('>>EffectifPhysique.cherche()');
//		console.log(q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}));	//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);
	}
};

module.exports = EffectifPhysique;

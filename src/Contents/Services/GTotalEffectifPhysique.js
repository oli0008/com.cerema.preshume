// class GTotalEffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

GTotalEffectifPhysique = {
	 cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = GTotalEffectifPhysique.using('db');  

		console.log('>>GTotalEffectifPhysique.cherche()');
		console.log(q.sql('qget_GTotalEffectifPhysique',{RECHERCHE: in1.recherche}));	//log apparait dans DOS box
		q.model('bpclight','select LibUnic, GrandTotal from GTotalEffectifPhysique',fn_cb);
/* 
ALT
		console.log(q.sql('qget_GTotalEffectifPhysique',{RECHERCHE: in1.param_recherche}));	//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_GTotalEffectifPhysique',{RECHERCHE: in1.param_recherche}),fn_cb);
ALT 
*/		
	}
};

module.exports = GTotalEffectifPhysique;
// class GTotalEffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

GTotalEffectifPhysique = {
	 cherche: function(t,fonction_retour) {
		// 1er argument = error
		// 2eme argument = response
		var q = GTotalEffectifPhysique.using('db');  
		//q.model
		//q.post
		//q.delete
		//q.sql method
		console.log(q.sql('get_GTotalEffectifPhysique',{RECHERCHE: t.recherche}));	//log apparait dans DOS box
		console.log('>> GTotalEffectifPhysique.cherche()');
//		q.model('bpclight',q.sql('get_EffectifPhysique',{RECHERCHE:'%' + t.recherche + '%'}),fonction_retour);
//test		q.model('bpclight',q.sql('get_GTotalEffectifPhysique',{RECHERCHE: t.recherche}),fonction_retour);
		//q.model('bpclight','select nom,prenom from EffectifPhysique',fonction_retour);
		q.model('bpclight','select LibUnic, GrandTotal from GTotalEffectifPhysique',fonction_retour);
//alt		q.model('bpclight','select LibUnic, sum(CountAge) as GrandTotal from GTotalEffectifPhysique',fonction_retour);
	}
	
};

module.exports = GTotalEffectifPhysique;
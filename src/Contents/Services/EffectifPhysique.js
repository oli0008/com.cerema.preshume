// class EffectifPhysique
// class omneedia db = classe moteur d'abstraction de base de données

EffectifPhysique = {
	 cherche: function(t,fonction_retour) {
		// 1er argument = error
		// 2eme argument = response
		var q = EffectifPhysique.using('db');  
		//q.model
		//q.post
		//q.delete
		//q.sql method
		console.log(q.sql('qget_EffectifPhysique',{RECHERCHE: t.param_recherche}));	//log apparait dans DOS box
		console.log('>>EffectifPhysique.cherche()');
//		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE:'%' + t.param_recherche + '%'}),fonction_retour);
		q.model('bpclight',q.sql('qget_EffectifPhysique',{RECHERCHE: t.param_recherche}),fonction_retour);
		//q.model('bpclight','select nom,prenom from EffectifPhysique',fonction_retour);
	}
	
};

module.exports = EffectifPhysique;

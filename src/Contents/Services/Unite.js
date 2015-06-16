// class Unite
// class omneedia db = classe moteur d'abstraction de base de données
Unite = {
	get_unite: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response	
  		var q = Unite.using('db');
//		console.log('>>Unite.get_unite()');
//		console.log(q.sql( 'qget_unite' + {RECHERCHE: in1.id_Etablis} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_unite',{RECHERCHE: in1.id_Etablis}),fn_cb);
	}
};

module.exports = Unite;

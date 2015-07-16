// class Unite
// class omneedia db = classe moteur d'abstraction de base de données
Unite = {
	get_unite: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response	
  		var q = Unite.using('db');
console.log('>>Unite.get_unite() --- START --- in1.id_Etablis');
				console.log(in1.id_Etablis);
		console.log(q.sql( 'qget_unite' + {RECHERCHE: in1.id_Etablis} ) );		//log apparait dans DOS box
console.log('>>Unite.get_unite()  --- END --- in1.id_Etablis');
		q.model('bpclight',q.sql('qget_unite',{RECHERCHE: in1.id_Etablis}),fn_cb);
	}
};

module.exports = Unite;

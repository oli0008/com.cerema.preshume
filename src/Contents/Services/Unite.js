// class Unite
// class omneedia db = classe moteur d'abstraction de base de données
Unite = {
//	get_Unite: function(o,cb)
	get_Unite: function(input_p,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Unite.using('db');

//		console.log(q.sql('get_etablis'));		//log apparait dans DOS box
//**		q.model('bpclight',q.sql('get_etablis'),fn_cb);  
				q.model('bpclight',q.sql('get_etablis'),fn_cb);  
		//		q.model('bpclight',q.sql('get_EffectifPhysique',{RECHERCHE: t.param_recherche}),fonction_retour);
		q.model('bpclight',q.sql('get_Unite',{RECHERCHE: input_p.id_Etablis}),fn_cb);
	
	}
//temp	
/*
	{
		console.log('select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "' + o.id_Etablis + '" ');
		console.log('V2 -- select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "' + o.id_Etablis + '" µµOLI<o.id_Etablis>= ' + o.id_Etablis);
		Unite.using('db').model('bpclight','select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "' + o.id_Etablis + '" ',cb);
//		Unite.using('db').model('bpclight','select kuni, LibUnic, LibUni from unites where archive = 0 and kets = 1',cb);
//		Unite.using('db').model('bpclight','select nom,prenom,matri from agents',cb);
		//		Unite.using('db').model('bpclight',q.sql('get_Unite'),cb); 
	}
*/
};

module.exports = Unite;

/*
// combo unites 
select kuni, LibUnic, LibUni 
from unites
where archive = 0
and kets = 1		//user select kets = 1 -- result = 10 
*/


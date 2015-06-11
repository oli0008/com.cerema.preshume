// class Service
// class omneedia db = classe moteur d'abstraction de base de données
Service = {
	
/* **	

	get_service: function(o,cb)
	{
//		console.log('select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "'+o.id_Etablis+'" ');
		console.log('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = "' + o.id_Service + '" ');
		Unite.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = "' + o.id_Service + '" ',cb);		
		
//		Service.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 ',cb);
	//	Service.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = 13',cb);
		//		Unite.using('db').model('bpclight',q.sql('get_Unite'),cb); 
	}
};

module.exports = Service;


** */

/* 
// *** combo services 
select kuni, LibSubc, LibSub  
from subdis 
where archive = 0 
and kuni = 13		// user select kuni = 13 -- result = 6 
*/

	get_service: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Service.using('db');

		console.log('>>Service.get_service()');
		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	}
};

module.exports = Service;


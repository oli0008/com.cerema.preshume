Service={
	get_Service: function(o,cb)
	{
//		console.log('select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "'+o.id_Etablis+'" ');
		console.log('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = "' + o.id_Service + '" ');
		Unite.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = "' + o.id_Service + '" ',cb);		
		
//		Service.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 ',cb);
	//	Service.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0 and kuni = 13',cb);
		//		Unite.using('db').model('bpclight',q.sql('get_Unite'),cb); 
	}
};

module.exports=Service;

/* 
// *** combo services 
select kuni, LibSubc, LibSub  
from subdis 
where archive = 0 
and kuni = 13		// user select kuni = 13 -- result = 6 
*/


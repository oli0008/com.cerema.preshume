Service={
	get_Service: function(o,cb)
	{
		Service.using('db').model('bpclight','select kuni, LibSubc, LibSub from subdis where archive = 0',cb);
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

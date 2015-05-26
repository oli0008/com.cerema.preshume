Service={
	get_Service: function(o,cb)
	{
		Service.using('db').model('bpclight','select nom,prenom,matri from agents',cb);
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
Unite={
	get_Unite: function(o,cb)
	{
		console.log('select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "'+o.id_Etablis+'" ');
		Unite.using('db').model('bpclight','select kuni, LibUnic, LibUni from unites where archive = 0 and kets = "'+o.id_Etablis+'" ',cb);
//		Unite.using('db').model('bpclight','select kuni, LibUnic, LibUni from unites where archive = 0 and kets = 1',cb);
//		Unite.using('db').model('bpclight','select nom,prenom,matri from agents',cb);
		//		Unite.using('db').model('bpclight',q.sql('get_Unite'),cb); 
	}
};

module.exports=Unite;

/*
// combo unites 
select kuni, LibUnic, LibUni 
from unites
where archive = 0
and kets = 1		//user select kets = 1 -- result = 10 
*/


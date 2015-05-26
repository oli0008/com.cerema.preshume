Unite={
	get_Unite: function(o,cb)
	{
		Unite.using('db').model('bpclight','select nom,prenom,matri from agents',cb);
//		Unite.using('db').model('bpclight','select nom,prenom,matri from agents',cb);
	}
};

module.exports=Unite;
// class Agents
// class omneedia db = classe moteur d'abstraction de base de données
Agents = {
	 cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		var q = Agents.using('db');  

		console.log('>>Agents.cherche()');
		console.log(q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}));			//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agent',{RECHERCHE:'%' + in1.recherche + '%'}),fn_cb);
		//q.model('bpclight','select nom,prenom from agents',fn_cb);
	}
	
};

module.exports = Agents;

/* 
	cherche: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response
		
  		var q = Agents.using('db');

		console.log('>>Agents.cherche()');
		console.log(q.sql('qget_agent' + {RECHERCHE: in1.recherche} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_agent',{RECHERCHE: in1.recherche}),fn_cb);
	}
	 */
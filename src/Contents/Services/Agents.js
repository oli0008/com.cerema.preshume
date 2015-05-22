// class Agents
// class omneedia db = classe moteur d'abstraction de base de données
Agents = {
	 cherche: function(t,fonction_retour) {
		// 1er argument = error
		// 2eme argument = response
		var q=Agents.using('db');  
		//q.model
		//q.post
		//q.delete
		//q.sql method
		console.log(q.sql('get_agent',{RECHERCHE:'%'+t.recherche+'%'}));
		q.model('bpclight',q.sql('get_agent',{RECHERCHE:'%'+t.recherche+'%'}),fonction_retour);
		//q.model('bpclight','select nom,prenom from agents',fonction_retour);
	}
	
};

module.exports=Agents;
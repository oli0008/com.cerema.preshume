// class Service
// class omneedia db = classe moteur d'abstraction de base de données
Service = {
	get_service: function(in1,fn_cb) {
		// 1er argument = error
		// 2eme argument = response		
  		var q = Service.using('db');
		console.log('>>Service.get_service()');
		console.log('in1.id_Service');
//		console.log(q.sql( 'qget_service' + {RECHERCHE: in1.id_Service} ) );		//log apparait dans DOS box
		q.model('bpclight',q.sql('qget_service',{RECHERCHE: in1.id_Service}),fn_cb);
	}
};

module.exports = Service;

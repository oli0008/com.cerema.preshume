// class Service
// class omneedia db = classe moteur d'abstraction de base de données
Service = {
	get_service: function(in1,fn_cb) {
		
  		var q = Service.using('db');

		console.log(q.sql('qget_service'+{RECHERCHE:in1.id_Service}));		//log apparait dans DOS box
console.log('>>Service.get_service() --END---');
		q.model('bpclight',q.sql('qget_service',{RECHERCHE:in1.id_Service}),fn_cb);
		
	
		 //ALT
/* 		 
console.log('>>Service.get_service() --START---');
console.log('select Ksub, LibSubc, LibSub from subdis where archive = 0 and Kuni = ' + in1.id_Service);
		q.model('bpclight', 'select Ksub, LibSubc, LibSub from subdis where archive = 0 and Kuni = ' + in1.id_Service, fn_cb);
console.log('>>Service.get_service() --END---');
 */
	}
};

module.exports = Service;

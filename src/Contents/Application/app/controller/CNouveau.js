App.controller.define('CNouveau', {
	views: [
		
	],	
	models: [
	],	
	init: function()
	{
		this.control({
		});				
	},
	
		
	//---------------------------------------------
	onLoad: function()
	{
		// form loaded	
alert('CMaintenance.onLoad()');
		Ext.tip.QuickTipManager.init(); // lance de quicktip manager (pour les bulles d'aide)
	}	
});

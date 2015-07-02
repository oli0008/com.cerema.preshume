/***********************************************************
*
*	Controlleur secondaire
*
*	Fonction: Gérer les fenêtres de maintenance.
*
************************************************************/

/*****************
* Déclaration des constantes globales pour ce controlleur et ses vues
******************/
//nok  var G_BASE_DONNEES = 'bpclight';	//base de données de l'application

// Dimmentionnement des objets d'interface
var VRESADMIN_LABEL_WIDTH = 	350;	
var VRESADMIN_WIDTH = 			350;	

// Variables de validation
//	var VALID_NUMERO_CONTRAT = new RegExp ("[0-9]{5}");	//("#[0-9]{5}#");


/******************
* Déclaration des variables globales pour ce controlleur et ses vues
******************/



App.controller.define('CMaintenance', {
	views: [
		"main.VContratTravail"
 		
		,
		"main.VMaintResAdmin"
		,
/*		
		"main.VMaintThematique",
		"main.VMaintDomainInterv",
		"main.VMaintTypeContrat",
		"main.VMaintMetier",
		"main.VMaintCategorie",
		"main.VMaintGrade" 
*/
	],	
	models: [
	],	
	init: function()
	{
		this.control({
			"grid#gridMaintResAdmin": {
				itemclick: "gridMaintResAdmin_itemclick"
			},			
			"button#btnMaintResAdminModifier": {
				click: "updateResAdminData"
			},
			"button#btnMaintResAdminAjouter": {
				click: "btnAjoutAgent_onclick"
			},

			
			"button#btnSupprAgent": {
				click: "btnSupprAgent_onclick"
			},
		});				
	},
	
	
	/**************************************************************
	*
	*	Objectif: Transferer le contenu du tableau vers les champs du formulaire de saisie.
	*
	***************************************************************/
	gridMaintResAdmin_itemclick: function( item, record, item2, index, e, eOpts )
	{
		App.get('textfield#txtRueResAdmin').setValue(record.data.rue_residence);
		App.get('textfield#txtCodePResAdmin').setValue(record.data.code_postal_residence);
		App.get('textfield#txtVilleResAdmin').setValue(record.data.ville_residence);
	},

	/**************************************************************
	*
	*	Objectif: sauvegarder les modifications du formulaire de saisie quand le boutton Modifier est cliqué.
	*
	***************************************************************/
	updateResAdminData: function()
	{		
	
		var guiData = {
			rue_residence: 			App.get('maint txtRueResAdmin').getValue(),
			code_postal_residence: 	App.get('maint txtCodePResAdmin').getValue(),			
			ville_residence: 		App.get('maint txtVilleResAdmin').getValue()				
		};
		var errorsGui = [];
		//Vérification que tous les champs ont été remplis
		if (!guiData.rue_residence )  {
			errorsGui.push("Le champ Rue est vide.");
		};
		if (!guiData.code_postal_residence ) {
				errorsGui.push("Le champ Code postal est vide.");
		};		
		if (!guiData.ville_residence) {
				errorsGui.push("Le champ Ville est vide.");
		};		
	
		if (errorsGui.length > 0) {
			alert('Il faut corriger les erreurs suivantes:\n ' + errorsGui.join('\n') )
			return;
		}		
/* 
MMMMMMMMMMMMMMMMM		
		var id = App.get('textfield#idAgent').getValue();
		if (id) {
			var obj = {
				matri 	: id,
				nom		: App.get('textfield#nomAgent').getValue(),
				prenom	: App.get('textfield#prenomAgent').getValue(),
			};
MMMMMMMMMMMM	
*/	
			App.Agents.update(guiData, function(result) {
				App.get('maint grid#gridMaintResAdmin').getStore().load();
			});
		}
	},
	
	/**************************************************************
	*
	*	Objectif: sauvegarder les nouvelle entrées du formulaire de saisie.
	*
	***************************************************************/
	btnAjoutAgent_onclick: function()
	{
		var obj = {
				nom		: App.get('textfield#nomAgent').getValue(),
				prenom	: App.get('textfield#prenomAgent').getValue(),
			};
		console.log(obj);
		App.Agents.create(obj, function(result) {
			App.get('grid#gridAgents').getStore().load();
		});
		
	},
	
	//---------------------------------------------
	btnSupprAgent_onclick: function()
	{
		var id = App.get('textfield#idAgent').getValue();
		if (id) {
			var obj = {
				matri	: id,
			};
			App.Agents.delete(obj, function(result) {
				App.get('grid#gridAgents').getStore().load();
				App.get('textfield#nomAgent').setValue('');
				App.get('textfield#prenomAgent').setValue('');
				App.get('textfield#idAgent').setValue('');
			});
		}
	},
	
	//---------------------------------------------
	onLoad: function()
	{
		// form loaded	
alert('CMaintenance.onLoad()');
		Ext.tip.QuickTipManager.init(); // lance de quicktip manager (pour les bulles d'aide)
	}	
});

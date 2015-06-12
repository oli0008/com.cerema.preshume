App.view.define('main.VContratTravail', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.contratTravail',
	x:50,
	y:50,
    height: 535,
    width: 530,
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Modification Contrat de travail',

	tbar:[
	//Top bar buttons
	{
		xtype: "button",
		itemId: "btnAnnulerContratTravail", 
		text: "Annuler",
	},
	{
		xtype: "button",
		itemId: "btnEnregistrerContratTravail", 
		text: "Enregistrer",
	}
	],
/* 	bbar:[
	//Bottom bar buttons
	'->',			//Met les autres éléments du coté droit
	{
		xtype: "button",
		itemId: "btnAgentSupprimer", 
		text: "Supprimer",

	},
	{
		xtype: "button",
		itemId: "btnAgentEnregistrer", 
		text: "Enregistrer",
	}
	],	 */

	border: false,
	
	layout: "border",
	
	items: [
//********************** CENTER ***************************	
		{
			region: "center",			
			split:true,
/* 			
 			layout: "hbox",
			border: false,
			width: "100%", 
			
			items: [
			{
				xtype: "combo",
				itemId: "cboAgentEtablis",
				margin: {
						top: 10,
						left:10	
						},
				fieldLabel: "Etablissement",
			//	allowBlank: false,		//false = mandatory filling
				editable: false,
				labelAlign: "top",
				labelWidth: 200,
				width: 250,
 				displayField: "LibEts",
				valueField: "kets",			//BIZZARE: Kets doit être en minuscule
						
				store: App.store.create("App.Etablis.get_etablis", {
													autoLoad: true
										}) 		// Creation du store				
			},					
			{
				xtype: "textfield",
				itemId: "txtResidenceAdmin", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Résidence administrative",
				labelAlign: "top",
			}
			]
		},
 */		
 		{
//**************************************************
			layout: "hbox",
			border: false,
			width: "100%",  
			
 			items: [	
			{
				//Montre le nom & prénom de l'agent (champ non-éditable)
				xtype: "textfield",
				itemId: "txtAgentContratTravail", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Agent",
				labelAlign: "top",
/* TODO check editable property */				
				editable: false,
			},					
			{
				xtype: "combo",
				itemId: "cboTypeContrat",
				margin: {
						top: 10,
						left:10
								
						},
				fieldLabel: "Type de contrat",
				allowBlank: false,
				editable: false,
				labelAlign: "top",
				labelWidth: 200,
				width: 200,
 				displayField: "type_contrat",
				valueField: "id_type_contrat",
/* TODO store setup */						
				store: App.store.create('MNomSource', // Creation du store
								{
											autoLoad: true
								})  						
			},			
			{
				xtype: "textfield",
				itemId: "txtResidenceAdmin2", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Numéro de contrat",
				labelAlign: "top",
			},			
			{
				xtype: "textfield",
				itemId: "txtSalaire", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Salaire",
				labelAlign: "top",
			},	
/* TODO date field ? */			
			{
				xtype: "textfield",
				itemId: "txtDateArrivee", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Date d'arrivée",
				labelAlign: "top",
			},			
			{
				xtype: "textfield",
				itemId: "txtDescriptionPoste", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
						},
				fieldLabel: "Description du poste",
				labelAlign: "top",
			},						
			]					
		} 
	]
});
	

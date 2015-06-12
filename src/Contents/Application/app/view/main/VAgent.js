App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 535,
    width: 530,
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Modification Agent',

	tbar:[
	//Top bar buttons
	{
		xtype: "button",
		itemId: "btnAgentAnnuler", 
		text: "Annuler",
	}
	{
		xtype: "button",
		itemId: "btnAgentEnregistrer", 
		text: "Enregistrer",
	}
	],
	bbar:[
	//Bottom bar buttons
	'->',			//Met les autres éléments du coté droit
	{
		xtype: "button",
		itemId: "btnAgentSupprimer", 
		text: "Supprimer",

	},
	{
		xtype: "button",
		itemId: "btnAgentNouveau", 
		text: "Nouveau",
	},
	],	

	border: false,
	
	layout: "border",
	
	items: [
//********************** CENTER ***************************	
		{
			region: "center",			
			split:true,
			
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
/* 		{
//**************************************************
			layout: "hbox",
			border: false,
			width: "100%",  
			
 			items: [		
			{
				xtype: "combo",
				itemId: "cboNom2",
				margin: {
						top: 10,
						left:10
								
						},
				fieldLabel: "Nom2",
				allowBlank: false,
				editable: false,
				labelAlign: "top",
				labelWidth: 200,
				width: 200,
 				displayField: "NomSource",
				valueField: "IdSource",
						
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
				fieldLabel: "Résidence administrative2",
				labelAlign: "top",
			},			
			
			]					
		} */
	]
});
	

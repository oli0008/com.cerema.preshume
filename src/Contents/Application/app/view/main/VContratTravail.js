App.view.define('main.VContratTravail', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.contratTravail',
	x:50,
	y:50,
    height: 380,
    width: 250,
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Maintenance Grade',

	bbar:[
	//Top bar buttons
	{
		xtype: "button",
		itemId: "btnAjouter", 
		text: "Ajouter",
	},
/* TODO - Rollback() */	

	{
		xtype: "button",
		itemId: "btnModifier", 
		text: "Modifier",
	}
/* TODO - Commit() */	

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
	],	 
*/

	border: false,	
	layout: "border",	
	items: [
//********************** CENTER ***************************	
		{
			region: "center",			
			split:true,
			layout: "vbox",
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
				width:200,
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
						left:20							
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
//				store: App.store.create("App.Etablis.get_etablis", {				
				store: App.store.create('MNomSource', // Creation du store
								{
											autoLoad: true
								})  						
			},			
			{
				xtype: "textfield",
				itemId: "txtNumeroContrat", 
	//			text: "Laitages",
				margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20						
						},
				width:200,
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
				width:200,
				fieldLabel: "Salaire",
				labelAlign: "top",
			},	
/* TODO date field ? */	
/* 		
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
	 */	
/* 	 
					{
						xtype: "datefield",
						renderer: Ext.util.Format.dateRenderer('d/m/Y'),
						itemId: "date",
						labelAlign: "top",
						allowBlank: false,
						editable: false,
						margin: {
								top: 10,
								left:30	
							},
						width:100,
						fieldLabel: 'Date de parution',
					},
	 */				
			{
				xtype: "datefield",
				itemId: "datDateArrivee",
				labelAlign: "top",
				margin: {
							top: 10,
							left: 20								
						},
				width:200,
				fieldLabel: "Date d'arrivée",
				allowBlank: false,
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
				width:200,
				fieldLabel: "Description du poste",
				labelAlign: "top",
			},						
			]					
		} 
	]
});
	

App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 535,
    width: 730,
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
	},
/* TODO - Rollback() */	

	{
		xtype: "button",
		itemId: "btnAgentEnregistrer", 
		text: "Enregistrer",
	}
/* TODO - Commit() */	

	],
/* 
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
 */
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
				//*************************
				{
					xtype: "combo",
					itemId: "cboMainUnite",
					margin: {
							top: 10,
							left:10	
							},
					fieldLabel: "Unité",
					allowBlank: false,			//false = red notification
					editable: false,
					labelAlign: "top",
					labelWidth: 200,
					width: 200,
 					displayField: "LibUni",		//Alt use: LibUnic
					valueField: "kuni",			//BIZZARE: Kuni doit être en minuscule
						
					store: App.store.create("App.Unite.get_unite", {
													autoLoad: true
												})  	// Creation du store
				},
				{
					xtype: "combo",
					itemId: "cboMainService",
					margin: {
							top: 10,
							left:10	
							},
					fieldLabel: "Service",
					allowBlank: false,					//false = mandatory filling
					editable: false,
					labelAlign: "top",
					labelWidth: 200,
					width: 200,
 					displayField: "LibSubc",
					valueField: "ksub",			//BIZZARE: Ksub doit être en minuscule
						
					store: App.store.create("App.Service.get_service", {
													autoLoad: true
												})  // Creation du store	
				},
				
				//*************************			
					{
						xtype: "combo",
						itemId: "cboAgentThematique",
						margin: {
								top: 10,
								left:10								
							},
							
// TODO check fieldLabel: "Nom"  

//						fieldLabel: "Nom",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
						displayField: "nom_thematique",
						valueField: "id_thematique",
						
//						store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
					},
//////HBOBX/////////

//////HBOBX/////////
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

//////////////
			
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
		{
			region: "south",			
			split:true,
// TODO --check 			
					layout: "hbox",
					border: false,
					width: "100%",			
			items: [
			{
				xtype: "button",
				itemId: "btnVoireContratTravail",		//id
				text: "Voire contrat de travail",	//caption
				margin: 20,	
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
//// TO FIX -- START /////////////////			
/* 		
		//********************
		
				{
		
					layout: "hbox",
					border: false,
					width: "100%",
					items: [				
					{
						xtype: "combo",
						itemId: "cboAgentMetier",
						margin: {
								top: 10,
								left:10								
							},
							
// TODO check fieldLabel: "Nom"  

//						fieldLabel: "Nom",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
						displayField: "nom_metier",
						valueField: "id_metier",
						
//						store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
					},
					{
						xtype: "combo",
						itemId: "cboAgentThematique",
						margin: {
								top: 10,
								left:10								
							},
							
// TODO check fieldLabel: "Nom"  

//						fieldLabel: "Nom",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
						displayField: "nom_thematique",
						valueField: "id_thematique",
						
//						store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
					},
					{
						xtype: "combo",
						itemId: "cboAgentDomaneIntervention",
						margin: {
								top: 10,
								left:10								
							},
							
// TODO check fieldLabel: "Nom"  

//						fieldLabel: "Nom",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
						displayField: "nom_domaine",
						valueField: "id_domaine",
						
//						store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
					},					
					]
				},			
	 */		
//// TO FIX -- END /////////////////				
		},
	]
});
	

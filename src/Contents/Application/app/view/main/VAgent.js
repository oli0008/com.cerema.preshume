App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 535,
    width: 730,	//width: 720
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Modification Agent',

	bbar:[
	//Bottom bar buttons
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
	tbar:[
	//Top bar buttons
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
	layout: "vbox",
	
	items: [
	{
		layout: "hbox",
		width: "100%",
		border: false,
		items: [
		{
			xtype: "combo",	
			fieldLabel: "Etablissement",
			labelAlign: "top",			
//			itemId: "cboMainEtablis",
			itemId: "cboAgentEtablis",
		//	allowBlank: false,		//false = mandatory filling
			editable: false,
			flex: 1,
			margin: 5,
			displayField: "LibEts",
			valueField: "Kets",								
			store: App.store.create("App.Etablis.get_etablis", {
												autoLoad: true
									}) 		// Creation du store				
		},
		//*************************
		{
			xtype: "combo",
			fieldLabel: "Unité",
			labelAlign: "top",
			itemId: "cboMainUnite",
//			itemId: "cboAgentUnite",
//			allowBlank: false,			//false = red notification
			editable: false,
			flex: 1,
			margin: 5,
			displayField: "LibUni",		//Alt use: LibUnic
			valueField: "Kuni",			
			store: App.store.create("App.Unite.get_unite", {
												autoLoad: true
									})  	// Creation du store
		},
		//*************************
		{
			xtype: "combo",
			fieldLabel: "Service",
			labelAlign: "top",
			itemId: "cboMainService",
//			itemId: "cboAgentService",
//			allowBlank: false,					//false = mandatory filling
			editable: false,
			flex: 1,
			margin: 5,
 			displayField: "LibSubc",
			valueField: "Ksub",				
			store: App.store.create("App.Service.get_service", {
													autoLoad: true
									})  // Creation du store			
		}
		]
	},
	//*************************
	{
		xtype: "grid",
		columns: [		
		{
			text: "Nom",
			dataIndex: "Lastname"
		},
		{
			text: "Prénom",
			dataIndex: "Firstname"
		}
		],
		border: false,
		width: "100%",
		height: 100,
		store: App.store.create({
			fields: [
				"Lastname",
				"Firstname"
			],
			data: [
			{
				Lastname: "Too",
				Firstname: "fslkdfkklj"
			}
			]			
		})
	},
	{
		flex: 1,
		width: "100%",
		items: [
		{
			layout: "hbox",
			width: "100%",
			border: false,
			items: [
			{
				layout: "vbox",
				flex: 1,
				items: [
// HERE start //	
		{
			xtype: "combo",
			fieldLabel: "Résidence administrative",
			labelAlign: "top",
			itemId: "cboAgentResAdmin",
			allowBlank: false,			//false = red notification
			editable: false,
//			flex: 1,
//			margin: 5,
 			margin: {
					top: 10,
					left:10								
			},  
			labelWidth: 300,
			width: 300,
	//		displayField: "rue_residence" + ", " + "ville_residence",	
			displayField: "ville_residence",
			displayField: "ville_residence",			
	//		valueField: "rue_residence",
			valueField: "ville_residence",			
/* 			store: App.store.create("App.XXX__Unite.get_unite", {
												autoLoad: true
									})  	// Creation du store */
		store: App.store.create({
			fields: [
				"rue_residence",
				"ville_residence"
			],
			data: [
			{	rue_residence: "rue_1", ville_residence: "ville_1"},
			{	rue_residence: "rue_2", ville_residence: "ville_2"}
			]			
		})
		},
		{
			xtype: "combo",
			fieldLabel: "Métier",
			labelAlign: "top",
			allowBlank: false,
			editable: false,
			itemId: "cboAgentMetier",
 			margin: {
					top: 10,
					left:10								
			},  
			labelWidth: 300,
			width: 300,
			displayField: "nom_metier",
			valueField: "id_metier",						
//			store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
		},
		{
			xtype: "combo",
			fieldLabel: "Thématique",
			labelAlign: "top",
			allowBlank: false,
			editable: false,
			itemId: "cboAgentThematique",	
			margin: {
					top: 10,
					left:10								
			},						
			labelWidth: 300,
			width: 300,
			displayField: "nom_thematique",
			valueField: "id_thematique",			
//						store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
		},


// HERE stop //		
				]
			},
			{
				layout: "vbox",
				flex: 1,
				items: [
// HERE start 2 //				
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
/* 			
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
		 */	
// HERE stop 2 //	
/* 			
				{
					xtype: "combo",
					fieldLabel: "Unité",
					labelAlign: "top"
				},
				{
					xtype: "textfield",
					width: "100%"
					
				},
	 */			
				{
					xtype: "datefield",
					fieldLabel: "date dup",
					width: "100%"
					
				},
				{
					xtype: "htmleditor",
					width: "100%",
					flex: 1
				}
				]
				
			}
			]
		}
		]
	}
	]
});
	

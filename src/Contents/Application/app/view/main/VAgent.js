App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 550,
    width: 750,	//width: 720
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
 
/*  
 var label_width = 350;
 var with_ = 350;

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
		xtype	: "grid",
		itemId	: "gridAgents",
		border: false,
		width: "100%",
		height: 100,
		columns: [
			{	text: "Nom",		dataIndex: "Nom"	},
			{	text: "Prénom",		dataIndex: "Prenom"	},
			{	text: "Matricule", 	dataIndex: "Matri"	},
		],
 		store: App.store.create('App.AgentsMod.read',{
				autoLoad: true
			})	 
	},  
//---------------------	
 /* 	{
		xtype: "grid",
		columns: [		
		{
			text: "Nom",	dataIndex: "Lastname"
		},
		{
			text: "Prénom",	dataIndex: "Firstname"
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
	},  */
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
// Colonne inférieure gauche				
				layout: "vbox",
				flex: 1,			//trouble with bottom space usage
				items: [
				{
					xtype: "combo",
					fieldLabel: "Résidence administrative",
					labelAlign: "top",
					itemId: "cboAgentResAdmin",
					allowBlank: false,			//false = red notification
					editable: false,
//					flex: 1,
//					margin: 5,
					margin: {
							top: 10,
							left:10								
					}, 
/* lalelWidth: label_width,
width: width_, */					
					labelWidth: 300,
					width: 300,
	//				displayField: "rue_residence" + ", " + "ville_residence",	
					displayField: "ville_residence",
					displayField: "ville_residence",			
	//				valueField: "rue_residence",
					valueField: "ville_residence",			
/* 					store: App.store.create("App.XXX__Unite.get_unite", {
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
					store: App.store.create("App.AgentsMod.get_metier", {
													autoLoad: true
												})  	// Creation du store					
//					store: App.store.create('MNomSource', // Creation du store
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
					store: App.store.create("App.AgentsMod.get_thematique", {
													autoLoad: true
												})  	// Creation du store					
//					store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
				},
				{
					xtype: "combo",
					fieldLabel: "Domaine d'intervention",
					labelAlign: "top",
					allowBlank: false,
					editable: false,
					itemId: "cboAgentDomaine",	
					margin: {
							top: 10,
							left:10								
					},						
					labelWidth: 300,
					width: 300,
					displayField: "nom_domaine",
					valueField: "id_domaine",			
//					store: App.store.create('MNomSource', // Creation du store
//												{
//													autoLoad: true
//												})  	
				},	
				]
			},
// Colonne inférieure droite
			{
				layout: "vbox",
				flex: 1,
				items: [				
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
					labelWidth: 300,
					width: 300,
					displayField: "type_contrat",
					valueField: "id_type_contrat",
					store: App.store.create('App.AgentsMod.get_type_contrat',{
							autoLoad: true
					})	 
/* TODO store setup */		
//					store: App.store.create("App.Etablis.get_etablis", {				
/* 					store: App.store.create('MNomSource', // Creation du store
								{
											autoLoad: true
								}) */  						
				},			
				{
					xtype: "textfield",
					fieldLabel: "Numéro de contrat",
					labelAlign: "top",
					itemId: "txtNumeroContrat", 
	//				text: "Laitages",
					margin: {
							top : 10,
					//		bottom : 20,
							left : 20,
					//		right : 20						
					},
					labelWidth: 300,
					width:300,
					allowBlank: false,
				},			
				{
					xtype: "textfield",
					fieldLabel: "Salaire",
					labelAlign: "top",
					itemId: "txtSalaire", 
	//				text: "Laitages",
					margin: {
							top : 10,
							left : 20,					
							},
					labelWidth: 300,
					width:300,
					allowBlank: false,
				},					
				{
					xtype: "datefield",
					fieldLabel: "Date d'arrivée",
					labelAlign: "top",
//					renderer: Ext.util.Format.dateRenderer('d/m/Y'),				
					itemId: "datDateArrivee",
					margin: {
							top: 10,
							left: 20								
							},
					labelWidth: 300,
					width:300,
					allowBlank: false,
				},	 
/* 			
				{
					xtype: "textfield",
					itemId: "txtDescriptionPoste", 
	//				text: "Laitages",
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
					xtype: "datefield",
					fieldLabel: "date dup",
					width: "100%"
					
				}, */
				{
					xtype: "htmleditor",
					fieldLabel: "Description du poste",
					labelAlign: "top",
					itemId: "txthtmlDescriptionPoste", 
/* 					width: "100%",
					flex: 1 */
					margin: {
						top: 10,
						left: 20								
					},
					labelWidth: 300,
					width:300,
					allowBlank: false,
				}
				]
				
			}
			]
		}
		]
	}
	]
});
	

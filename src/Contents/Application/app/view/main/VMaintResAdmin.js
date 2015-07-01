/********************************************************
*
*	Vue gérée par le controlleur CMaintenance.
*
*	Fonction: Afficher les composants graphiques de la fenêtre "Maintenance Résidence administrative".
*
***********************************************************/

App.view.define('main.VMaintResAdmin', {

    extend	: 'Ext.window.Window',
	alias 	: 'widget.maint',
	border	: false,
	width	: 720,
	height	: 500,
	title	: 'Maintenance Résidence administrative',
	
	bbar:[
	//Bottom bar buttons
	{
		xtype: "button",
		itemId: "btnMaintResAdminAjouter", 
		text: "Ajouter",
	},
	{
		xtype: "button",
		itemId: "btnMaintResAdminModifier", 
		text: "Modifier",
	}
	],
	
	
	layout	: "border",	
	items	: [
		
		{
			region		: "center",			
			//split		: true,
			//autoScroll	:true,
			padding		: 20,
			width		: 315,
			height		: '100%',
			
			xtype	: "grid",
			itemId	: "gridMaintResAdmin",
			title	: "Résidences administratives",
			//width	: 360,
			height	: '100%',
			flex	: 1,
			//autoScroll	:true,
			columns: [
				{
					text: "id_residence", 
					dataIndex: "id_residence",
					hidden: true
				},
				{
					text: "Rue", 
					dataIndex: "rue_residence"
				},				
				{
					text: "Code postal", 
					dataIndex: "code_postal_residence"
				},
				{
					text: "Ville", 
					dataIndex: "ville_residence"
				}
			],
/* 			
			store: App.store.create('App.Maintenance.read',{
				autoLoad: true

			})				 */					
		},
		{
			region	: "east",			
			split	: true,
//			padding	: 20,
			width	: 340,
			layout	: "vbox",
			items	: [
				{	// Le champ texte ID
					xtype		: "textfield",
					itemId		: "txtRueResAdmin",
					fieldLabel	: "Rue",
//					labelAlign	: "left",
//					labelWidth	: 150,		// VRESADMIN_LABEL_WIDTH,
//					width		: 150,		//  VRESADMIN_WIDTH,
					maxLength	: 50,		//Limite le nombre de char dans ce champ.
					enforceMaxLength: true,
					allowBlank: false,	
					margin		: 20
				},
				{	// Le champ texte Nom
					xtype		: "textfield",
					itemId		: "txtCodePResAdmin",
					fieldLabel	: "Code postal",
//					labelAlign	: "left",
//					labelWidth	: 150,		// VRESADMIN_LABEL_WIDTH,
//					width		: 150,		//  VRESADMIN_WIDTH,
					maxLength	: 5,			//Limite le nombre de char dans ce champ.
					enforceMaxLength: true,
					allowBlank: false,						
					margin		: 20
				},
				{	// Le champ texte Prénom
					xtype		: "textfield",
					itemId		: "txtVilleResAdmin",
					fieldLabel	: "Ville",	
//					labelAlign	: "left",
//					labelWidth	: 150,		// VRESADMIN_LABEL_WIDTH,
//					width		: 150,		//  VRESADMIN_WIDTH,
					maxLength	: 50,			//Limite le nombre de char dans ce champ.
					enforceMaxLength: true,
					allowBlank: false,	
					margin		: 20
				},
				{
					layout	: 'vbox',
					height	: 250,
					width	: '100%',
					border	: false,
					padding	: 20,
					items	: [
						{
							xtype	: "button",
							text	: "Ajouter (INSERT)",
							itemId	: "btnAjoutAgent",
							margin	: 10
						},
						{
							xtype	: "button",
							text	: "Modifier (UPDATE)",
							itemId	: "btnModifAgent",
							margin	: 10
						},
						{
							xtype	: "button",
							text	: "Supprimer (DELETE)",
							itemId	: "btnSupprAgent",
							margin	: 10
						}				
					]
				}
			]
		}
	]	
});

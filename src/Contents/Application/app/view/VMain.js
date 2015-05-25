App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,	//cache la ligne de bordure 
			baseCls: 'cls-header',
			xtype: "Menu",		//xtype création d'un obj GUI
			itemId: "MenuPanel",
			menu: [
			{
				//mnu niveau 1
				text: "Effectifs",
				menu: [
				{
					//mnu niveau 2
					text: "Présent",
					itemId: "mnuPresent"
				},
				{
					//mnu niveau 2
					text: "Future",
					itemId: "mnuFuture"
				}	
				]
			}
			]		
		},
//************************************************ CENTER
		{
			region: "center",			
			split:true,
			items: [
				{	// 1er ligne
					layout: "hbox",
					border: true,	//false,
					items:[
						{	
							xtype: "textfield",		//xtype création d'un obj GUI
							itemId: "txtEtab",
						//	flex: 1,				//Prend la totalité de la largeur
							margin: {
								left: 20,
								bottom:20,
								top:20
							}
						},
						{
							xtype: "button",		//xtype création d'un obj GUI
							itemId: "clickme2",
							text: "Etablissement",
						/*	text: "OK", */
							width: 100,
							margin: {
								left: 20,
								top: 20,
								bottom: 20,
								right: 20
							}
						},
						{
							xtype: "textfield",		//xtype création d'un obj GUI
							itemId: "text1",
						//	flex: 1,				//Prend la totalité de la largeur
							margin: {
								left: 20,
								bottom:20,
								top:20
							}
						},
						{
							xtype: "button",		//xtype création d'un obj GUI
							itemId: "clickme",
							text: "Unité",
						/*	text: "OK", */
							width: 100,
							margin: {
								left: 20,
								top: 20,
								bottom: 20,
								right: 20
							}
						}							
					]
				},
				{	// 2em ligne
					layout: "hbox",
					border: true,
					items:[
						{
							xtype: "textfield",		//xtype création d'un obj GUI
							itemId: "text2",
							flex: 1,				//???
							margin: {
								left: 20,
								bottom:20,
								top:20
							}
						},
						{
							xtype: "button",		//xtype création d'un obj GUI
							itemId: "clickme3",
							text: "Etablissement",
							width: 100,
							margin: {
								left: 20,
								top: 20,
								bottom: 20,
								right: 20
							}
						}					
					]
				},				
				
				{
					xtype: "grid",			//xtype création d'un obj GUI
					itemId: "grid1",
					columns: [
					{
						text: "Catégorie",
						dataIndex: "LibCgr"
					},
					{
						text: "Sub total",
						dataIndex: "agentTotal"
					},
										{
						text: "Unité",
						dataIndex: "LibUnic"
					}
					],
					flex: 1,
					width: "100%",
			/*		store: App.store.create("App.Agents.cherche")	*/	//???
					store: App.store.create("App.EffectifPhysique.cherche")	
				}
			]
		}
	]
	
});

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
				text: "Fichier",
				menu: [
				{
					//mnu niveau 2
					text: "Nouveau",
					itemId: "MNU_NEW"
				},
				{
					//mnu niveau 2
					text: "Edition",
					menu: [
					{
						//mnu niveau 3
						text: "Couper",
						itemId: "MNU_CUT"
					},
					{
						//mnu niveau 3
						text: "Coller"
					}
					]
				}
				]
			},
			{
				//mnu niveau 1
				text: "Edition"
			},
			{
				//mnu niveau 1
				text: "Affichage"
			}
			]		
		},
		{
			region: "center",			
			split:true,
			items: [
				{
					layout: "hbox",
					border: false,
					items:[
						{
							xtype: "textfield",		//xtype création d'un obj GUI
							itemId: "text1",
							flex: 1,				//???
							margin: {
								left: 20,
								bottom:20,
								top:20
							}
						},
						{
							xtype: "button",		//xtype création d'un obj GUI
							itemId: "clickme",
							text: "OK",
							width: 100,
							margin: {
								left: 20,
								top: 20,
								bottom: 20,
								right: 20
							}
						}					
					]
				},{
					xtype: "grid",			//xtype création d'un obj GUI
					itemId: "grid1",
					columns: [
					{
						text: "Nom",
						dataIndex: "nom"
					},
					{
						text: "Prénom",
						dataIndex: "prenom"
					}
					],
					flex: 1,
					width: "100%",
					store: App.store.create("App.Agents.cherche")		//???
				}
			]
		}
	]
	
});

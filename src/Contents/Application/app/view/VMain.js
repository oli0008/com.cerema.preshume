App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
//*************************************** NORTH - Menus ****************************
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
//********************************************* CENTER *******************************
		{
			region: "center",			
			split:true,
			items: [
				{	// 1er ligne
					layout: "hbox",
					border: true,	//false,
					width: "100%",
					items:[
					{
						xtype: "combo",
						itemId: "cboEtablis",
						margin: {
								top: 10,
								left:10	
							},
						fieldLabel: "Etablissement",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
/* 						 displayField: "NomSource",
						valueField: "IdSource",
						
						store: App.store.create('MNomSource', // Creation du store
												{
													autoLoad: true
												})  */					
					},
					//*************************
					{
						xtype: "combo",
						itemId: "cboUnite",
						margin: {
								top: 10,
								left:10	
							},
						fieldLabel: "Unité",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
/* 						 displayField: "NomSource",
						valueField: "IdSource",
						
						store: App.store.create('MNomSource', // Creation du store
												{
													autoLoad: true
												})  */	
					},
											{
						xtype: "combo",
						itemId: "cboService",
						margin: {
								top: 10,
								left:10	
							},
						fieldLabel: "Service",
						allowBlank: false,
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
/* 						 displayField: "NomSource",
						valueField: "IdSource",
						
						store: App.store.create('MNomSource', // Creation du store
												{
													autoLoad: true
												})  */	
					},
						//*************************
						{
							xtype: "button",		//xtype création d'un obj GUI
							itemId: "btnOk",	//"clickme",
							text: "Ok", 
							width: 100,
							margin: {
								left: 20,
								top: 28,
								bottom: 20,
								right: 20
							}
						}							
					]
				},			
			
//************************************************** ligne 1start *************************
/*				{	// 1er ligne
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
							text: "Etablissement333",

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
							text: "Unité333",

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
*/
//************************************************** ligne 1end *************************
//************************************************** ligne 2start *************************	
/*
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
*/				
//************************************************** ligne 2end *************************	
//************************************ Layout final start *****************************			
/*
				{	//grid1_start
					layout: "hbox",
					border: true,
					items:[
					{
							xtype: "grid",			//xtype création d'un obj GUI
							itemId: "gridTotalsPresent",
							columns: [
							{
							text: "A+",
							dataIndex: "LibCgr"
							},
							{
							text: "A",
							dataIndex: "agentTotal"
							},
							{
								text: "B",
								dataIndex: "agentTotal"
							},
							{
								text: "C",
								dataIndex: "agentTotal"
							},
							{
								text: "Exploitation",
								dataIndex: "LibUnic"
							}
						],
						flex: 1,
					//	width: "100%",
						width: "50%",
				//		store: App.store.create("App.Agents.cherche")		//???
						store: App.store.create("App.EffectifPhysique.cherche")	
				},	//grid1_end
				{	//grid2_start
					xtype: "grid",			//xtype création d'un obj GUI
					itemId: "gridGrandTotalpresent",
					columns: [
					{
						text: "Total",
						dataIndex: "GrandTotal"	//sum(CountAge) as GrandTotal
					}
					],
					flex: 1,
				//	width: "100%",
					width: "50%",
			//		store: App.store.create("App.Agents.cherche")		//???
			//		store: App.store.create("App.EffectifPhysique.cherche")	
					store: App.store.create("App.EffectifPhysique.cherche")	
				}	//grid2_end
				]
				}
	*/
//************************************ Layout final end *****************************					
				
// *********** TEMP FIX START *******************************************	
				{	//grid1_start
					layout: "hbox",
				//	border: true,
					items:[
					{
							xtype: "grid",			//xtype création d'un obj GUI
							itemId: "gridTotalsPresent",
							columns: [
							{
							text: "Unité",
							dataIndex: "LibUni"
							},
							{
							text: "Catégorie",
							dataIndex: "LibCgr"
							},
							{
							text: "Total agent",
							dataIndex: "agentTotal"
							}
						],
						flex: 1,
						width: "100%",
				//		width: "50%",
				//		store: App.store.create("App.Agents.cherche")		//???
						store: App.store.create("App.EffectifPhysique.cherche")	
				},	//grid1_end
				{	//grid2_start
					xtype: "grid",			//xtype création d'un obj GUI
					itemId: "gridGrandTotalpresent",
					columns: [
					{
						text: "Unité",
						dataIndex: "LibUni1"
					},					
					{
						text: "Total unité",
						dataIndex: "GrandTotal"	//sum(CountAge) as GrandTotal
					}
					],
				//	flex: 1,
				//	width: "100%",
					width: "50%",
			//		store: App.store.create("App.Agents.cherche")		//???
			//		store: App.store.create("App.EffectifPhysique.cherche")	
					store: App.store.create("App.EffectifPhysique.cherche")	
				}	//grid2_end
				]
				}
// *********** TEMP FIX END *********************************************			
			]	//CENTER 
		},

/*		
//********************** SOUTH ***************************	
		{
			region: "south",			
			split:true,
			items: [
				{
					xtype: "button",
					itemId: "btnSouth",		//id
					text: "region south",	//caption
					margin: 20,
					
					
				}
			]
		},
//********************** EAST ***************************	
		{
			region: "east",			
			split:true,
			items: [
				{
					xtype: "button",
					itemId: "btnEast",		//id
					text: "region east",	//caption
					margin: 20,
					
				}
			]
		},
		
//********************** WEST ***************************	
		{
			region: "west",			
			split:true,
			items: [
				{
					xtype: "button",
					itemId: "btnWest",		//id
					text: "region west",	//caption
					margin: 20,
					
				}
			]
		},
*/
	]
	
});

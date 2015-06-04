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
					//	allowBlank: false,		//false = mandatory filling
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 250,
 						displayField: "LibEts",
						valueField: "kets",			//BIZZARE: Kets doit être en minuscule
						
						store: App.store.create("App.Etablis.get_Etablis", {
													autoLoad: true
												}) 		// Creation du store				
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
						allowBlank: false,			//false = red notification
						editable: false,
						labelAlign: "top",
						labelWidth: 200,
						width: 200,
 						displayField: "LibUni",		//Alt use: LibUnic
						valueField: "kuni",			//BIZZARE: Kuni doit être en minuscule
						
						store: App.store.create("App.Unite.get_Unite", {
													autoLoad: true
												})  	// Creation du store
					},
					{
						xtype: "combo",
						itemId: "cboService",
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
						
						store: App.store.create("App.Service.get_Service", {
													autoLoad: true
												})  // Creation du store	
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
				},
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
							dataIndex: "LibUnic"
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
				//		flex: 1,
				//		width: "100%",
						width: "50%",
				//		store: App.store.create("App.Agents.cherche")		//???
						store: App.store.create("App.EffectifPhysique.cherche")	
				},	//grid1_end
				{	//grid2_start
					xtype: "grid",			//xtype création d'un obj GUI
					itemId: "gridGrandTotalpresent",
					columns: [
					{
						text: "Unité",
						dataIndex: "LibUni"
					},					
					{
						text: "Total unité",
						dataIndex: "GrandTotal"	//sum(CountAge) as GrandTotal
					}
					],
				//	flex: 1,
				//	width: "100%",
					width: "50%",
//					store: App.store.create("App.GTotalEffectifPhysique.cherche", {autoload: true})
/* */
					App.store.create(
					fields: [ 
						//	'Service', 'Cat', 'Type','Valeur'
							'name', 'email', 'phone'
							],
					data: 	[
							{
							Service: "SG",
							Cat:	"A+",
							Type: "A",
							Valeur: "3"
							}
							]
					)
/* */					

				}//,	//grid2_end
/*
				{}	
Ext.create('Ext.data.Store', {
    storeId:'simpsonsStore',
    fields:['name', 'email', 'phone'],
    data:{'items':[
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

Ext.create('Ext.grid.Panel', {
    title: 'Simpsons',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
});				
*/				
				]
				}
// *********** TEMP FIX END *********************************************			
			]	//CENTER 
		},


	]
	
});

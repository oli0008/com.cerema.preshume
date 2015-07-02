/********************************************************
*
*	Vue principale de l'application. Elle est gérée par le controlleur principal.
*
*	Fonction: Afficher les composants graphiques de la fenêtre ( menu principale & composants de la fenêtre principale).
*
***********************************************************/

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
			//Menu Effectifs
			text: "Effectifs",
			width: G_VMAIN_MNU_WIDTH,
			menu: [
			{
				//Menu item
				text: "Présent",
				itemId: "mnuEffectifPresent",

			},
			{
				//Menu item
				text: "Future",
				itemId: "mnuEffectifFuture"
			}	
			]
		},
		{
			//Menu ETP
			text: "ETP",
			width: G_VMAIN_MNU_WIDTH,
			menu: [
			{
				//Menu item
				text: "Présent",
				itemId: "mnuETPPresent"
			},
			{
				//Menu item
				text: "Future",
				itemId: "mnuETPFuture"
			}	
			]
		},
		{
			//Menu Agents
			text: "Agents",
			width: G_VMAIN_MNU_WIDTH,
			menu: [
			{
				//Menu item
				text: "Modification",
				itemId: "mnuModAgent"
			}
			]
		},
		{
			//Menu Maintenance
			text: "Maintenance",
			width: G_VMAIN_MNU_WIDTH,
			menu: [
			{
				//Menu item
				text: "Résidence administrative",
				itemId: "mnuResAdmin"
			},
			{
				//Menu item
				text: "Thématique",
				itemId: "mnuThematique"
			},
			{
				//Menu item
				text: "Domaine d'intervention",
				itemId: "mnuDomaineInterv"
			},
			{
				//Menu item
				text: "Type de contrat",
				itemId: "mnuTypeContrat"
			},
			{
				//Menu item
				text: "Métier",
				itemId: "mnuMetier"
			},
			{
				//Menu item
				text: "Catégorie",
				itemId: "mnuCategorie"
			},
			{
				//Menu item
				text: "Grade",
				itemId: "mnuGrade"
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
					itemId: "cboMainEtablis",
					margin: {
							top: 10,
							left:10	
							},
					fieldLabel: "Etablissement",
				//	allowBlank: false,		//false = mandatory filling
					editable: false,
					labelAlign: "top",
					labelWidth: G_VMAIN_CBO_WIDTH,	
					width: 		G_VMAIN_CBO_WIDTH,
 					displayField: "LibEts",
					valueField: "Kets",									
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
				//	allowBlank: true,			//false = red notification
					editable: false,
					labelAlign: "top",
					labelWidth: G_VMAIN_CBO_WIDTH,	
					width: 		G_VMAIN_CBO_WIDTH,
 					displayField: "LibUni",		//Alt use: LibUnic
					valueField: "Kuni",									
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
				//	allowBlank: false,					//false = mandatory filling
					editable: false,
					labelAlign: "top",
					labelWidth: G_VMAIN_CBO_WIDTH,	
					width: 		G_VMAIN_CBO_WIDTH,
 					displayField: "LibSubc",
					valueField: "Ksub",			
					store: App.store.create("App.Service.get_service", {
													autoLoad: true
												})  // Creation du store	
				},
				//*************************
				{
					xtype: "datefield",
					fieldLabel: "Date",
					labelAlign: "top",
//renderer DOES NOT WORK!!
					renderer: Ext.util.Format.dateRenderer('dd/mm/YYYY'),
//					renderer: Ext.util.Format.dateRenderer("Y-m-d"), //('m/d/Y'),
//					renderer: Ext.util.Format.dateRenderer('d/m/Y'),					
					itemId: "datMainDate",
					margin: {
							top: 10,
							left: 10,
							bottom: 10
					},
					labelWidth: G_VMAIN_CBO_WIDTH,
					width: 		G_VMAIN_CBO_WIDTH,
					allowBlank: false,
				},	 				
				//*************************
				{
					xtype: "button",		//xtype création d'un obj GUI
					itemId: "btnMainOk",	//xxxx"clickme",
					text: "Ok", 
					width: 50,
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

//MMMMMMMMMMMMMMMMMMMMMMMMM

//MMMMMMMMMMMMMMMMMMMMMMMMM
				
// *********** TEMP FIX START *******************************************	
				{	// Un panel avec un layout accordion
					xtype: 'panel',
					margin:20,
					title: 'Accordion Layout',
					width: 300,
					height: 300,
					defaults: {
						// applied to each contained panel
						bodyStyle: 'padding:15px'
					},
					layout: {
						// layout-specific configs go here
						type: 'accordion',
						titleCollapse: false,
						animate: true,
						activeOnTop: true
					},
					items: [
						{
							title: 'Panel 1',
							html: 'Panel content!',
							
							xtype: "button1",		//xtype création d'un obj GUI
							itemId: "btnMainOk1"
						},
						{
							title: 'Panel 2',
							html: 'Panel content!',
							
							xtype: "button2",		//xtype création d'un obj GUI
							itemId: "btnMainOk2",							
						},
						{
							title: 'Panel 3',
							html: 'Panel content!'
							
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
						//invocation de la méthode dans le web service "EffectifPhysique.cherche()" qui a été préchargé avec un paramétre
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
					store: App.store.create("App.GTotalEffectifPhysique.cherche", {autoload: true})
/*
					App.store.create(
					fields: [ 
						//	'Service', 'Cat', 'Type','Valeur'
							'Service', 'Cat','Valeur'
							],				
					data: 	[
							{	'Service' : "SG",
							'Cat':	"A+",
						//	'Type': "A",
							'Valeur': "3"
							}
							] 
					)
 */					

				}//,	//grid2_end		
				]
				}
						}
					]
				},

/* OLI	
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
						//invocation de la méthode dans le web service "EffectifPhysique.cherche()" qui a été préchargé avec un paramétre
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
					store: App.store.create("App.GTotalEffectifPhysique.cherche", {autoload: true})
/*
					App.store.create(
					fields: [ 
						//	'Service', 'Cat', 'Type','Valeur'
							'Service', 'Cat','Valeur'
							],				
					data: 	[
							{	'Service' : "SG",
							'Cat':	"A+",
						//	'Type': "A",
							'Valeur': "3"
							}
							] 
					)
 */					

				}//,	//grid2_end		
				]
				}
 OLI	*/			
// *********** TEMP FIX END *********************************************			
			]	//CENTER 
	},
	]	
});

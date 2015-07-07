/********************************************************
 *
 *	Vue principale de l'application. Elle est gérée par le controlleur principal.
 *
 *	Fonction: Afficher les composants graphiques de la fenêtre ( menu principale & composants de la fenêtre principale).
 *
 ***********************************************************/
App.view.define('VMain', {

    extend: 'Ext.Panel',
    alias: 'widget.mainform',
    border: false,

    layout: "border",

    items: [{
            //*************************************** NORTH - Menus ****************************
            region: 'north',
            height: 25,
            minHeight: 25,
            border: false, //cache la ligne de bordure 
            baseCls: 'cls-header',
            xtype: "Menu", //xtype création d'un obj GUI
            itemId: "MenuPanel",
            menu: [{
                //Menu Agents
                text: "Agents",
                menu: [{
                    //Menu item
                    text: "Modification",
                    itemId: "mnuModAgent"
                }]
            }, {
                //Menu Maintenance
                text: "Maintenance",
                menu: [{
                    //Menu item
                    text: "Résidence administrative",
                    itemId: "mnuResAdmin"
                }, {
                    //Menu item
                    text: "Thématique",
                    itemId: "mnuThematique"
                }, {
                    //Menu item
                    text: "Domaine d'intervention",
                    itemId: "mnuDomaineInterv"
                }, {
                    //Menu item
                    text: "Type de contrat",
                    itemId: "mnuTypeContrat"
                }, {
                    //Menu item
                    text: "Métier",
                    itemId: "mnuMetier"
                }, {
                    //Menu item
                    text: "Catégorie",
                    itemId: "mnuCategorie"
                }, {
                    //Menu item
                    text: "Grade",
                    itemId: "mnuGrade"
                }]
            }]
        },
        //********************************************* CENTER *******************************
        {
            region: "center",
            split: true,
			layout: "vbox",
            items: [{ // 1er ligne
                    layout: "hbox",
                    border: true, //false,
                    width: "100%",
					height: 80,
                    items: [{
                            xtype: "combo",
                            itemId: "cboMainEtablis",
                            margin: {
                                top: 10,
                                left: 10
                            },
                            fieldLabel: "Etablissement",
                            //	allowBlank: false,		//false = mandatory filling
                            editable: false,
                            labelAlign: "top",
                            labelWidth: G_VMAIN_CBO_WIDTH,
                            width: G_VMAIN_CBO_WIDTH,
                            displayField: "LibEts",
                            valueField: "Kets",
                            store: App.store.create("App.Etablis.get_etablis", {
                                    autoLoad: true
                                }) // Creation du store				
                        },
                        //*************************
                        {
                            xtype: "combo",
                            itemId: "cboMainUnite",
                            margin: {
                                top: 10,
                                left: 10
                            },
                            fieldLabel: "Unité",
                            //	allowBlank: true,			//false = red notification
                            editable: false,
                            labelAlign: "top",
                            labelWidth: G_VMAIN_CBO_WIDTH,
                            width: G_VMAIN_CBO_WIDTH,
                            displayField: "LibUni", //Alt use: LibUnic
                            valueField: "Kuni",
                            store: App.store.create("App.Unite.get_unite") // Creation du store
                        }, {
                            xtype: "combo",
                            itemId: "cboMainService",
                            margin: {
                                top: 10,
                                left: 10
                            },
                            fieldLabel: "Service",
                            //	allowBlank: false,					//false = mandatory filling
                            editable: false,
                            labelAlign: "top",
                            labelWidth: G_VMAIN_CBO_WIDTH,
                            width: G_VMAIN_CBO_WIDTH,
                            displayField: "LibSubc",
                            valueField: "Ksub",
                            store: App.store.create("App.Service.get_service") // Creation du store	
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
                            width: G_VMAIN_CBO_WIDTH,
                            allowBlank: false,
                        },
                        //*************************
                        {
                            xtype: "button", //xtype création d'un obj GUI
                            itemId: "btnMainOk", //xxxx"clickme",
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
				{
					layout: "vbox",
					flex: 1,
					width: "100%",
					border: false,
					items: [
					//Section supérieure
					{
						layout: "hbox",
						width: "100%",	//
						flex: 1,		//takes up all height
						border: false,
						items: [
						//grid haut gauche
						{
							flex: 1,
							title: "Effectif réel",
							titleAlign : "center",
							height: "100%",
							xtype: "grid",	
							itemId: "gridTotalsPresent",
							columns: [
							{
								text: "Service",
								dataIndex: "lib_departement_ep",
								hidden: true
					//			flex: 1
							},
							{
								text: "CatFP",
								dataIndex: "lib_categorie_ep"
								
							},
							/*{
								text: "Effectif",
								dataIndex: "count_agent"
							}*/
							{	//calcule la somme pour ce service
								header: "Effectif", 
								width: 100, 
								sortable: true, 
								align:"right", 
								renderer:  Ext.util.Format.numberRenderer('0'), 
								dataIndex: 'count_agent',
								summaryType: 'sum',
								summaryRenderer:function(v){
									return "<b>"+v+"</b>";
								}					
							}
							],
							features: [
							{
								groupHeaderTpl:  '{columnName}: {name}',
								ftype: 'groupingsummary'				
							} 
							],
							store: App.store.create("App.EffectifPhysique.get_effPresent",
							{
								groupField:  "lib_departement_ep",
								listeners: {
							//		load: function(p) { alert('Groupé');}
								}
							}
							)
						},
						//grid haut droit
						{
							flex: 1,
							title: "Effectif ETP",
							titleAlign : "center",
							height: "100%",
							xtype: "grid",							
							columns: [
							{
								text: "Service"
							},
							{
								text: "CatFP"
							},
							{
								text: "ETP"
							}							
							],
							store: App.store.create({
								fields: [],
								data: []
							})
						}
						]
					},
					//Section inférieure
					{
						layout: "hbox",
						width: "100%",
						flex: 1,
						border: false,
						items: [
						//graph bas gauche
						{	
 							flex: 1,
							height: "100%",
							border: true,
				//			html: "22", 
							xtype: "chart",
							           style: 'background:#fff',
            animate: true,
            shadow: true,
      //      store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Number of Hits',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
                  }
                },
				],			
							
							
							
							
/* Ext.define('WeatherPoint', {
    extend: 'Ext.data.Model',
 //   fields: ['temperature', 'date']	
    fields: ['lib_departement_ep', 'lib_categorie_ep']
}); */


/*					
							flex: 1,
							title: "GRAND TOTAL Effectif réel",
							titleAlign : "center",
							height: "100%",
							xtype: "grid",	
							itemId: "gridGdTotalsPresent",
							columns: [
							{
								text: "Département",
								dataIndex: "lib_departement_ep",
					//			flex: 1
							},
							{
								text: "Grand Total",
								dataIndex: "GrandTotal"		//sum(count_agent) as GrandTotal								
							}
							],
*/	
				//		store: App.store.create("App.EffectifPhysique.get_gdTotalEffPresent")	
						store: App.store.create("App.EffectifPhysique.get_effPresent")
						
/* Ext.create('Ext.chart.Chart', {
   renderTo: Ext.getBody(),
   width: 400,
   height: 300,
 //  store: store
 store: App.store.create("App.EffectifPhysique.get_effPresent")
 
}); */

						
						},
						//graph bas droit
						{
							flex: 1,
							height: "100%",
							border: true,
							html: "11"
						}						
						]						
					}
					]					
				}
            ]
        }
    ]
});
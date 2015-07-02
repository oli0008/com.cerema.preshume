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
            items: [{ // 1er ligne
                    layout: "hbox",
                    border: true, //false,
                    width: "100%",
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
                    xtype: "grid",
                    itemId: "gridTotalsPresent",
                    title: "Effectif à dateXXX",
                    titleAlign: "center",
                    margin: 0,
                    columns: [{
                        text: "Unité",
                        dataIndex: "LibUnic"
                    }, {
                        text: "Catégorie",
                        dataIndex: "LibCgr"
                    }, {
                        text: "Total agent",
                        dataIndex: "agentTotal"
                    }],
                    store: App.store.create("App.EffectifPhysique.cherche")
                },

 

				
                //MMMMMMMMMMM
                {
                    height: 250,
                    //		width: "100%",
                    border: false,
                    items: [{
                        layout: "hbox",
                        //			width: "100%",
                        border: false,
                        items: [{
                                // Colonne inférieure gauche				
                                layout: "vbox",
                                flex: 1, //trouble with bottom space usage
                                items: [{
                                    xtype: "button", //"label",
                                    fieldLabel: "labelL1"
                                }, 
								{
                                    xtype: "button",
                                    fieldLabel: "buttonL1"
                                }, 
								{
                                    xtype: "button",
                                    fieldLabel: "buttonL2"
                                }]
                            },
                            // Colonne inférieure droite
                            {
                                layout: "vbox",
                                flex: 1,
                                items: [{
                                    xtype: "button", //"label",
                                    fieldLabel: "labelR1"
                                }, {
                                    xtype: "button",
                                    fieldLabel: "buttonR1"
                                }, {
                                    xtype: "button",
                                    fieldLabel: "buttonR2"
                                }]
                            }
                        ]
                    }]
                }
                //MMMMMMMMMMM
            ]
        }
    ]
});
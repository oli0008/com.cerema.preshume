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
                        //disabled: true,			//empéche de changer la valeur
                        labelAlign: "top",
                        labelWidth: G_VMAIN_CBO_WIDTH,
                        width: G_VMAIN_CBO_WIDTH,
                        displayField: "LibEts",
                        valueField: "Kets",
                        store: App.store.create("App.Etablis.get_etablis") // Creation du store				
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
                        renderer: Ext.util.Format.dateRenderer('dd/mm/yyyy'),
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

                ]
            }, {
                layout: "vbox",
                flex: 1,
                width: "100%",
                border: false,
                items: [
                    //Section supérieure
                    {
                        layout: "hbox",
                        width: "100%", //
                        flex: 1, //takes up all height
                        border: false,
                        items: [
                            //grid haut gauche
                            {
                                flex: 1,
                                title: "Effectif physique",
                                titleAlign: "center",
                                height: "100%",
                                xtype: "grid",
                                itemId: "gridEffectifPhysque",
                                columns: [{
                                        text: "Service",
                                        dataIndex: "lib_departement_ep",
                                        hidden: true
                                            //			flex: 1
                                    }, {
                                        text: "CatFP",
                                        dataIndex: "lib_categorie_ep"

                                    },
                                    /*{
								text: "Effectif",
								dataIndex: "count_agent"
							}*/
                                    { //calcule la somme pour ce service
                                        header: "Effectif",
                                        width: 100,
                                        sortable: true,
                                        align: "right",
                                        renderer: Ext.util.Format.numberRenderer('0'),
                                        dataIndex: 'count_agent',
                                        summaryType: 'sum',
                                        summaryRenderer: function(v) {
                                            return "<b>" + v + "</b>";
                                        }
                                    }
                                ],
                                features: [{
                                    groupHeaderTpl: '{columnName}: {name}',
                                    ftype: 'groupingsummary'
                                }],
                                store: App.store.create("App.EffectifPhysique.get_effectifPhysiquePresent", {
                                    groupField: "lib_departement_ep",
                                    listeners: {
                                        //		load: function(p) { alert('listeners: groupField1');}
                                    }
                                })
                            },
                            //grid haut droit						
                            {
                                flex: 1,
                                title: "Effectif ETP",
                                titleAlign: "center",
                                height: "100%",
                                xtype: "grid",
                                itemId: "gridEffectifETP",
                                columns: [{
                                        text: "Service",
                                        dataIndex: "lib_departement_etp",
                                        hidden: true
                                            //			flex: 1
                                    }, {
                                        text: "CatFP",
                                        dataIndex: "lib_categorie_etp"

                                    },
                                    /*{
								text: "Effectif",
								dataIndex: "count_agent"
							}*/
                                    { //calcule la somme pour ce service 
                                        header: "Effectif",
                                        width: 100,
                                        sortable: true,
                                        align: "right",
                                        renderer: Ext.util.Format.numberRenderer('0.00'),
                                        dataIndex: 'sum_quot', //'count_agent',
                                        summaryType: 'sum',
                                        summaryRenderer: function(v) {
                                            var t = String(v).split('.');
                                            if (t[1]) return t[0] + ',' + t[1].substr(0, 2);
                                            else return v + ',00';
                                        }
                                    }
                                ],
                                features: [{
                                    groupHeaderTpl: '{columnName}: {name}',
                                    ftype: 'groupingsummary'
                                }],
                                store: App.store.create("App.EffectifETP.get_effectifETPPresent", {
                                    groupField: "lib_departement_etp",
                                    listeners: {
                                        //		load: function(p) { alert('listeners: groupField2');}
                                    }
                                })
                            },
                        ]
                    },
                    //---------------------------------------------------------				
                    //Section inférieure
                    {
                        layout: "hbox",
                        width: "100%",
                        flex: 1,
                        border: false,
                        items: [
                            //----------------------graph bas gauche
                            {
                                flex: 1,
                                height: "100%",
                                border: true,
                                xtype: "chart",
								itemId: "chartEffectifPhysique",
                                style: 'background:#fff',
                                store: App.store.create("App.EffectifPhysique.get_effectifPhysiquePresent"),
                                axes: [{
                                    type: 'Numeric',
                                    position: 'left',
                                    fields: ['lib_categorie_ep'],
                                    label: {
                                        renderer: Ext.util.Format.numberRenderer('0')
                                    },
                                    title: "Nombre d'agents",
                                    grid: true,
                                    minimum: 0
                                }, {
                                    type: 'Category',
                                    position: 'bottom',
                                    fields: ['lib_departement_ep'],
                                    title: "Catégories FP"
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
                                            this.setTitle(storeItem.get('lib_departement_ep') + ': ' + storeItem.get('lib_categorie_ep') + ' $');
                                        }
                                    },
                                    label: {
                                        display: 'insideEnd',
                                        'text-anchor': 'middle',
                                        field: 'lib_categorie_ep',
                                        renderer: Ext.util.Format.numberRenderer('0'),
                                        orientation: 'vertical',
                                        color: '#333'
                                    },
                                    xField: 'lib_categorie_ep',
                                    yField: 'lib_categorie_ep'
                                }],
                            },
                            //----------------------graph bas droit
                            {
                                flex: 1,
                                height: "100%",
                                border: true,
                                xtype: "chart",
                                style: 'background:#fff',
                                store: App.store.create("App.EffectifETP.get_effectifETPPresent"),
                                axes: [{
                                    type: 'Numeric',
                                    position: 'left',
                                    fields: ['lib_categorie_etp'],
                                    label: {
                                        renderer: Ext.util.Format.numberRenderer('0,0')
                                    },
                                    title: "Nombre d'agents",
                                    grid: true,
                                    minimum: 0
                                }, {
                                    type: 'Category',
                                    position: 'bottom',
                                    fields: ['lib_departement_etp'],
                                    title: "Catégories FP"
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
                                            this.setTitle(storeItem.get('lib_departement_etp') + ': ' + storeItem.get('lib_categorie_etp') + ' $');
                                        }
                                    },
                                    label: {
                                        display: 'insideEnd',
                                        'text-anchor': 'middle',
                                        field: 'lib_categorie_etp',
                                        renderer: Ext.util.Format.numberRenderer('0'),
                                        orientation: 'vertical',
                                        color: '#333'
                                    },
                                    xField: 'lib_departement_etp',
                                    yField: 'lib_categorie_etp'
                                }],
                            }
                        ]
                    }
                ]
            }]
        }
    ]
});


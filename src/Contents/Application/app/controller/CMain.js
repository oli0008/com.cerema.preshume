/**************************************************
 *
 *	Controlleur principal
 *
 *	Fonction: Gérer sa fenêtre et ces événements. Le controlleur principal gére aussi les fenêtres secondaires.
 *
 **************************************************/

/******************
 * Déclaration des constantes globales à l'application
 ******************/
var G_VMAIN_CBO_WIDTH = 210; //Définition de la largeur des combos de VMain
//var G_DTERMED = 2; 					//valeur de etablissement.Kets = DterMed
/******************
 * Déclaration des variables globales à l'application
 ******************/
// var VMain_label_width = 	350;
// var VAgent_width = 		350;

//var re = new RegExp ("[0-9]{5}");	//("#[0-9]{5}#");


App.controller.define('CMain', {

    views: [
        "VMain"
    ],

    models: [],

    init: function() {
            //declaration des évenements
            this.control({
                "menu>menuitem": {
                    click: "Menu_onClick"
                },
                "combo#cboMainEtablis": {
                    select: "valider_cboMainUnite"
                },
                "combo#cboMainUnite": {
                    select: "valider_cboMainService"
                },
                "button#btnMainOk": {
                    click: "calculerEffectifPresent"
                },
				"mainform": {
					render: "OnShow"
				}
            });

            App.init('VMain', this.onLoad);

        },
        Menu_onClick: function(p) {
            if (p.itemId) {
                if (p.itemId == "mnuModAgent")
                    this.openWindowModAgent();

                else if (p.itemId == "mnuResAdmin")
                    this.openWindowMaintResAdmin();
                else if (p.itemId == "mnuThematique")
                    this.openWindowMaintThematique();
                else if (p.itemId == "mnuDomaineInterv")
                    this.openWindowMaintDomainInterv();
                else if (p.itemId == "mnuTypeContrat")
                    this.openWindowMaintTypeContrat();
                else if (p.itemId == "mnuMetier")
                    this.openWindowMaintMetier();
                else if (p.itemId == "mnuCategorie")
                    this.openWindowMaintCategorie();
                else if (p.itemId == "mnuGrade")
                    this.openWindowMaintGrade();
            };
        },

        dummyFn: function(p, record) {
            alert('dummyFn() -- reached');
        },


        /*****************************************************
         *
         * Objectif: Afficher l'unité correspondante à l'établissement qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
        valider_cboMainUnite: function(p, record) {
            var Kets2 = App.get('combo#cboMainEtablis').getValue();
            //		console.log(App.get('combo#cboMainEtablis').getValue());
            //Efface les infos montrées (displayField) sur les 2 combos esclaves
            App.get('combo#cboMainUnite').setValue('');
            App.get('combo#cboMainService').setValue('');
            App.get('combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = Kets2;
            App.get('combo#cboMainUnite').getStore().load();
        },

        /*****************************************************
         *
         * Objectif: Afficher le service correspondant à l'unité qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner une unité affiche le service correspondant (cela active le store du service)
        valider_cboMainService: function(p, record) {
            var Kuni2 = App.get('combo#cboMainUnite').getValue();
            //		console.log(App.get('combo#cboMainUnite').getValue());
            //Efface l'info montrée (displayField) sur le combo esclave
            App.get('combo#cboMainService').setValue('');
            App.get('combo#cboMainService').getStore().getProxy().extraParams.id_Service = Kuni2;
            App.get('combo#cboMainService').getStore().load();
        },

        /*****************************************************
         *
         * Objectif: Calculer les effectifs présents. Cette méthode vérifie que les information déja stockées sont 
		 * encore valide ...
		 * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerEffectifPresent: function() {
            //on passe la valeur sélectionnée dans cboMainEtablis comme argument à la requette pour charger cboMainUnite
            //App.get('combo#cboMainUnite').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainEtablis').getValue();


            //on passe la valeur sélectionnée dans cboMainUnite comme argument à la requette pour charger cboMainService
            //App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainUnite').getValue();

            //

            // on charge le store avec une variable "recherche"
            tempVar = 1;
            //		console.log('** HERE **');
            //	App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
            //Passe un parametre au Store 
            App.get('grid#gridTotalsPresent').getStore().getProxy().extraParams.param_recherche = '11';
            // on rafraichit le store
            App.get('grid#gridTotalsPresent').getStore().load();

            /*
			//combo logic here
			// **************************************************************** 
			Selection Logique des combos
			E	U 	S 	
			0	0	0	tous les établissements
			1	0	0	par établissements
			1	1	0	par unité
			1	1 	1 	par service

			// ****************************************************************
		*/
        },


        /*****************************************************
         *
         * Objectif: Calculer les grands totaux des effectifs présents. 
         *
         ****************************************************/
        calculerGTotalEffectifPresent: function() {
            //run query on data in table effectifs_physique cf G_TotalPhyPres.sql

		},


        /*****************************************************
         *
         * Objectif: Calculer les grands totaux des effectifs présents. 
         *
         ****************************************************/
        calculerGTotalETPPresent: function() {
            //run query on data in table effectifs_ETP cf G_TotalETPPres.sql

		},
			
		
        /*****************************************************
         *
         * Objectif: Calculer les effectifs future. Cette méthode
         * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerEffectifFuture: function() {
            alert('clic sur mnuEffectifFuture -- TODO');
        },

        /*****************************************************
         *
         * Objectif: Calculer les ETP présent. Cette méthode
         * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerETPPresent: function() {
            alert('clic sur mnuETPPresent -- TODO');
        },

        /*****************************************************
         *
         * Objectif: Calculer les ETP future. Cette méthode
         * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerETPFuture: function() {
            alert('clic sur mnuETPFuture -- TODO');
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de modification d'un agent.
         *
         ****************************************************/
        openWindowModAgent: function() {
            App.view.create('main.VAgent', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des résidence administratives.
         *
         ****************************************************/
        openWindowMaintResAdmin: function() {

            App.view.create('main.VMaintResAdmin', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des Thématiques.
         *
         ****************************************************/
        openWindowMaintThematique: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des domaines d'intervention.
         *
         ****************************************************/
        openWindowMaintDomainInterv: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des types de contrats.
         *
         ****************************************************/
        openWindowMaintTypeContrat: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des métiers.
         *
         ****************************************************/
        openWindowMaintMetier: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des catégories.
         *
         ****************************************************/
        openWindowMaintCategorie: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },


        /*****************************************************
         *
         * Objectif: Rediriger vers la fenêtre de maintenance des gardes.
         *
         ****************************************************/
        openWindowMaintGrade: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },


        /*****************************************************
         *
         * Objectif: .
         *
         ****************************************************/
        OnShow: function() {
            alert('onShow()');
            this.calculerEffectifPresent();
            //		this.calculerETPPresent();
            /* 
		App.view.create('main.VContratTravail',{	 		
			modal:true
		}).show();	
 */
        },

        /*****************************************************
         *
         * Objectif: calcule les effectifs et les ETP présent à l'ouverture de l'application.
         *
         ****************************************************/
        onLoad: function() {

            // form loaded	
   //         alert('onLoad()');
            //onShow();
            //this.		calculerEffectifPresent();
            //		this.calculerETPPresent();
            /* 				
//on date_change 
		this.calculerEffectifFuture();
		this.calculerETPFuture();		
 */
        }


});
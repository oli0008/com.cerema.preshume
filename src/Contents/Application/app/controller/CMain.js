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
var TODAY = new Date();		
var G_VMAIN_CBO_WIDTH = 210; 	//Définition de la largeur des combos de VMain
var G_DTERMED = 1; 				//valeur de etablissement.Kets = DterMed

/******************
 * Déclaration des variables globales à l'application
 ******************/
var selData = {
	Kets:	-1,
	Kuni:	-1,
	Ksub:	-1,
	sd:		null,
	ed:		null 
};

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
                "mainform combo#cboMainEtablis": {
                    select: "select_cboMainEtablis"
                },
                "mainform combo#cboMainUnite": {
                    select: "select_cboMainUnite"
                },
                "mainform combo#cboMainService": {
                    select: "select_cboMainService"
                },
                "mainform datefield#datMainDate": {
                    select: "analyser_date"
                },
				"mainform": {
					render: "onShow"
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

       /*****************************************************
         * Objectif: 
		 * Initialiser tous les combos.
         *
         ****************************************************/
		 initCombos: function(p) {

			//Régle le combo Etablissement sur DterMed
			var KetsTemp = G_DTERMED; 		 
			var cbo = App.get('mainform combo#cboMainEtablis');
			cbo.getStore().load();
			cbo.setValue(KetsTemp);
			cbo.setDisabled(true);
		
            //Efface les infos montrées (displayField) sur les 2 combos esclaves
            App.get('mainform combo#cboMainUnite').setValue('');
            App.get('mainform combo#cboMainService').setValue('');
            App.get('mainform combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
            App.get('mainform combo#cboMainUnite').getStore().load();	
		},
		 
        /*****************************************************
         * Objectif: 
		 * Décider en fonction de la date selectionnée si on affiche les effectifs présent ou futur.
		 * Si la date est <= à aujourd'hui on affiche les données sauvegardées le 1er du mois. (effectifs physique et ETP présents)
		 * Si la date est > aujourd'hui on calcule les effectifs physique et ETP futurs.  
         *
         ****************************************************/		 
		 analyser_date:function(){
			var s = App.get('mainform datefield#datMainDate').getValue();	
			
			if (s == null){
				selData.sd = TODAY;			
				selData.ed = TODAY;				
			} 

			if (s <= TODAY){
				this.afficherEffectifPhysique();
				this.afficherEffectifETP();
			} else { 
				this.calculerEffectifFuture();
				this.calculerETPFuture();
			} 
		 },

        /*****************************************************
         * Objectif: 
		 * Initialiser la date de calcul si necessaire. 
		 * Si l'utilisateur n'a pas sélectionné de date ou si elle est vide, elle est fixée à la date d'aujourd'hui.
         * 
         ****************************************************/
        initDateDeCalcule: function() {
           var d = App.get('mainform datefield#datMainDate').getValue();
		   
			if (d == null){
				selData.sd = TODAY;			
				selData.ed = TODAY;	
			}
		},
		
        /*****************************************************
         * Objectif: 
		 * Afficher l'unité correspondante à l'établissement qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
        select_cboMainEtablis: function(p, record) {
            var Kets2 = App.get('mainform combo#cboMainEtablis').getValue();

            //Efface les infos montrées (displayField) sur les 2 combos esclaves
            App.get('mainform combo#cboMainUnite').setValue('');
			selData.Kuni = -1;
            App.get('mainform combo#cboMainService').setValue('');
			selData.Ksub = -1;
            App.get('mainform combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = Kets2;
            App.get('mainform combo#cboMainUnite').getStore().load();
			
			//met à jour l'affichage des effectifs
 
			this.analyser_date();
        },

        /*****************************************************
         * Objectif: 
		 * Afficher le service correspondant à l'unité qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner une unité affiche le service correspondant (cela active le store du service)
        select_cboMainUnite: function(p, record) {
			
            var Kuni2 = App.get('combo#cboMainUnite').getValue();
			
            //Efface l'info montrée (displayField) sur le combo esclave
            App.get('mainform combo#cboMainService').setValue('');
			selData.Ksub = -1;
            App.get('mainform combo#cboMainService').getStore().getProxy().extraParams.id_Service = Kuni2;
            App.get('mainform combo#cboMainService').getStore().load();
					
			//met à jour l'affichage des effectifs
			selData.Kuni = Kuni2;
			this.analyser_date();
        },

        /*****************************************************
         * Objectif: 
		 * Afficher le service correspondant à l'unité qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner une unité affiche le service correspondant (cela active le store du service)
        select_cboMainService: function(p, record) {
			
            var Kuni2 = App.get('combo#cboMainUnite').getValue();
			var Ksub2 = App.get('combo#cboMainService').getValue();
			
			//met à jour l'affichage des effectifs
			selData.Kuni = Kuni2;
			selData.Ksub = Ksub2;
			this.analyser_date();
        },

        /*****************************************************
         * Objectif: 
		 * Calculer les effectifs présents. Cette méthode vérifie que les information déja stockées sont 
		 * encore valide ...
		 * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerEffectifPresent: function() {
			
            //Passe un parametre au Store 
            App.get('mainform grid#gridEffectifPhysque').getStore().getProxy().extraParams.param_recherche = 1;
            // on rafraichit le store
            App.get('mainform grid#gridEffectifPhysque').getStore().load();

        },

        /*****************************************************
         * Objectif: 
		 * Récupérer les effectifs Physque présents qui ont étés stockées pour le mois courrant. 
         *
         ****************************************************/
        afficherEffectifPhysique: function(chosenDate) { 
 
			//Relit les 3 combos et la date       
 			if (App.get('combo#cboMainEtablis').getValue()!="") 
				selData.Kets = App.get('combo#cboMainEtablis').getValue();
			else
				selData.Kets = -1;
			if (App.get('combo#cboMainUnite').getValue()!= "") 
				selData.Kuni = App.get('combo#cboMainUnite').getValue();
			else
				selData.Kuni = -1;
 			if (App.get('combo#cboMainService').getValue()!= "") 
				selData.Kserv = App.get('combo#cboMainService').getValue();
			else
				selData.Kserv = -1;
			if (App.get('datefield#datMainDate').getValue()!= "") {
				var d = App.get('datefield#datMainDate').getValue();
				this.prepareDate(d);
			}
	 		//met à jour le grid
			App.get('mainform grid#gridEffectifPhysque').getStore().getProxy().extraParams = selData;
            // on rafraichit le store
            App.get('mainform grid#gridEffectifPhysque').getStore().load();
			// mettre à jour le graphique 1
			console.log(selData);
			App.get('mainform chart#chartEffectifPhysique').getStore().getProxy().extraParams = selData;
			App.get('mainform chart#chartEffectifPhysique').getStore().load();
			// mettre à jour le graphique 2
			console.log(selData);
			App.get('mainform chart#chartETP').getStore().getProxy().extraParams = selData;
			App.get('mainform chart#chartETP').getStore().load();
        },

		 
        /*****************************************************
         * Objectif: 
		 * Récupérer les effectifs ETP présents qui ont étés stockées pour le mois courrant. 
         *
         ****************************************************/
        afficherEffectifETP: function(chosenDate) {
 		
			//Relit les 3 combos et la date       
 			if (App.get('combo#cboMainEtablis').getValue()!="") 
				selData.Kets=App.get('combo#cboMainEtablis').getValue();	
			else
				selData.Kets = -1;			
			if (App.get('combo#cboMainUnite').getValue()!= "") 
				selData.Kuni = App.get('combo#cboMainUnite').getValue();
			else
				selData.Kuni = -1;
 			if (App.get('combo#cboMainService').getValue()!= "") 
				selData.Kserv = App.get('combo#cboMainService').getValue();
			else
				selData.Kserv = -1;
			if (App.get('datefield#datMainDate').getValue()!= "") {
				var d = App.get('datefield#datMainDate').getValue();
				this.prepareDate(d);
			}
	 		//met à jour le grid
			App.get('mainform grid#gridEffectifETP').getStore().getProxy().extraParams = selData;
            // on rafraichit le store
            App.get('mainform grid#gridEffectifETP').getStore().load();				
        },


		
        /*****************************************************
         * Objectif: 
		 * Reformater le date en String format pour requettes SQL.
		 * Prend en entrée un paramétre, la date selectionnée.
		 * Ecrit les dates de début et de fin dans un objet global.
         *
         ****************************************************/
		 prepareDate: function(chosenDate) {
			//Si on calcule il n'y a qu'une date 
			if (chosenDate > TODAY) {
				selData.sd = chosenDate.toString("yyyy-MM-dd");
				selData.ed = null;			
			} else {	//On lit de la table donc il y a une date de début et de fin)
				//construction des dates de recherche 
				var dd = TODAY; 	
				var y = dd.getFullYear();
				var m = dd.getMonth() + 1;		//month are zero based
				var maxDay = dd.getDaysInMonth(y,m);

				selData.sd = y + '-' + m + '-' + '01';			
				selData.ed = y + '-' + m + '-' + maxDay;
			}
		},				

        /*****************************************************
         *
         * Objectif: Calculer les grands totaux des effectifs présents pour le mois courrant.
         *
         ****************************************************/
/*		 
        calculerGTotalEffectifPresent: function() {
            //run query on data in table effectifs_physique cf G_TotalPhyPres.sql
           App.get('grid#gridGdTotalsPresent').getStore().load();
		},
*/		
		
        /*****************************************************
         * Objectif: 
		 * Calculer les effectifs future. Cette méthode
         * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerEffectifFuture: function(thisDate) {
            alert('calculerEffectifFuture -- TODO');
        },

        /*****************************************************
         * Objectif: 
		 * Calculer les ETP future. Cette méthode
         * calcule les totaux par catégories d'agent et les totaux pour chaque unité.
         *
         ****************************************************/
        calculerETPFuture: function(thisDate) {
            alert('calculerETPFuture -- TODO');
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de modification d'un agent.
         *
         ****************************************************/
        openWindowModAgent: function() {
            App.view.create('main.VAgent', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des résidence administratives.
         *
         ****************************************************/
        openWindowMaintResAdmin: function() {

            App.view.create('main.VMaintResAdmin', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 *Rediriger vers la fenêtre de maintenance des Thématiques.
         *
         ****************************************************/
        openWindowMaintThematique: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des domaines d'intervention.
         *
         ****************************************************/
        openWindowMaintDomainInterv: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des types de contrats.
         *
         ****************************************************/
        openWindowMaintTypeContrat: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des métiers.
         *
         ****************************************************/
        openWindowMaintMetier: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des catégories.
         *
         ****************************************************/
        openWindowMaintCategorie: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },


        /*****************************************************
         * Objectif: 
		 * Rediriger vers la fenêtre de maintenance des gardes.
         *
         ****************************************************/
        openWindowMaintGrade: function() {
            App.view.create('main.VContratTravail', {
                modal: true
            }).show();
        },

       /*****************************************************
         * Objectif: 
		 * Au démarrage de l'application intitialise la fenêtre principale.
		 * 1 - Initialiser tous les combos.
		 * 2 - Initialiser le date.
		 * 3 - Lire les effectifs physique et ETP présent.
		 * 4 - Afficher les graphique des effectifs. 
         *
         ****************************************************/
        onShow: function(p, record) {
	//		 var chosenDate = null;
	//		 this.createDates();
			 
			this.initCombos();
		//	chosenDate = 
			this.initDateDeCalcule();
						
			this.afficherEffectifPhysique();
			this.afficherEffectifETP(); 
		},

        /*****************************************************
         * Objectif: NOT USED *** 
         *
         ****************************************************/
        onLoad: function() {
            // form loaded	
         //   alert('onLoad()');
        }


});
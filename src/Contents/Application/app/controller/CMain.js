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
var TODAY = new Date().toString("yyyy-MM-dd");			//("yyyy-MM-dd") ==  "2008-04-13"

var G_VMAIN_CBO_WIDTH = 210; 	//Définition de la largeur des combos de VMain
var G_DTERMED = 1; 				//valeur de etablissement.Kets = DterMed
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
                "mainform button#btnMainOk": {
					click: "afficherEffectifPhysique"
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
		 * Au démarrage de l'application intitialise la fenêtre principale.
		 * 1 - Initialiser tous les combos.
		 * 2 - Initialiser le date.
		 * 3 - Lire les effectifs physique et ETP présent.
		 * 4 - Afficher les graphique des effectifs. 
         *
         ****************************************************/
		 initMainForm: function(p, record) {
			 var chosenDate = null;
			 
			this.initCombos();
			chosenDate = this.initDateDeCalcule();
// alert('chosenDateMAIN = ' + chosenDate);
			
	//		this.lireCombos(p);
		//	this.afficherEffectifETP(chosenDate);
 
			this.afficherEffectifPhysique(chosenDate);
			this.afficherEffectifETP(chosenDate); 
		 },

//****	
       /*****************************************************
         * Objectif: 
         *
         ****************************************************/	 
		 truncateDate: function(d) {
 alert('truncateDate: d= ' + d);
			 var td = String(d).split(' ');
 alert('truncateDate: td[0]= ' + td[0]);
			 return td[0];
		 },


        /*****************************************************
         * Objectif: 
		 * Au démarrage de l'application intitialise lles 3 combos.
		 * Régle le combo Etablissement sur DTerMed et efface l'affichage des combos Unite et Service.
         *
         ****************************************************/
		 initCombos: function(p) {

// alert('initCombos');

			//Régle le combo Etablissement sur DterMed
			var KetsTemp = G_DTERMED; 		 
			App.get('mainform combo#cboMainEtablis').setValue(KetsTemp);
		
            //Efface les infos montrées (displayField) sur les 2 combos esclaves
            App.get('mainform combo#cboMainUnite').setValue('');
            App.get('mainform combo#cboMainService').setValue('');
            App.get('mainform combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = KetsTemp;
            App.get('mainform combo#cboMainUnite').getStore().load();	
		},

        /*****************************************************
         * Objectif: 
		 * Au démarrage de l'application intitialise la fenêtre principale.
		 * 1 - Initialiser tous les combos.
         *
         ****************************************************/
		 lireCombosUnite: function(p) {

 alert('lireCombosUnite');
		 },

        /*****************************************************
         * Objectif: 
		 * Au démarrage de l'application intitialise la fenêtre principale.
		 * 1 - Initialiser tous les combos.
         *
         ****************************************************/
		 lireCombosService: function(p) {

 alert('lireCombosService');
		 },
		 
//***		 
        /*****************************************************
         * Objectif: 
		 * Décider en fonction de la date selectionnée si on affiche les effectifs présent ou futur.
		 * Si la date est <= à aujourd'hui on affiche les données sauvegardées le 1er du mois. (effectifs physique et ETP présents)
		 * Si la date est > aujourd'hui on calcule les effectifs physique et ETP futurs.  
         *
         ****************************************************/		 
		 analyser_date:function(){
			var s = App.get('mainform datefield#datMainDate').getValue();
alert('analyser_date1:s= ' + s);				
			if (s == null){
				selectedDate = TODAY;  // defaults to TODAY		
			} else { 
			 alert('analyser_date333');
				selectedDate = s.toString("yyyy-MM-dd");
			}
 alert('analyser_date2:selectedDate= ' + selectedDate);			
			if (selectedDate <= TODAY){
alert('analyser_date1:TODAY= ' + selectedDate);
				this.afficherEffectifPhysique(TODAY);
				this.afficherEffectifETP(TODAY);
			} else {
				this.calculerEffectifFuture(selectedDate);
				this.calculerETPFuture(selectedDate);
			}
		 },

        /*****************************************************
         * Objectif: 
		 * Lire la date de calcul. 
		 * Si l'utilisateur n'a pas sélectionné de date ou si elle est vide, elle est fixée à la date d'aujourd'hui.
         *
         ****************************************************/
        initDateDeCalcule: function() {
           var selectedDate = App.get('mainform datefield#datMainDate').getValue();
		   
			if (selectedDate == null){
				selectedDate = TODAY;    // defaults to today	
			}
		   return (selectedDate.toString("yyyy-MM-dd") );
		},
		
        /*****************************************************
         * Objectif: 
		 * Afficher l'unité correspondante à l'établissement qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner un établissement affiche l'unité correspondante (cela active le store de l'unité)
        select_cboMainEtablis: function(p, record) {
            var Kets2 = App.get('mainform combo#cboMainEtablis').getValue();
            //		console.log(App.get('mainform combo#cboMainEtablis').getValue());
            //Efface les infos montrées (displayField) sur les 2 combos esclaves
            App.get('mainform combo#cboMainUnite').setValue('');
            App.get('mainform combo#cboMainService').setValue('');
            App.get('mainform combo#cboMainUnite').getStore().getProxy().extraParams.id_Etablis = Kets2;
            App.get('mainform combo#cboMainUnite').getStore().load();
			
			//met à jour l'affichage des effectifs
alert(' select_cboMainEtablis -- NOT USED');
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
//console.log(App.get('combo#cboMainUnite').getValue());
console.log('Kuni2 =' + Kuni2 );
            //Efface l'info montrée (displayField) sur le combo esclave
            App.get('mainform combo#cboMainService').setValue('');
            App.get('mainform combo#cboMainService').getStore().getProxy().extraParams.id_Service = Kuni2;
            App.get('mainform combo#cboMainService').getStore().load();
			
			//met à jour l'affichage des effectifs
alert(' select_cboMainUnite');
			this.analyser_date();
        },

        /*****************************************************
         * Objectif: 
		 * Afficher le service correspondant à l'unité qui vient d'être sélectionnée.
         *
         ****************************************************/
        //Sélectionner une unité affiche le service correspondant (cela active le store du service)
        select_cboMainService: function(p, record) {
/*             var Kuni2 = App.get('combo#cboMainUnite').getValue();
            //		console.log(App.get('combo#cboMainUnite').getValue());
            //Efface l'info montrée (displayField) sur le combo esclave
            App.get('mainform combo#cboMainService').setValue('');
            App.get('mainform combo#cboMainService').getStore().getProxy().extraParams.id_Service = Kuni2;
            App.get('mainform combo#cboMainService').getStore().load();
			 */
			//met à jour l'affichage des effectifs
alert(' select_cboMainService');
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
            //on passe la valeur sélectionnée dans cboMainEtablis comme argument à la requette pour charger cboMainUnite
            //App.get('mainform combo#cboMainUnite').getStore().getProxy().extraParams.recherche = App.get('mainform combo#cboMainEtablis').getValue();


            //on passe la valeur sélectionnée dans cboMainUnite comme argument à la requette pour charger cboMainService
            //App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainUnite').getValue();

            //

            // on charge le store avec une variable "recherche"
            tempVar = 1;
            //		console.log('** HERE **');
            //	App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
            //Passe un parametre au Store 
            App.get('mainform grid#gridEffectifPhysque').getStore().getProxy().extraParams.param_recherche = 1;
            // on rafraichit le store
            App.get('mainform grid#gridEffectifPhysque').getStore().load();

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
         * Objectif: 
		 * Récupérer les effectifs Physque présents qui ont étés stockées pour le mois courrant. 
         *
         ****************************************************/
        afficherEffectifPhysique: function(chosenDate) {
            //on passe la valeur sélectionnée dans cboMainEtablis comme argument à la requette pour charger cboMainUnite
            //App.get('combo#cboMainUnite').getStore().getProxy().extraParams.recherche = App.get('mainform combo#cboMainEtablis').getValue();

            //on passe la valeur sélectionnée dans cboMainUnite comme argument à la requette pour charger cboMainService
            //App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainUnite').getValue();

            // on charge le store avec une variable "recherche"
            //	App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
			
// MULTIPLE PARAMETRES ****************************
			var data = {
				Kets:	G_DTERMED,
				sd:		'2015-07-01',
				ed:		'2015-07-31'
			};
//	alert('data= ' + data.Kets + ', sd=' + data.sd + ', ed=' + data.ed );
			
            //Passe un parametre au Store 
            App.get('mainform grid#gridEffectifPhysque').getStore().getProxy().extraParams.Kets = G_DTERMED; //'1';
 //test          App.get('grid#gridEffectifPhysque').getStore().getProxy().extraParams.data; //'1';
            // on rafraichit le store
            App.get('mainform grid#gridEffectifPhysque').getStore().load();
	//		this.calculerGTotalEffectifPresent();
        },		

        /*****************************************************
         * Objectif: 
		 * Récupérer les effectifs ETP présents qui ont étés stockées pour le mois courrant. 
         *
         ****************************************************/
        afficherEffectifETP: function(chosenDate) {
            //on passe la valeur sélectionnée dans cboMainEtablis comme argument à la requette pour charger cboMainUnite
            //App.get('combo#cboMainUnite').getStore().getProxy().extraParams.recherche = App.get('mainform combo#cboMainEtablis').getValue();

            //on passe la valeur sélectionnée dans cboMainUnite comme argument à la requette pour charger cboMainService
            //App.get('grid#grid1').getStore().getProxy().extraParams.recherche = App.get('combo#cboMainUnite').getValue();

            // on charge le store avec une variable "recherche"
            //	App.get('grid#grid1').getStore().getProxy().extraParams.recherche=App.get('textfield#text1').getValue();
            //Passe un parametre au Store 
 //           App.get('grid#gridEffectifPhysque').getStore().getProxy().extraParams.param_recherche = '11';
            // on rafraichit le store
            App.get('mainform grid#gridEffectifETP').getStore().load();
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
		 * Gére l'affichage initial de la page principale au démarrage de l'application.
         *
         ****************************************************/
        onShow: function() {
        //    alert('onShow()');
			this.initMainForm();
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
/********************************************************
*
*	Vue gérée par le controlleur CAgent.
*
*	Fonction: Afficher les composants graphiques de la fenêtre "Modification agent".
*
***********************************************************/

App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 600,
    width: 750,	//width: 720
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Modification Agent',

	bbar:[
	//Bottom bar buttons
	{
		xtype: "button",
		itemId: "btnAgentAnnuler", 
		text: "Annuler",
	},
/* TODO - Rollback() */	
//	'->',			//Met les autres éléments du coté droit
	{
		xtype: "button",
		itemId: "btnAgentEnregistrer", 
		text: "Enregistrer",
	}
/* TODO - Commit() */	

	],
/* 
	tbar:[
	//Top bar buttons
	'->',			//Met les autres éléments du coté droit
	{
		xtype: "button",
		itemId: "btnAgentSupprimer", 
		text: "Supprimer",

	},
	{
		xtype: "button",
		itemId: "btnAgentNouveau", 
		text: "Nouveau",
	},
	],	
 */
 
/*  


 */ 
	border: false,
	layout: "vbox",
	
	items: [
	{
		layout: "hbox",
		width: "100%",
		border: false,
		items: [
		{
			xtype: "combo",	
			fieldLabel: "Etablissement",
			labelAlign: "top",			
			itemId: "cboAgentEtablis",
		//	allowBlank: false,		//false = mandatory filling
			editable: false,
			disabled: true,			//empéche de changer la valeur
			flex: 1,
			margin: 5,
			displayField: "LibEts",
			valueField: "Kets",
//			store: App.store.create("App.Etablis.get_etablis", {
			//Cette requette ne récupére que l'établissement DTerMed
			store: App.store.create("App.AgentsMod.get_etablis1", {	//autoLoad: true 
			}		) 		// Creation du store			
		},
		//*************************	
		{
			xtype: "combo",
			fieldLabel: "Unité",
			labelAlign: "top",
			itemId: "cboAgentUnite",
//			allowBlank: false,			//false = red notification
			editable: false,
			flex: 1,
			margin: 5,
			displayField: "LibUni",		//Alt use: LibUnic
			valueField: "Kuni",			
			store: App.store.create("App.Unite.get_unite", {
									autoLoad: true
			})  	// Creation du store
		},
		//*************************
		{
			xtype: "combo",
			fieldLabel: "Service",
			labelAlign: "top",
			itemId: "cboAgentService",
//			allowBlank: false,					//false = mandatory filling
			editable: false,
			flex: 1,
			margin: 5,
 			displayField: "LibSubc",
			valueField: "Ksub",				
			store: App.store.create("App.Service.get_service", {
									autoLoad: true
			})  // Creation du store			
		}
		]
	},
	//*************************
  	{
		xtype	: "grid",
		itemId	: "gridAgents",
		border: false,
		width: "100%",
		height: 130,
		columns: [ 
			// Certaines colonnes sont cachées pour permettre leur utilisation dans les requettes.
			{	
				text: "Kage",				
				dataIndex: "Kage", 
				hidden	: true		
			},
			{	
				text: "id_residence",				
				dataIndex: "id_residence", 
				hidden	: true		
			},
			{	
				text: "id_metier",				
				dataIndex: "id_metier", 
				hidden	: true		
			},
			{	
				text: "id_contrat_travail",				
				dataIndex: "id_contrat_travail", 
				hidden	: true		
			},
			{	
				text: "Nom",
				dataIndex: "Nom"		
			},
			{	
				text: "Prénom",			
				dataIndex: "Prenom"		
			},
			{	
				text: "Matricule", 		
				dataIndex: "Matri"		
			},
			{	
				text: "Etablissement",	
				dataIndex: "LibEts"		
			},
			{	text: "Unité",			
				dataIndex: "LibUnic"	
			},
			{	
				text: "Service", 		
				dataIndex: "LibSubC"	
			}
		],	
		// Temp fix: have set Kets = 1
		store: App.store.create("App.AgentsMod.get_agentsByEtablis") 	
// I can't make any sense of it !! It returns 1 row instead of 342 when  Kets = 1 !!! 
 //		store: App.store.create("App.AgentsMod.get_allAgents")	 
 	}, 
	//*************************
	{
		xtype: "textfield",
		fieldLabel: "Agent",
		labelAlign: "right",	
		itemId: "txtAgent", 
		margin: {
				left : 150
		},
//		labelWidth: 300,
		width:350,
//		allowBlank: false,
		disabled: true,		//empéche de changer la valeur
	},		 	
	//---------------------	
	{
		height: 250,
		width: "100%",
		border: false,
		items: [
		{
			layout: "hbox",
			width: "100%",
			border: false,
			items: [
			{
// Colonne inférieure gauche				
				layout: "vbox",
				flex: 1,			//trouble with bottom space usage
				items: [
				{
					xtype: "combo",
					fieldLabel: "Résidence administrative",
					labelAlign: "top",
					itemId: "cboAgentResAdmin",
					allowBlank: false,			//false = red notification
					editable: false,
//					flex: 1,
//					margin: 5,
					margin: {
							top: 10,
							left:10								
					}, 					
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,
					displayField: "rue_ville_residence",
					valueField: "id_residence",						
					store: App.store.create("App.AgentsMod.get_listResidence_admin", {
				  
													autoLoad: true
					})  	// Creation du store					
				},
				{
					xtype: "combo",
					fieldLabel: "Métier",
					labelAlign: "top",
					allowBlank: false,
					editable: false,
					itemId: "cboAgentMetier",
					margin: {
							top: 10,
							left:10								
					},  
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,
					displayField: "nom_metier",
					valueField: "id_metier",
					store: App.store.create("App.AgentsMod.get_listMetier", {
													autoLoad: true
					})  	// Creation du store						
				},
				{
					xtype: "combo",
					fieldLabel: "Domaine d'intervention",
					labelAlign: "top",
					allowBlank: false,
					editable: false,
					itemId: "cboAgentDomaine",	
					margin: {
							top: 10,
							left:10								
					},
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,					
					displayField: "nom_domaine",
					valueField: "id_domaine",
					store: App.store.create('App.AgentsMod.get_listDomaineIntervention',{
							autoLoad: true
					})						
				},
				{
					xtype: "combo",
					fieldLabel: "Thématique",
					labelAlign: "top",
					allowBlank: false,
					editable: false,
					itemId: "cboAgentThematique",	
					margin: {
							top: 10,
							left:10,
							bottom: 10
					},	
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,					
					displayField: "nom_thematique",
					valueField: "id_thematique",					
			//		store: App.store.create("App.AgentsMod.get_thematique", {
					store: App.store.create("App.AgentsMod.get_listThematique", {
							autoLoad: true
					})  	// Creation du store						
				},				
				]
			},
// Colonne inférieure droite
			{
				layout: "vbox",
				flex: 1,
				items: [				
				{
					xtype: "combo",
					itemId: "cboTypeContrat",
					margin: {
							top: 10,
							left:10							
					},
					fieldLabel: "Type de contrat",
					allowBlank: false,
					editable: false,
					labelAlign: "top",
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,
					displayField: "type_contrat",
					valueField: "id_type_contrat",
					store: App.store.create('App.AgentsMod.get_listTypeContrat',{
							autoLoad: true
					})	  						
				},			
				{
					xtype: "textfield",
					fieldLabel: "Numéro de contrat",
					labelAlign: "top",
					itemId: "txtNumeroContrat", 
					margin: {
							top : 10,
							left : 10					
					},
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,
					maxLength:	5,			//Limite le nombre de char dans ce champ.
					enforceMaxLength: true,
					allowBlank: false,
					regex: VALID_NUMERO_CONTRAT,
				},			
				{
					xtype: "numberfield",
					fieldLabel: "Indice de rémunération",
					labelAlign: "top",
					itemId: "numSalaire", 
					margin: {
							top : 10,
							left : 10					
					},
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,					  
					step: 1000,			// Set step so it skips every other number
				//	value: 555.12,		//initial value of field
/* 					renderer: function(value) {
						var new_value = value.replace('.','BB');
						return new_value;
					},  
*/
					decimalPrecision : 2,
					decimalSeparator : ',',
					allowBlank: false,
					
					minValue: 0, //prevents negative numbers

					// Remove spinner buttons, and arrow key and mouse wheel listeners
/* 					hideTrigger: true,
					keyNavEnabled: false,
					mouseWheelEnabled: false 
*/
				},						
				{
					xtype: "datefield",
					fieldLabel: "Date d'arrivée",
					labelAlign: "top",
//renderer DOES NOT WORK!!
					renderer: Ext.util.Format.dateRenderer('dd/mm/YYYY'),
//					renderer: Ext.util.Format.dateRenderer("Y-m-d"), //('m/d/Y'),
//					renderer: Ext.util.Format.dateRenderer('d/m/Y'),					
					itemId: "datDateArrivee",
					margin: {
							top: 10,
							left: 10,
							bottom: 10
					},
					labelWidth: VAGENT_LABEL_WIDTH,
					width: 		VAGENT_WIDTH,
					allowBlank: false,
				},	 
				]				
			}
			]
		}
		]
	},
	{
		xtype: "htmleditor",
		flex: 1,
		fieldLabel: "Description du poste",
		labelAlign: "top",
		itemId: "htmlDescriptionPoste", 
// 		width: "100%",
//		flex: 1 
		margin: {
			top: 5,
			left: 5,
			right: 5			
		},
		labelWidth: 300,
		width:"100%",
		allowBlank: false,
	}

	]
});
	

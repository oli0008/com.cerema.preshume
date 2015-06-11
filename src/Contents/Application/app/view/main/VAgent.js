App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
	alias : 'widget.agent',
	x:50,
	y:50,
    height: 535,
    width: 530,
	closable: true,
	draggable: true,
	resizable: false,
	closeAction: 'destroy',
	title: 'Modification Agent',

/* OLI1 */
	tbar:[
	//Top bar buttons
	{
		xtype: "button",
		itemId: "clickme5", 
		text: "Nouveau",
	},
	{
		xtype: "button",
		itemId: "clickme4", 
		text: "Annuler",
	}
	],
	bbar:[
	//Bottom bar buttons
	'->',
	{
		xtype: "button",
		itemId: "clickme3", 
		text: "Nouveau2",

	},
	{
		xtype: "button",
		itemId: "clickme2", 
		text: "Annuler2",
	}
	],	

	border: false,
	
	layout: "border",
	
	items: [
//********************** CENTER ***************************	
		{
			region: "center",			
			split:true,
			
 			layout: "hbox",
			border: false,
			width: "100%", 
			
			items: [
					{
						xtype: "combo",
						itemId: "cboNom",
						margin: {
								top: 10,
								left:10
								
							},
						fieldLabel: "Nom",
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
					xtype: "textfield",
					itemId: "txtLaitage", 
					text: "Laitages",
					margin: {
						top : 10,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
					},
					fieldLabel: "Résidence",
					labelAlign: "top",
				},
				]
					
		}
	]
});
	

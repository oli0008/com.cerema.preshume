App.view.define('main.VAgent', 
{
    extend: 'Ext.window.Window',
//	alias : 'widget.marches',
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
	
////////////////////
	border: false,
	
	layout: "border",
//********************** NORTH ***************************	
	items: [
		{	//menu bar
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,
			baseCls: 'cls-header',
			xtype: "Menu",
			itemId: "MenuPanel",
			menu: [
			]	
		},
		
//********************** CENTER ***************************	
		{
			region: "center",			
			split:true,
			items: [

				{
					xtype: "button",
					itemId: "clickme", 
					text: "region center2",
					margin: 20
				},
				{
					xtype: "textfield",
					itemId: "txtLaitage", 
					text: "Laitages",
					margin: {
						top : 40,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
					}
				},
								{
					xtype: "label",
					itemId: "lblFromage", 
					text: "Fromage--Lbl",
					margin: 20
				},		
				{
					xtype: "textarea",
					itemId: "txtFromage", 
					text: "Fromage--Txt",
					margin: 20
				},				


		//********************
				{
		
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
						xtype: "datefield",
						renderer: Ext.util.Format.dateRenderer('d/m/Y'),
						itemId: "date",
						labelAlign: "top",
						allowBlank: false,
						editable: false,
						margin: {
								top: 10,
								left:30
								
							},
						width:100,
						fieldLabel: 'Date de parution',
					},
					{
						xtype: "datefield",
						itemId: "date_limite",
						labelAlign: "top",
						margin: {
								top: 10,
								left: 20
								
							},
						width:80,
						fieldLabel: 'Date limite',
						allowBlank: false,
					}
					]
				},
			]
		},
	]
	
});
/////////////////////	

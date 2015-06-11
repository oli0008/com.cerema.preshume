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
/*	
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
*/		
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
						top : 40,
					//	bottom : 20,
						left : 20,
					//	right : 20
						
					},
					]
					

	]
});
/////////////////////	

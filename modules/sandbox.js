// sandbox namespace
var m = {
// private data
	appUi: {},
	
// private methods
	// build app ui
	_buildAppUi: function()
	{
		// set white backgroud
		Ti.UI.setBackgroundColor('#000');
		
		// create tab group
		m.appUi.tabGroup = Ti.UI.createTabGroup();
	},
	
// public methods
	// init app
	initApp: function()
	{
		// build app ui
		m._buildAppUi();
	},
	
	// add tab to master tab group
	addModTab: function( tab )
	{
		m.appUi.tabGroup.addTab( tab ); 
	},
	
	// opem app main tab group
	openTabGroup: function()
	{
		m.appUi.tabGroup.open();
	}
};

// export module (do not touch)
exports = m;
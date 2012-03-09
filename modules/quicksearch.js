// quick search namespace
var m = {
// private data
	modUi:{},
	
// private methods
	// build module ui
	_buildModUi: function()
	{
		// create module window
		m.modUi.win = Ti.UI.createWindow( {
			title:'Super Tab 1',
			backgroundColor:'#fff' } );
		
		// create module tab
		m.modUi.tab = Ti.UI.createTab( {
			icon:'KS_nav_views.png',
			title:'Tab 1',
			window:m.modUi.win } );
			
		// create module label
		m.modUi.label = Ti.UI.createLabel( {
			color:'#999',
			text:'I am Window 1',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto' } );
		
		// add label to window
		m.modUi.win.add( m.modUi.label );
	},
	
// public methods
	// init module
	initMod: function()
	{
		// build module ui
		m._buildModUi();
	},
	
	// return module tab
	getModTab: function()
	{
		return m.modUi.tab;
	}
};

// export module (do not touch)
exports = m;
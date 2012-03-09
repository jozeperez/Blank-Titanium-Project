// load sandbox and required modules
var sandbox = require( 'modules/sandbox' );
var quickSearch = require( 'modules/quicksearch' );
var indexSearch = require( 'modules/indexsearch' );

// init app ui
sandbox.initApp();

// init quicksearch mod
quickSearch.initMod();

// init indexsearch mod
indexSearch.initMod();

// add tabs to main nav
sandbox.addModTab( quickSearch.getModTab() );
sandbox.addModTab( indexSearch.getModTab() );

// open tab group
sandbox.openTabGroup();
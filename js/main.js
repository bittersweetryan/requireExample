require(
	[
		'app',
        'views/appView'
	],
	function( app ){

		var appView = new app.views.appView();

        appView.render();
	}
)
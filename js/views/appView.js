define(
	[
		'jquery',
		'lodash',
		'backbone',
		'app'
	], 
	function( $, _, Backbone, app ){
		
		var appView = Backbone.View.extend( {

			initialize : function(){
				console.log( 'new view' );
			}
		} );

		app.addView( 'appView', appView );

	}
);
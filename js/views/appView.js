define(
	[
		'jquery',
		'lodash',
		'backbone',
        'models/person',
		'app'
	],
	function( $, _, Backbone, Person, app ){
		
		var appView = Backbone.View.extend( {

			initialize : function(){
				console.log( 'new view' );
			},

            model : new app.models.Person( { name : 'Homer Simpson' } ),

            render : function(){
                console.log( this.model.sayHello() );
            }
		} );

		app.addView( 'appView', appView );

	}
);
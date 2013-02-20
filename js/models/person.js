define(
    [
        'jquery',
        'lodash',
        'backbone',
        'app'
    ],
    function( $, _, Backbone, app ){

        var Person = Backbone.Model.extend( {

            defaults : {
                name : 'John'
            },

            sayHello : function(){
                return 'Hello ' + this.get( 'name' );
            }
        } );


        app.addModel( 'Person', Person );
    }
);
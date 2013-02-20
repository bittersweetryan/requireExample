define(
    [
        'jquery',
        'lodash',
        'backbone',
        'app'
    ],
    function( $, _, Backbone, app ){

        var person = Backbone.Model.extend( {

            defaults : {
                name : 'John'
            },

            sayHello : function(){
                return 'Hello ' + this.name;
            }
        } );


        app.addModel( 'person', person );
    }
);
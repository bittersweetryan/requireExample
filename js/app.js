define( 
	function(  ){
		
		var App = function( ){

			this.views = {};
			this.models = {};
		};

		App.prototype.addView = function( name, view ){

			this.views[ name ] = view;
		};

		App.prototype.addModel = function( name, model ){

			this.models[ name ] = models;
		};

		App.prototype.init = function(){

		};

		return new App();
	}
);
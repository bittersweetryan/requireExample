require.config( {

	deps : [ 'main' ],
	
	paths : {
		'appDir' : '../',
		'baseUrl' : 'js',
		'jquery' : 'vendor/jquery-1.9.1.min',
		'backbone' : 'vendor/backbone',
		'lodash' : 'vendor/lodash'
	},

	shim : {
		'backbone' : {
			deps : [ 'jquery', 'lodash' ],
			exports : 'Backbone'
		}
	}
} );
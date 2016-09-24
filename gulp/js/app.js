console.log('[app.js]');


require.config({
	// モジュールIDからモジュールのファイルを探すときにベースとなるパス
	baseUrl: 'htdocs/js/',
	paths: {
		// モジュールIDでは探せないモジュールのパス
		jquery 		: 'lib/jquery-1.12.4',
		underscore 	: 'lib/underscore',
		backbone 	: 'lib/backbone',
		main 		: 'common/main',
		flexslider 	: 'lib/jquery/flexslider',
	},
	shim: {
		// AMDに対応してないモジュールを読み込むための設定
		jquery: {
			exports: '$',
		},
		underscore: {
			exports: '_',
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone',
		},
		flexslider: {
			deps: ['jquery'],
			exports: 'flexslider',
		},
		main: {
			deps: ['jquery'],
			exports: 'Main',
		}

	},
	urlArgs: 'bust=' +  (new Date()).getTime(),
});

require([
	'backbone',
	'routers/router'
], function(
	Backbone,
	Workspace
) {
	console.log('[require]');
	new Workspace();
	Backbone.history.start();

});
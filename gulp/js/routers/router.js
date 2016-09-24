define([
	'jquery',
	'backbone'
], function (
	$,
	Backbone
) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'top',
			'sequential': 'sequential'
		},

		sequential: function (param) {
			console.log('[router sequential]');
			require(['views/sequential'], function(SequentialView) {
				var sequentialView = new SequentialView();
			});
		},

		top: function() {
			console.log('[router top]');
		}
	});

	return Router;
});
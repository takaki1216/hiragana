define([
	'backbone'
], function(
	Backbone
) {
	var HiraganaModel = Backbone.Model.extend({
		initialize: function() {
			console.log('[HiraganaModel init]');
		},
		defaults: {
			name: 'John',
			age: 33
		}
	});

	return HiraganaModel;
});
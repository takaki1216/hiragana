define([
	'backbone',
	'models/hiragana'
], function(
	Backbone,
	HiraganaModel
) {
	var SequentialCollection = Backbone.Collection.extend({
		initialize: function() {
			console.log('[SequentialCollection init]');
		},
	});

	return SequentialCollection;
});
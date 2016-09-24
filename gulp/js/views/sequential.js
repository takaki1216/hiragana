define([
	'backbone',
	// 'collections/sequential',
	'models/hiragana'
], function(
	Backbone,
	// SequentialCollection,
	ModelHiragana
) {
	var SequentialView = Backbone.View.extend({
		el: '#slider-holder',
		tagName: 'li',
		template: _.template($("#tpl-sequentialview").html()),
		initialize: function() {
			console.log('[SequentialView init]');
			// this.collection = new SequentialCollection;
			this.model = new ModelHiragana();
			console.log(this.model);
			this.render();
		},
		render: function() {
			var template = this.template(this.model.toJSON() );
			this.$el.html(template);
		}
	});

	return SequentialView;
});
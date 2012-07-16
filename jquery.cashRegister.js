(function($){
	$.fn.cajaRegistradora = function (targetValue, opts) {
		targetValue = parseFloat(targetValue);
		var defaultOptions = {
			easing: 'linear',
			duration: 700, 
			precision: 'target'
		};
		var options = $.extend(defaultOptions, opts);
		var precision = targetValue.toString().indexOf('.') != -1 ? targetValue.toString().split('.')[1].length : 0;
		return this.each(function(){
			if(!isNaN(targetValue)) {
				this.money = parseFloat($(this).text());
				$(this).animate({money: targetValue, 'font-size': '1em'},{
					duration: options.duration,
					easing: options.easing,
					step: function(){
					    $(this).text( parseFloat(this.money).toFixed(precision));
					}
				})
			}
		});
	}
})(jQuery);
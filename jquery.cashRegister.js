(function($){
	$.fn.cashRegister = function (finalValue, opts) {	
		function getDecimalPrecisionOf(number){
			return number.toString().indexOf('.') != -1 ? number.toString().split('.')[1].length : 0;
		}
		if (isNaN(finalValue))
			return this;	
		finalValue = parseFloat(finalValue);
		var defaultOptions = {
			easing: 'linear',
			duration: 700, 
			precision: 'finalValue'
		};
		var finalValuePrecision = getDecimalPrecisionOf(finalValue);
		var options = $.extend(defaultOptions, opts);
		return this.each(function(){
			this.money = parseFloat($(this).text());
			this.precision = options.precision == "elementValue" ? getDecimalPrecisionOf(this.money) : finalValuePrecision;
			$(this).animate({money: finalValue},{
				duration: options.duration,
				easing: options.easing,
				step: function(){
				    $(this).text( parseFloat(this.money).toFixed(this.precision));
				}
			})
		});
	}
})(jQuery);
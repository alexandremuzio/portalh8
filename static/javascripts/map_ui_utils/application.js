Apartment = createClass({
	detailHeight: "80px",
	siblingOffset: 88,
	$spotWrapper: $('<div class="spot-wrapper" />')
}, {
	number: null,
	$element: null,
	$wrapper: null,

	initialize: function(number, $template, $wrapper, className) {
		this.number = number;
		this.$template = $template;
		this.$wrapper = $wrapper;
		this.createElement(className);
	},

	createElement: function(className) {
		this.$element = this.$template.clone();
		if (className) this.$element.addClass(className);
		this.$element.attr('id', 'apartment-' + this.number)
		this.$element.children(".number").text(this.number);
		this.$element.appendTo(this.$wrapper);
		this.$element.data("detail", false);
		var half = this.$element.parent(".quarter-half").size() > 0;
		this.$element.data("half", half);
		this.setupSpots(this.$element.find('.spot'));
		// ugly =(
		if (!className || className.indexOf('dummy') == -1) {
			this.$element.click(this.clickListener.curry(this, this.$element));
		}
	},

	setupSpots: function($spots) {
		$spots.mouseover(this.spotOverListener.curry(this, this.$element))
			.mouseout(this.spotOutListener.curry(this, this.$element))
			.click(this.spotClickListener.curry(this, this.$element))
			.wrap(Apartment.$spotWrapper.css({
				"background-image": "url(https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/260766_607647806_4034479_q.jpg)",
				"background-size": toCssValue($spots.outerWidth(), $spots.outerHeight())
			})).css("opacity", 0.75);
		$spots.filter(".ghost").parent().addClass("ghost");

		return;
		$spots.attr("data-original-title","Morador");
		$spots.popover({ 
	        html : true, 
	        content: function() {
	          return "<div>kjewhfuih</div>";
	        }
    	});

	},

	spotOverListener: function(apartment, $apartment, e) {
		e.preventDefault();
		e.stopPropagation();
		var $spot = $(this);

		$spot.animate({
			opacity: 0
		}, 'fast');

	},

	spotOutListener: function(apartment, $apartment, e) {
		e.preventDefault();
		e.stopPropagation();
		var $spot = $(this);
		$spot.animate({
			opacity: 0.75
		}, 'fast');

	},

	spotClickListener: function(apartment, $apartment, e) {
		e.preventDefault();
		e.stopPropagation();
		var $spot = $(this);
	},

	clickListener: function(self, $element, e) {
		$sibling = $element.siblings('.apartment');
		if ($element.hasClass('detail')) {
			if ($sibling.hasClass('detail')) {
				$element.removeClass('detail').addClass('detail-pair');
			} else {
				$element.removeClass('detail')
				$sibling.removeClass('detail-pair');
			}
		} else if ($element.hasClass('detail-pair')) {
			$element.removeClass('detail-pair').addClass('detail');
		} else {
			$element.addClass('detail');
			$sibling.addClass('detail-pair');
		}
	} 

});

Map = {

	quarters: null,
	apartments: [],

	initialize: function(singleQuarters, doubleQuarters) {
	this.fillSingleQuarters(singleQuarters);
		this.fillDoubleQuarters(doubleQuarters);
	},

	fillSingleQuarters: function(maps) {
		for (var i = 0; i < maps.length; i++) {
			var params = maps[i];
			var numbers = params.numbers;
			for (var j = 0; j < numbers.length; j++) {
				this.apartments.push(new Apartment(numbers[j], params.template, params.container));
			}
		}
	},

	fillDoubleQuarters: function(maps) {
		for (var i = 0; i < maps.length; i++) {
			var params = maps[i];
			var left = params.left.numbers;
			var right = params.right.numbers;
			for (var j = 0; j < Math.max(left.length, right.length); j++) {
				var l = left[j];
				var r = right[j];
				var $wrapper = $('<div class="apartment-wrapper" />').appendTo(params.container);
				this.apartments.push(new Apartment(l, params.left.template, $wrapper, (j < left.length) ? 'left' : 'dummy left'));
				this.apartments.push(new Apartment(r, params.right.template, $wrapper, (j < right.length) ? 'right' : 'dummy right'));
			}
		}
	}
};

function highlight(allocations) {
	unhighlight();
	for (var i = 0; i < allocations.length; i++) {
		var allocation = allocations[i];
		var spot = allocation.charAt(allocation.length-1).toUpperCase();
		var apt = allocation.substring(0, allocation.length-1);
		var $apt = $("#apartment-" + apt)
		$apt.find(".spot:contains('" + spot + "')").addClass('highlight');
		if (!$apt.hasClass("highlight")) {
			$apt.click()
				.addClass('highlight')		
		}		
	}
}

function unhighlight() {
	$(".detail").click();

	$(".highlight").removeClass("highlight");
}

$(document).ready(function() {

	DB = {};

	var $singles = $(".quarter.single");
	var $doubles = $(".quarter.double");
	var templates = $(".template");
	Map.initialize([
			// C+
			{template: $(".template.c-plus"), container: $singles[0], numbers: range(330, 314)},
			// C-
			{template: $(".template.c-minus"), container: $singles[1], numbers: range(313, 301)},
			// B-
			{template: $(".template.b-minus"), container: $singles[2], numbers: range(213, 201)},
			// A-
			{template: $(".template.a-minus"), container: $singles[3], numbers: range(113, 101)}
	 	], [
	 		{container: $doubles[0], 
	 			// B+ left
	 			left: {template: $(".template.b-plus-left"), numbers: range(231, 214)}, 
	 			// B+ right
	 			right: {template: $(".template.b-plus-right"), numbers: range(232, 242)}
	 		}, {container: $doubles[1], 
	 			// A+ left
	 			left: {template: $(".template.a-plus-left"), numbers: range(132, 142)}, 
	 			// A+ right
	 			right: {template: $(".template.a-plus-right"), numbers: range(131, 114)}
	 		}
	 	]
	 );

	templates.remove();


});
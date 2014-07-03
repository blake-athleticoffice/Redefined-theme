AUI().ready(
	'liferay-navigation-interaction',
	function(A) {
		var navigation = A.one('#main-nav');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}
		
		
	    var nav = responsiveNav("#inner-nav", { // Selector
	        animate: false, // Boolean: Use CSS3 transitions, true or false
	        transition: 284, // Integer: Speed of the transition, in milliseconds
	        customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
	        closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
	        openPos: "relative", // String: Position of the opened nav, relative or static
	        navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
	        navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
	        jsClass: "js", // String: 'JS enabled' class which is added to <html> element
	        init: function(){
	        	A.one('body').prepend('<div class="mask"></div>');
	        }, // Function: Init callback
	        open: function(){}, // Function: Open callback
	        close: function(){} // Function: Close callback
	    });
	    

	}
);
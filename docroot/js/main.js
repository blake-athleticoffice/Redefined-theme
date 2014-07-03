AUI().ready(
	'liferay-hudcrumbs',
	function(A) {

		var thisWindow = A.one('window');
		var thisBody = A.one('document');
		thisWindow.on('scroll', function(){
			  if(thisBody.get("scrollTop") == 0) {
				    A.one('.wowmenu').removeClass('tiny');
				  } else {
				    A.one('.wowmenu').addClass('tiny');
				  }
		});
		
		var toggleDockbar = A.one('#toggleDockbar');

		if (toggleDockbar) {
			toggleDockbar.on(
				'click',
				function(event) {
					event.preventDefault();

					var body = A.one('body');

					body.toggleClass('show-dockbar');
				}
			);
		}
		
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);
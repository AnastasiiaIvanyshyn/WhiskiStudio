var $scrollContainer = $(".scroller");

function initCustomScrollbar() {
	$scrollContainer.mCustomScrollbar({autoHideScrollbar: true});
}

function addScrollOnClick(anchorSelector, scrollDestination) {
	$(anchorSelector).on("click", function() {
		$scrollContainer.mCustomScrollbar("scrollTo", scrollDestination);
	});
}


// These functions run once page is loaded
$(window).on('load', function () {

	// Sticky navbar appears after scrolling past header
	sticky();
	$('.sticky').hide();


	// Vertically center sections
	vCenter();


	// Reruns vCenter on window resize
	$(window).resize(vCenter);


	// Add smooth scrolling to all links
	$("a").on('click', function(e) {
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1300, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

});




function vCenter() {
	$('.v-center').each(function(i) {
		var rowHeight = $(this).parent().outerHeight();
		var divHeight = $(this).outerHeight();
		var resize = (rowHeight - divHeight)/2;

		$(this).css({
			'top': resize,
		});

	});
};


function sticky() {
    // hide .navbar first
    $(".sticky").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
        	var pastHeader = ($('header').outerHeight())-1;

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > pastHeader) {
                $('.sticky').fadeIn();
            } else {
                $('.sticky').fadeOut();
            }
        });
    });
};

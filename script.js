$(document).ready(function () {
    // Get all the navigation links and sections
    var $navLinks = $('.nav-link');
    var $highlightableSections = $('.highlightable');

    // Function to check if a section is in view
    function isSectionInView(section) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var sectionTop = section.offset().top;
        var sectionBottom = sectionTop + section.height();

        return windowTop >= sectionTop && windowBottom <= sectionBottom;
    }

    // Function to update the highlight based on the current section in view
    function updateHighlight() {
        $highlightableSections.each(function () {
            var $section = $(this);
            var sectionId = $section.attr('id');
            var $navLink = $navLinks.filter('[href="#' + sectionId + '"]');

            if (isSectionInView($section)) {
                $navLink.addClass('highlighted');
            } else {
                $navLink.removeClass('highlighted');
            }
        });
    }

    // Call the updateHighlight function on page load and scroll
    $(window).on('load scroll', updateHighlight);
});

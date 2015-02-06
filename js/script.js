(function(){
    $(document).ready(function() {
        // Variables
        var $codeSnippets = $('.code-example-body'),
            $nav = $('.navbar'),
            $header = $('header'),
            $body = $('body'),
            $window = $(window),
            navOffsetTop = $nav.offset().top,
            $document = $(document);

        //Functions 
        function init() {
            $window.on('scroll', onScroll);
            $window.on('resize', resize);
        }

        function resize() {
            $header.removeClass('has-docked-nav');
            navOffsetTop = $nav.offset().top;
            onScroll();
        }

        function onScroll() {
            if(navOffsetTop < $window.scrollTop() && !$header.hasClass('has-docked-nav')) {
                $header.addClass('has-docked-nav')
            }
            if(navOffsetTop > $window.scrollTop() && $header.hasClass('has-docked-nav')) {
                $header.removeClass('has-docked-nav')
            }
        }
        
        init();
    });
})();
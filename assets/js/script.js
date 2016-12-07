(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').addClass('opaque');
            } else {
                $('#menu').removeClass('opaque');
            }
        });
    });
})(jQuery);
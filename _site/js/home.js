(function($){
    $(function(){
        $("#index-page").css("padding-top", $(".slider").height()+50);
        $("#chevron-banner").click(function(){
            $('html, body').animate({
                scrollTop: ($(".slider").height())
            },500);
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

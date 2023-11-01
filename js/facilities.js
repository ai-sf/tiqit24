(function($){
        $(function(){
        param = window.location.hash.substr(1)
        if(param){
            console.log($("#"+param));
            $().css("z-index", 50);
            $("#"+param).css("z-index", 100);
            $("#overlay").show();
            $('html, body').animate({
                scrollTop: ($("#"+param).offset().top-40)
            },500);

            $("#overlay").click(function(){
                    $("#overlay").hide();
                    window.history.pushState('page2', 'TIQIT - Facilities', '/facilities');
            });
        }
    }); // end of document ready
})(jQuery); // end of jQuery name space

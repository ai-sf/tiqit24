(function($){
    $(function(){
        M.AutoInit()
        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.slider#slider-home').slider({height: 550, interval: 4000, duration: 3000});
        $('.slider:not(#slider-home)').slider();
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        $('.collapsible').collapsible({
            onOpenStart: function(el){
                $(".collapsible-header .material-icons", el).text("keyboard_arrow_up");
            },
            onCloseStart: function(el){
                $(".collapsible-header .material-icons", el).text("keyboard_arrow_down");
            }
        });
        $('.modal').modal();
        $('.carousel').carousel();

        $(".row").each(function(){
            maxHeight = 0;
            $(".card .card-content", $(this)).each(function(){
                maxHeight = Math.max($(".card-title", this).height(), maxHeight);
            });
            $(".card .card-content", $(this)).each(function(){
                $(this).height(maxHeight);
            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

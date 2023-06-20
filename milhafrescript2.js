$(document).ready(function() {
    $(document).on('click', 'header .limit-wrapper .block-menu #menu-link a', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var currentAnchor = $(this).attr('data-id');
        console.log($(currentAnchor).offset().top);
        
        $('html, body').animate({
            scrollTop: $(currentAnchor).offset().top - $("header").outerHeight()
        }, 500);
    });
    $('.scroll-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#block-menu-mobile .menu-mobile-button').on('click', function(){
        $('header').addClass('active');
        $('html').css('overflow-y', 'hidden');
        $('.overlaw-open').addClass('active');
    });
    $('.overlaw-open').on('click', function(){
        $('header').removeClass('active');
        $('html').css('overflow-y', 'auto');
        $('.overlaw-open').removeClass('active');
    });
});
function cookies(){
    document.getElementById("block-cookies").style.display="none";
}
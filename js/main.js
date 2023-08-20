$(document).ready(function() {
    /*ПЛАВНАЯ ПРОКРУТКА МЕНЮ*/
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    })
    /*МОБИЛЬНОЕ МЕНЮ*/
    $('.menu__burger').click(function(){
        $('.menu').toggle(500); 
        $(this).toggleClass('close');
    })
});
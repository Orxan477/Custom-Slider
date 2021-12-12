$(document).ready(function(){
    $('.fa-chevron-right').on('click',function(){
        var current=$('.active');
        var next=current.next();

        if(next.length){
            current.removeClass('active').css('z-index',-10);
            next.addClass('active').css('z-index',10);
        }
    })

    $('.fa-chevron-left').on('click',function(){
        var current=$('.active');
        var back=current.prev();

        if(back.length){
            current.removeClass('active').css('z-index',-10);
            back.addClass('active').css('z-index',10);
        }
    })
})
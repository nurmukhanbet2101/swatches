const audio = new Audio();
audio.src = "click.mp3";

$(document).ready(function(){
    $('.welcome').mouseenter(function(){
        $(this).animate({
            'font-size':'32px',
         'text-decoration':'none'
});
$('#zhibek').animate({
    'width':'100px',
    'height':'100px',
});
    });
    $('.welcome').mouseleave(function(){
        $(this).animate({
           'font-size':'24px',
           'text-decoration':'none'
        });
        $('#zhibek').animate({
            'width':'10px',
            'height':'10px',
        });
    });
    $('#1ph').mouseenter(function(){
        $(this).animate({
            'width':'275px',
            'height':'275px'
        });
    });
    $('#1ph').mouseleave(function(){
        $(this).animate({
            'width':'375px',
            'height':'375px',
        });
    });
    $('#signIN').mouseenter(function(){
        $(this).animate({
            'width':'120px',
            
        });
    });
    $('#signIN').mouseleave(function(){
        $(this).animate({
            'width':'91.65px',
            
        });
    });
    $('#code1').mouseenter(function(){
        $(this).animate({
            'font-size':'20px',
            'color':'gray',
        }, 2000);
    });
    $('#code1').mouseleave(function(){
        $(this).animate({
            'font-size': '80%',

          
        },1000);
    });
});

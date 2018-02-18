'use strict';

//$(function(){
////    $('body').find('p.paragraf').css('background-color' , 'red');
//
//    var paragrafy = $('.paragraf');
//    paragrafy.eq(1).css('color', 'red'); // pobieramy z tablicy - jQuery
//    paragrafy[0].style.backgroundColor = 'red'; //pobieramy z tablicy - czysty JS
//    
//    
//})

$(function(){
    $('.paragraf').each(function(index, element) {
        if (index != 0) {
            $(this).css('background-color' , 'green');
        }
        
 
//    console.log('element: ' + element, index);
});
});
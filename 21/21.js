$(document).ready(function(){
     $('li').hover(function(){
       var li_val = $(this).attr('data-price');
       $(this).addClass('highlight');
       $(this).siblings().removeClass('highlight');
       $('p').text('The price is '+li_val);
     })

});
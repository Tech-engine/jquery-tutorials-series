$(document).ready(function(){
   /*$('a').on('mouseenter',function(){
       $(this).addClass('anchor_highlight');
   }).on('mouseleave',function(){
        $(this).removeClass('anchor_highlight');
   }); */
    $('a').bind('mouseenter mouseleave',function(){
       $(this).toggleClass('anchor_highlight');
   })


});
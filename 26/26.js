$(document).ready(function(){
   $('#add').on('click',function(){
      $('ol').append('<li data-price="'+$('#price').val()+'">'+$('#item').val()+'</li>')
   });

   /*Already discussed in video 21- Hover event*/
   $('ol').on('mouseenter','li',function(){
       var li_val = $(this).attr('data-price');
       $(this).addClass('highlight');
       $(this).siblings().removeClass('highlight');
       $('p').text('The price is '+li_val);
   })


});
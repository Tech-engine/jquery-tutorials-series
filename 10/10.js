$(document).ready(function(){
   $(':button').on('click',function(){
       var food = $(this).val();
       $('span').text(food);
   });
   $(':submit').on('click',function(){
       $('p').text('you have successfully submited you food');
       alert('you have successfully submited you food');
   });
});
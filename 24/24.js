$(document).ready(function(){
   $('#name').on('focusin',function(){
      $(this).prev().text('Plesae select a name');
   }).on('focusout',function(){
      $(this).prev().text('');
   });
   $('#email').on('focusin',function(){
      $(this).next().text('Plesae select an email');
   }).on('focusout',function(){
      $(this).next().text('');
   });
   $('#pwd').on('focusin',function(){
      $(this).next().text('Plesae select a password');
   }).on('focusout',function(){
      $(this).next().text('');
   });
});
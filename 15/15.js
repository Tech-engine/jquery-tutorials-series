$(document).ready(function(){
   var email_placeholder='Please enter an email';
   var name_placeholder='Please enter a name';
   $('input').on('focus',function(){
       if($(this).val()== email_placeholder) {
          $(this).val('');
       }
   }).on('blur',function(){
       if($(this).val()== '') {
          $(this).val(email_placeholder);
       }

   }); 
   /*$('input[type="text"]').on('focus',function(){
       if($(this).val()== name_placeholder) {
          $(this).val('');
       }
   }).on('blur',function(){
       if($(this).val()== '') {
          $(this).val(name_placeholder);
       }

   }); */
});
$(document).ready(function(){
   $('#name,#email').on('change',function(){
      var val = $(this).val();
      if(val.length >10) $(this).addClass('err');
      else  $(this).removeClass('err');
     
   });
   
   $('#myform').on('submit',function(){
       $('#msg').text('You have successfully signed in as '+$('#email').val());
   });

});
$(document).ready(function(){
 $('#mybutton').on('click',function(){
     var button_text=$('#mybutton').val();
     $('#mymessage').toggle('slow');
     if(button_text=='hide'){
         $('#mybutton').val('show');
     }else{
         $('#mybutton').val('hide');
     }
 });
});
$(document).ready(function(){
   var max_limit=100;
   $('#count').text(max_limit+' character remaining');
   $('#tarea').on('keyup',function(){
       var tarea = $(this).val().length;
       var remaining_char=max_limit-tarea;
       $('#count').text(remaining_char+' character remaining');
   });
});
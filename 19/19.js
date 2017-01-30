$(document).ready(function(){
    $('#inp').on('keyup',function(){
        $('#keyuptext').text($(this).val());
      }).on('keydown',function(){
         $('#keydowntext').text($(this).val());
    });
});
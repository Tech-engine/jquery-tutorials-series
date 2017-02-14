$(document).ready(function(){
  $('.item').on('mousemove',function(object){
    var mouse_x = object.clientX;
    var mouse_y = object.clientY;
    var item_description = $(this).attr('data-description');
    $('#description').show();
    $('#description').text(item_description).css('top',mouse_y+15).css('left',mouse_x+15);
  }).on('mouseout',function(){
       $('#description').hide();
  });

});
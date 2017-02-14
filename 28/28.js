$(document).ready(function(){
  var visible = true;
  $('#toggle').on('click',function(){
      if(visible){
        $('div').slideUp();
        visible=false;
        $(this).val('Show');
      }else{
        $('div').slideDown();
        visible=true;
        $(this).val('Hide');
      }
  });
});
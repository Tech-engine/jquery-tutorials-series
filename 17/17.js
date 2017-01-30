$(document).ready(function(){
   $('#zoomin,#zoomout').on('click',function(){
      var p_fontsize = parseInt($('p').css('font-size'));
      changefont($(this),p_fontsize);
   });
   function changefont(button,p_fontsize){
     var ref=button;
     var new_para_size;
     if(button.val()=='zoomin'){
          new_para_size=p_fontsize+2;
     }else{
         new_para_size=p_fontsize-2;
        }
        
     $('p').css('font-size',new_para_size+'px');

   }
});
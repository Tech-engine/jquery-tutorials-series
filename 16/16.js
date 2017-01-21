$(document).ready(function(){
    $('#ip').on('keyup',function(){
       var name = $(this).val();
       if($.trim(name)!=''){
         $('#list li:contains("'+name+'")').siblings().hide();
         $('#list li:contains("'+name+'")').show();
       }else  $('#list li:contains("'+name+'")').show();
    });

});
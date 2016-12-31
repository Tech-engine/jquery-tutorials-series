$(document).ready(function(){
  $('#btn1').on('click',function(){
       $('div').css('border','2px solid red');
  });
  $('#btn2').on('click',function(){
       $('h1').css('border','2px solid black');
  });
  $('#btn3').on('click',function(){
       $('div > p').css('border','2px solid blue');
  });

  $('#btn4').on('click',function(){
       $('span').css('background-color','yellow');
  });

  $('#btn5').on('click',function(){
       $('div:last').css('background-color','green');
  });
});
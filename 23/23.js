$(document).ready(function(){
    $('#text,#textarea').on('select',function(){
        $('span').fadeIn().fadeOut();
    });
});
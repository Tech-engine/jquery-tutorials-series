/*
1. Mouse events e.g. click event, double click event
2. Keyboard events e.g. keypress, keydown, keyup
3. Form Events e.g. form submit event
4. Document events e.g. load event, resize event
*/

$(document).ready(function(){
    $('#buton').on('dblclick',function(){
          alert('Hello world');
      });
});
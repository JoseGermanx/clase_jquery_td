

$(document).ready(function(){


    // click
    $('#btnClick').click(function(){
        alert('Has hecho clic');
    })

    // dblclick
    $('#btnDblClick').dblclick(function(){
        alert('Has hecho doble clic');
    })

    // mousemoveenter / mouseleave

    $('#btnMouse').mouseenter(function(){
        $(this).css('color','red');
      
    })

    $('#btnMouse').mouseleave(function(){
        $(this).css('color','black');
       
    })

    // keydown
    $('#eventKey').keydown(function(){
       $('#texto').text($(this).val());
    })

    // formulario
    $('#miFormulario').submit(function(e){
        e.preventDefault();
        alert('Has hecho submit');
        $('#inputTexto').val('');
    })








    
})
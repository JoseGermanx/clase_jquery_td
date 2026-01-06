
$(document).ready(function() {


    // agregar usuario cuando ocurrra el submit
    $('#usuarioForm').submit(function(event){
        event.preventDefault();

        // tomar los valores de los inputs
        const nombre = $('#nombre').val();
        const edad = $('#edad').val();


        // crear una nueva fila en la tabla
        
        const fila = `
          <tr>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td><button>Eliminar</button></td>
          </tr>
        `

        // agregar la fila a la tabla
        $('#tablaUsuarios').append($(fila).hide().fadeIn(5000));

        // limpiar los inputs
        $('#nombre').val('');
        $('#edad').val('');

    })

    // eliminar usuario cuando ocurra el click

    $('#tablaUsuarios').on('click', 'button', function(){
        console.log(this)
        $(this).parent().parent().remove();
    })

});
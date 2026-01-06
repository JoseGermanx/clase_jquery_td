

$(document).ready(function() {

    // Agregar tareas

    $('#agregarBtn').click(function() {

        const tarea = $('#tareaInput').val();

        if(tarea !== '') {
        $('#listaTareas').append('<li>' + tarea + '</li>');
        $('#tareaInput').val('');
        }

    });


    // Eliminar tareas
    $('#listaTareas').on('click', 'li', function() {
        console.log(this);
        $(this).remove();
    });
    
});
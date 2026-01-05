$(document).ready(function(){




$('#calcular').click(function(){

    const monto = Number($('#monto').val())
    const interes = Number($('#interes').val())
    const plazo = Number($('#plazo').val())

    // operación de cálculo
    const cuota = monto * (interes / 12) * plazo


    $('#resultado').text(cuota)

})
    








    
})
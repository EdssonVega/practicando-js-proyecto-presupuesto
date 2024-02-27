    function añadir(){
        if(document.getElementById("+-").value=="mas"){
            ingresoDescripcion = document.getElementById("descripcion").value
            document.getElementById("mostrarDescripcionIngreso").innerHTML=ingresoDescripcion
            
            ingresoMonto = document.getElementById("monto").value
            document.getElementById("mostrarMontoIngreso").innerHTML=ingresoMonto
        } else if(document.getElementById("+-").value=="menos"){
            egresoDescripcion = document.getElementById("descripcion").value
            document.getElementById("mostrarDescripcionIngreso").innerHTML=ingresoDescripcion
            
            ingresoMonto = document.getElementById("monto").value
            document.getElementById("mostrarMontoIngreso").innerHTML=ingresoMonto
        }
    }      

    
    
    
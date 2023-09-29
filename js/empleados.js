const botonNuevo=document.querySelector('#btnEnviar')

const nombre=document.querySelector('#nombre')
const apellido=document.querySelector('#apellido')
const fechaing=document.querySelector('#feing')
const categoria=document.querySelector('#categoria')
const periodo=document.querySelector('#periodo')

botonNuevo.addEventListener("click", function(e){
    e.preventDefault();
    if(nombre.value===''){
        nombre.focus()
    }
    if(apellido.value===''){
        apellido.focus()
    }
    if(!fechaing.value){
        fechaing.focus()
    }
    if(categoria.value==='Seleccione Categoria'){
        categoria.focus()
    }
    if(periodo.value===''){
        periodo.focus()
    }
    validaPeriodo(periodo.value)
    
    console.log(categoria.value)
    console.log('boton enviar')
})

function validaPeriodo(periodo){

    condicion=true;
    let mesaux=periodo.substring(0,2).trim();
    let anoaux=periodo.substring(2,4).trim();

    if(isNaN(parseInt(mesaux)) || isNaN(parseInt(anoaux))){
        console.log('Ingreso un formato no permitido')
        condicion=false;
    }else{

        if((parseInt(mesaux)>=1 && parseInt(mesaux)<=12)){
            if(parseInt(anoaux)===23){
                // empleado.periodo=mesaux+anoaux;
                // flagPeri=false;
                condicion=true;
            }else{
                condicion=false;
                console.log('El sistema tiene cargados basicos unicamente del año 2023, disculpe.');
            }
        }else{
            console.log('Ha ingresado el periodo en un formato no aceptado');
            condicion=false;
        }
        return condicion;
    }    
}
const elementosAlmacenados = localStorage.getItem('ArrayLocal');
const categorias=[
    {numcate: 0,nomcate:'CADETE'},
    {numcate: 1,nomcate: 'APRENDIZ'},
    {numcate: 2,nomcate: 'PERS.AUXILIAR'},
    {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
    {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
    {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
    {numcate: 6,nomcate: 'FARMACEUTICO'},
]

const tablaElementos = document.getElementById('tablaElementos');

if (elementosAlmacenados) {
    const miArray = JSON.parse(elementosAlmacenados);

    miArray.forEach(elemento => {
        const fila = document.createElement('tr');

        const idCelda = document.createElement('td');
        idCelda.textContent = elemento.id;
        fila.appendChild(idCelda);

        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = elemento.nombre;
        fila.appendChild(nombreCelda);

        const apellidoCelda = document.createElement('td');
        apellidoCelda.textContent = elemento.apellido;
        fila.appendChild(apellidoCelda);

        const categoriaCelda = document.createElement('td');
        categoriaCelda.textContent = categorias[elemento.categoria].nomcate;
        fila.appendChild(categoriaCelda);

        const brutoCelda = document.createElement('td');
        brutoCelda.textContent = elemento.bruto;
        fila.appendChild(brutoCelda);

        const iconosCelda = document.createElement('td');
        const iconElement = document.createElement('i');
        iconElement.classList.add('fas', 'fa-edit');
        iconosCelda.appendChild(iconElement);
        fila.appendChild(iconosCelda);
        iconElement.addEventListener('click', function(){
            const idEditar=elemento.id;
            window.location.href='editar.html?id='+idEditar;
        })
        
        const iconElement2 = document.createElement('i');
        iconElement2.style.marginLeft='10px';
        iconElement2.classList.add('fas', 'fa-trash-alt');
        iconosCelda.appendChild(iconElement2);

        iconElement2.addEventListener('click', function(){
            Swal.fire({
                title: 'Estas seguro ?',
                text: "De verdad queres borrarlo ?!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si, borrarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Borrado!',
                    'Los datos han sido borrados',
                    'success'
                  )
                  const idEliminar=elemento.id;
                  const elementosAlmacenados = JSON.parse(localStorage.getItem('ArrayLocal'));
                  const elementosActualizados = elementosAlmacenados.filter(el => el.id !== idEliminar);
                  localStorage.setItem('ArrayLocal', JSON.stringify(elementosActualizados));
                  fila.remove();      

                }
              })          
            
        })

        tablaElementos.appendChild(fila);
    });
} else {
    console.log('No hay elementos almacenados en localStorage.');
}

const botonNuevo=document.querySelector('#btnNuevo')
const botonPromise=document.querySelector('#btnPromise')
const botonFetch=document.querySelector('#btnFetch')

botonNuevo.addEventListener("click", function(){
    window.location.href="empleados.html";
})

botonPromise.addEventListener("click", function(){
    window.location.href="cpromesas.html";
})

botonFetch.addEventListener("click", function(){
    window.location.href="cfetch.html";
})

const btnBuscar=document.querySelector('#btnBuscar');
const cadena=document.querySelector('#txtBusqueda');
btnBuscar.addEventListener("click", function(){
    window.location.href='buscar.html?cadena='+cadena.value;
})
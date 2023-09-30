let empleados=[];
const elementosAlmacenados = localStorage.getItem('ArrayLocal');

const tablaElementos = document.getElementById('tablaElementos');

// Obtener los elementos almacenados en localStorage

// Verificar si hay elementos almacenados
if (elementosAlmacenados) {
    // Parsear la cadena JSON para obtener un objeto JavaScript
    const miArray = JSON.parse(elementosAlmacenados);

    // Iterar sobre los elementos y agregar filas a la tabla
    miArray.forEach(elemento => {
        const fila = document.createElement('tr');

        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = elemento.nombre;
        fila.appendChild(nombreCelda);

        const apellidoCelda = document.createElement('td');
        apellidoCelda.textContent = elemento.apellido;
        fila.appendChild(apellidoCelda);

        const categoriaCelda = document.createElement('td');
        categoriaCelda.textContent = elemento.categoria;
        fila.appendChild(categoriaCelda);

        const brutoCelda = document.createElement('td');
        brutoCelda.textContent = elemento.bruto;
        fila.appendChild(categoriaCelda);

        tablaElementos.appendChild(fila);
    });
} else {
    console.log('No hay elementos almacenados en localStorage.');
}


const botonNuevo=document.querySelector('#btnNuevo')

botonNuevo.addEventListener("click", function(){
    window.location.href="empleados.html";
})
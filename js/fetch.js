const categorias=[
    {numcate: 0,nomcate:'CADETE'},
    {numcate: 1,nomcate: 'APRENDIZ'},
    {numcate: 2,nomcate: 'PERS.AUXILIAR'},
    {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
    {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
    {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
    {numcate: 6,nomcate: 'FARMACEUTICO'},
]

const apiUrl = 'https://my-json-server.typicode.com/leguigol/apiRecibos/recibos/';

fetch(`${apiUrl}/`)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }    
    return response.json();
  })
  .then(data => {
    console.log('Datos recibidos de la API:', data);
    data.forEach(elemento => {
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


        tablaElementos.appendChild(fila);
    });        

})
  .catch(error => {
    console.error('Ha ocurrido un error:', error);
  });


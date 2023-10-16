const categorias=[
    {numcate: 0,nomcate:'CADETE'},
    {numcate: 1,nomcate: 'APRENDIZ'},
    {numcate: 2,nomcate: 'PERS.AUXILIAR'},
    {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
    {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
    {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
    {numcate: 6,nomcate: 'FARMACEUTICO'},
]

const dataFromLocalStorage = localStorage.getItem('ArrayLocal');

const jsonData = JSON.parse(dataFromLocalStorage);

const processData = (data) => {
    return new Promise((resolve, reject) => {
      if (data && Array.isArray(data)) {
        const processedData = data.map(item => {
          if (typeof item === 'string') {
            return item.toUpperCase();
          } else {
            return item; 
          }
        });
        resolve(processedData); 
      } else {
        reject('Los datos no son válidos o no son un array.'); 
      }
    });
  };
  
  
processData(jsonData)
  .then(processedData => {
    processedData.forEach(elemento => {
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
    console.log('Datos procesados:', processedData);
  })
  .catch(error => {
    console.error('Ha ocurrido un error:', error);
  });
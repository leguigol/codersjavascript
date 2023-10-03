const urlParams = new URLSearchParams(window.location.search);
const cadena = urlParams.get('cadena');

const categorias=[
    {numcate: 0,nomcate:'CADETE'},
    {numcate: 1,nomcate: 'APRENDIZ'},
    {numcate: 2,nomcate: 'PERS.AUXILIAR'},
    {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
    {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
    {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
    {numcate: 6,nomcate: 'FARMACEUTICO'},
]

const titulo=document.querySelector('#titulo');

titulo.textContent="Buscando: "+cadena;

const elementosAlmacenados = JSON.parse(localStorage.getItem('ArrayLocal'));

const coincidencias = elementosAlmacenados ? elementosAlmacenados.filter(elemento => elemento.apellido === cadena) : [];

const tabla=document.querySelector('#tablaResultados')
tabla.classList.remove('invisible');

const tbody = tablaResultados.querySelector('tbody');

tbody.innerHTML = '';

if(coincidencias.length>0){
    coincidencias.forEach(elemento => {
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
      
        tbody.appendChild(fila);
      });
}else{
    tbody.classList.add("text-center");
    tbody.innerHTML = '<tr><td colspan="5">Sin resultados....</td></tr>';
    
}

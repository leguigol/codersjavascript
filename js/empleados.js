const empleadosGuardados = localStorage.getItem('ArrayLocal');
const empleados = empleadosGuardados ? JSON.parse(empleadosGuardados) : [];

class Carga {
    constructor(id,nombre,apellido,fechaing,categoria,periodo,bruto){
        this.id=id;
        this.nombre=nombre.toUpperCase();
        this.apellido=apellido.toUpperCase();
        this.fechaing=fechaing;
        this.categoria=categoria;
        this.periodo=periodo;
        this.bruto=parseFloat(bruto);
    }
}

let sumaAntiguedad;
let sumaBruto;
let id;

const botonCalcular=document.querySelector('#btnCalcular')

const empleado={
    id: '',
    nombre: '',
    apellido: '',
    fechaingreso: '',
    antiguedad: '',
    categoria: '',
    basico: '',
    periodo: ''
}

const categorias=[
        {numcate: 0,nomcate:'CADETE'},
        {numcate: 1,nomcate: 'APRENDIZ'},
        {numcate: 2,nomcate: 'PERS.AUXILIAR'},
        {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
        {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
        {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
        {numcate: 6,nomcate: 'FARMACEUTICO'},
]

const nombre=document.querySelector('#nombre')
const apellido=document.querySelector('#apellido')
const fechaing=document.querySelector('#feing')
const categoria=document.querySelector('#categoria')
const periodo=document.querySelector('#periodo')
const nombre2=document.querySelector('#nombre2')
const anti2=document.querySelector('#anti2')
const feingreso2=document.querySelector('#feingreso2')
const cate2=document.querySelector('#cate2')
const periodo2=document.querySelector('#periodo2')
const basico=document.querySelector('#basico')
const sumaanti=document.querySelector('#sumaanti')
const bruto=document.querySelector('#bruto')
const btnIngresar = document.getElementById('btnIngresar');

botonCalcular.addEventListener("click", function(e){
    let valido=true;
    e.preventDefault();
    if(nombre.value===''){
        Swal.fire({
            title: "El campo nombre es obligatorio!"
        })
        valido=false;
        nombre.focus()
    }
    if(apellido.value===''){
        Swal.fire({
            title: "El campo apellido es obligatorio!"
        })
        valido=false;
        apellido.focus()
    }
    if(!fechaing.value){
        Swal.fire({
            title: "El campo fecha de ingreso es obligatorio!"
        })
        valido=false;
        fechaing.focus()
    }
    if(categoria.value==='Seleccione Categoria'){
        Swal.fire({
            title: "El campo categoria es obligatorio!"
        })
        valido=false;
        categoria.focus()
    }
    if(periodo.value===''){
        Swal.fire({
            title: "El campo periodo es obligatorio!"
        })
        valido=false;
        periodo.focus()
    }
    valido=valido ? validaPeriodo(periodo.value) : false;
    console.log('valido:'+valido)
    if(valido){
        empleado.nombre=nombre.value;
        empleado.apellido=apellido.value;
        
        const valorFecha=new Date(fechaing.value);
        const dia=valorFecha.getDate()+1;
        const mes=valorFecha.getMonth();
        const ano=valorFecha.getFullYear();
        
        const partesFecha = fechaing.value.split('-');
        
        const año3 = partesFecha[0];
        const mes3 = partesFecha[1];
        const dia3 = partesFecha[2];

        // Creo la fecha en formato "dd/mm/aaaa"
        const fechaEnFormatoDeseado = `${dia3}/${mes3}/${año3}`;
        const fechaFormato1=`${año3}-${mes3}-${dia3}`;
        const antiguedad=calcularAntiguedad(valorFecha);
        empleado.fechaingreso=fechaFormato1;
        empleado.antiguedad=antiguedad;    
        empleado.categoria=categoria.value;
        
     
        let mesp=empleado.periodo.substring(0,2);
        let anop=empleado.periodo.substring(2,4);
        
        empleado.basico=funBasico(mesp,anop,empleado.categoria);
            
        sumaAntiguedad=parseFloat(empleado.basico)*parseInt(porcentajeAntiguedad(empleado.antiguedad))/100;
        sumaBruto=parseFloat(empleado.basico)+sumaAntiguedad;
            
        nombre2.textContent="Nombre:"+empleado.nombre;
        apellido2.textContent="Apellido:"+empleado.apellido;
        anti2.textContent="% Antig: "+parseInt(porcentajeAntiguedad(empleado.antiguedad))+" Años";
        feingreso2.textContent="Fecha de ingreso: "+fechaEnFormatoDeseado;
        cate2.textContent="Categoria: "+categorias[empleado.categoria].nomcate;
        periodo2.textContent="Periodo:"+empleado.periodo;
        basico.textContent="Basico: "+empleado.basico;
        sumaanti.textContent="$ antiguedad: "+sumaAntiguedad.toFixed(2);
        bruto.textContent="Total Bruto: "+sumaBruto.toFixed(2);
        
        marco.classList.remove('invisible');
        btnIngresar.classList.remove('invisible');    
    
    }
            

})

btnIngresar.addEventListener("click", function(e){
    e.preventDefault();

    sumaAntiguedad=parseFloat(empleado.basico)*parseInt(porcentajeAntiguedad(empleado.antiguedad))/100;
    sumaBruto=parseFloat(empleado.basico)+sumaAntiguedad;
    empleado.id=Date.now().toString(30);
    empleados.push(new Carga(empleado.id,empleado.nombre.toUpperCase(),empleado.apellido.toUpperCase(),empleado.fechaingreso,categorias[empleado.categoria].numcate,empleado.periodo,sumaBruto.toFixed(2)));
    
    localStorage.setItem('ArrayLocal',JSON.stringify(empleados));

    document.location.href="index.html";

})    

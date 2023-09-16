function calcularAntiguedad(f){
    hoy=new Date();
    const fechaParts = f.split('/');
    const dia2 = parseInt(fechaParts[0]);
    const mes2 = parseInt(fechaParts[1]);
    const ano2 = parseInt(fechaParts[2]);

    const fechaIngreso2 = new Date(ano2, mes2 - 1, dia2);

    const diferenciaAnos = hoy.getFullYear() - fechaIngreso2.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaIngreso2.getMonth();

    // if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaIngreso2.getDate())) {
    //     console.log('La antigüedad es:', diferenciaAnos - 1, 'años');
    // } else {
    //     console.log('La antigüedad es:', diferenciaAnos, 'años');
    // }
    return diferenciaAnos;
}
function porcentajeAntiguedad(a){
    // console.log('valor de a: '+a);
    let a2=parseInt(a)
    let porcentaje=0
    switch (true) {
        case a2<=1:
            porcentaje=7;
            break;
        case a2>=2 && a2<3:
            porcentaje=9;
            break;
        case a2>=3 && a2<4:
            porcentaje=11;
            break;
        case a2>=5 && a2<6:
            porcentaje=15;
            break;
        case a2>=6 && a2<7:
            porcentaje=17;
            break;
        case a2>=7 && a2<8:
            porcentaje=19;
            break;
        case a2>=8 && a2<9:
            porcentaje=21;
            break;
        case a2>=9 && a2<10:
            porcentaje=23;
            break;
        case a2>=10 && a2<11:
            porcentaje=25;
            break;
        case a2>=11 && a2<12:
            porcentaje=27;
            break;
        case a2>=12 && a2<13:
            porcentaje=29;
            break;
        case a2>=13 && a2<14:
            porcentaje=31;
            break;
        case a2>=14 && a2<15:
            porcentaje=33;
            break;
        case a2>=15 && a2<16:
            porcentaje=35;
            break;
        case a2>=16 && a2<17:
            porcentaje=37;
            break;
        case a2>=17 && a2<18:
            porcentaje=39;
            break;
        case a2>=18 && a2<19:
            porcentaje=41;
            break;
        case a2>=19 && a2<20:
            porcentaje=43;
            break;
       case a2>=20 && a2<25:
            porcentaje=45;
            break;
        case a2>=25:
            porcentaje=50
            break;                

    }
    return porcentaje;
}
function funBasico(m,a,c){
    let periodo=m+a;
    // console.log(periodo);
    let basico=0;
    switch (periodo){
        case periodo='0123':
            switch (c){
                case c=0:
                    basico=124085.64;
                    break;
                case c=1:
                    basico=124085.64;
                    break;
                case c=2:
                    basico=131034.41;
                    break;
                case c=3:
                    basico=139335.76;
                    break;
                case c=4:
                    basico=139335.76;
                    break;
                case c=5:
                    basico=170475.20;
                    break;
                case c=6:
                    basico=188949.43;
                    break;
            }
        case periodo='0223':
            switch (c){
                case c=0:
                    basico=124085.64;
                    break;
                case c=1:
                    basico=124085.64;
                    break;
                case c=2:
                    basico=131034.41;
                    break;
                case c=3:
                    basico=139335.76;
                    break;
                case c=4:
                    basico=139335.76;
                    break;
                case c=5:
                    basico=170475.20;
                    break;
                case c=6:
                    basico=188949.43;
                    break;
            }
        case periodo='0323':
            switch (c){
                case c=0:
                    basico=124085.64;
                    break;
                case c=1:
                    basico=124085.64;
                    break;
                case c=2:
                    basico=131034.41;
                    break;
                case c=3:
                    basico=139335.76;
                    break;
                case c=4:
                    basico=139335.76;
                    break;
                case c=5:
                    basico=170475.20;
                    break;
                case c=6:
                    basico=188949.43;
                    break;
            }
        case periodo='0423':
            switch (c){
                case c=0:
                    basico=145610.15;
                    break;
                case c=1:
                    basico=145610.15;
                    break;
                case c=2:
                    basico=153764.30;
                    break;
                case c=3:
                    basico=163505.63;
                    break;
                case c=4:
                    basico=163505.63;
                    break;
                case c=5:
                    basico=200046.68;
                    break;
                case c=6:
                    basico=221725.55;
                    break;
        }
        case periodo='0523':
            switch (c){
                case c=0:
                    basico=145610.15;
                    break;
                case c=1:
                    basico=145610.15;
                    break;
                case c=2:
                    basico=153764.30;
                    break;
                case c=3:
                    basico=163505.63;
                    break;
                case c=4:
                    basico=163505.63;
                    break;
                case c=5:
                    basico=200046.68;
                    break;
                case c=6:
                    basico=221725.55;
                    break;
        }
        case periodo='0623':
            switch (c){
                case c=0:
                    basico=145610.15;
                    break;
                case c=1:
                    basico=145610.15;
                    break;
                case c=2:
                    basico=153764.30;
                    break;
                case c=3:
                    basico=163505.63;
                    break;
                case c=4:
                    basico=163505.63;
                    break;
                case c=5:
                    basico=200046.68;
                    break;
                case c=6:
                    basico=221725.55;
                    break;
        }
        case periodo='0723':
            switch (c){
                case c=0:
                    basico=171819.98;
                    break;
                case c=1:
                    basico=171819.98;
                    break;
                case c=2:
                    basico=181441.87;
                    break;
                case c=3:
                    basico=192936.64;
                    break;
                case c=4:
                    basico=192936.64;
                    break;
                case c=5:
                    basico=236055.08;
                    break;
                case c=6:
                    basico=261636.15;
                    break;
        }


    }
    return basico;
}
const empleado={
    nombre: '',
    apellido: '',
    fechaingreso: '',
    antiguedad: '',
    categoria: '',
    basico: '',
    periodo: ''
}

class Carga {
    constructor(nombre,apellido,categoria,total){
        this.nombre=nombre.toUpperCase();
        this.apellido=apellido.toUpperCase();
        this.categoria=categoria;
        this.total=parseFloat(total);
    }
}

alert('PROCESO DE CARGA DE EMPLEADOS Y CALCULO DE RECIBO DE SUELDO')
const empleados=[];

let condicion=true;
let contador=0;

while(condicion){

    let nombreValido=false;

    let nombre=prompt('Ingrese Nombre del empleado (FIN PARA TERMINAR)');
    if(nombre.toUpperCase()=="FIN"){
        condicion=false;
        break;
    }
    let apellido=prompt('Ingrese Apellido del empleado');
    
    if(nombre!=="" && apellido!==""){
        nombreValido=true;
    }
    
    let fechaing=prompt('Ingrese fecha de ingreso:')
    
    if(fechaing===null){
        console.log('cancelado por el usuario...');
        condicion=false;
        break;
    }

    empleado.nombre=nombre;
    empleado.apellido=apellido;
    
    const fechaParts = fechaing.split('/');
    
    // console.log(fechaParts);
    
    const dia = parseInt(fechaParts[0], 10);
    const mes = parseInt(fechaParts[1], 10);
    const ano = parseInt(fechaParts[2], 10);
    
    const esFechaValida = !isNaN(dia) && !isNaN(mes) && !isNaN(ano)
    
    if(!esFechaValida){
        console.log('no es una fecha valida');
        condicion=false;
        break;
    }else if(!nombreValido){
        console.log('debe indicar nombre y apellido');
        condicion=false;
        break;
    }else{
        const antiguedad=calcularAntiguedad(fechaing);
        empleado.fechaingreso=fechaing;
        empleado.antiguedad=antiguedad;    
    }
    
    console.log('Seleccione que categoria corresponde:');
    
    const categorias=[
        {numcate: 0,nomcate:'CADETE'},
        {numcate: 1,nomcate: 'APRENDIZ'},
        {numcate: 2,nomcate: 'PERS.AUXILIAR'},
        {numcate: 3,nomcate: 'PERSONAL CON ASIG.ESPECIFICA'},
        {numcate: 4,nomcate: 'AYUDANTE EN GESTION'},
        {numcate: 5,nomcate: 'PERSONAL EN GESTION'},
        {numcate: 6,nomcate: 'FARMACEUTICO'},
    ]
    
    for(i=0;i<=6;i+=1){
        console.log(categorias[i].numcate+"-"+categorias[i].nomcate);
    }
    
    let flagCate=true;
    while(flagCate){
        let categoria=prompt('Ingrese numero de categoria: ');
        if(categoria>=0 && categoria<=6){
            let categoria2=parseInt(categoria);
            empleado.categoria=categoria2;
            flagCate=false;
        }else{
            console.log('Numero de categoria invalido!');
            condicion=false;
        } 
    }
    
    let flagPeri=true;
    while(flagPeri){
        let periodo=prompt('Indique periodo de Liquidacion (de Enero a Julio 2023 - formato MMAA)');
        let mesaux=periodo.substring(0,2).trim();
        let anoaux=periodo.substring(2,4).trim();
        
        // console.log('mesaux: '+mesaux);
        // console.log('anoaux:'+anoaux);

        if(isNaN(parseInt(mesaux)) || isNaN(parseInt(anoaux))){
            console.log('Ingreso un formato no permitido')
        }else{

            if((parseInt(mesaux)>=1 && parseInt(mesaux)<=12)){
                if(parseInt(anoaux)===23){
                    empleado.periodo=mesaux+anoaux;
                    flagPeri=false;
                }else{
                    console.log('El sistema tiene cargados basicos unicamente del año 2023, disculpe.');
                }
            }else{
                console.log('Ha ingresado el periodo en un formato no aceptado');
                condicion=false;
            }
        }    
    }
    
    console.log('EMPLEADO:');
    console.log('-------------------------------------');
    console.log(empleado.nombre.toUpperCase()+" "+empleado.apellido.toUpperCase());
    console.log('Fecha de ingreso: '+empleado.fechaingreso);
    console.log('Antiguedad: '+empleado.antiguedad+' Años');
    console.log('Categoria: '+empleado.categoria+"-"+categorias[empleado.categoria].nomcate);
    console.log('% de Antiguedad: '+porcentajeAntiguedad(empleado.antiguedad));
    
    let mesp=empleado.periodo.substring(0,2);
    let anop=empleado.periodo.substring(2,4);
    
    // console.log('mesp:'+mesp);
    // console.log('anpp:'+anop);
    
    empleado.basico=funBasico(mesp,anop,empleado.categoria);
    
    // console.log(empleado.basico);    

    console.log('-------------------------------------');
    console.log('Basico:         '+empleado.basico);

    let sumaAntiguedad=parseFloat(empleado.basico)*parseInt(porcentajeAntiguedad(empleado.antiguedad))/100;
    let sumaBruto=parseFloat(empleado.basico)+sumaAntiguedad;
    console.log('Antiguedad:     '+sumaAntiguedad.toFixed(2))
    console.log('TOTAL BRUTO:    '+sumaBruto.toFixed(2));

    empleados.push(new Carga(empleado.nombre.toUpperCase(),empleado.apellido.toUpperCase(),categorias[empleado.categoria].nomcate,sumaBruto.toFixed(2)));
    contador+=1;
}

if(empleados.length>0){
    alert('CARGA FINALIZADA, AHORA PROCEDEREMOS A BUSCAR UN APELLIDO EN LA CARGA Y DE PASO UTILIZAR EL COMANDO FILTER PARA BUSCAR EN UN ARRAY.');

    let busqueda=prompt('Ingrese Apellido a Buscar:');
    
    const resultado=empleados.filter((el)=>el.apellido===busqueda.toUpperCase());
    
    // for(t=0;t<contador;t+=1){
    //     console.log(empleados[t]);
    // }
    if(resultado.length===0){
        console.log('No se encontraron resultados con ese apellido');
    }else{
        resultado.forEach((emp)=>{ 
            console.log('EMPLEADO:');
            console.log('-------------------------------------');
            console.log(emp.nombre.toUpperCase()+" "+emp.apellido.toUpperCase());
            console.log('Categoria: '+emp.categoria);
            console.log('TOTAL BRUTO:    '+emp.total.toFixed(2));
        })
    }
    
}

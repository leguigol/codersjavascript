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
    basico: ''
}

let condicion=true;

while(condicion){

    let nombreValido=false;

    let nombre=prompt('Ingrese Nombre del empleado');
    let apellido=prompt('Ingrese Apellido del empleado');
    
    if(nombre!=="" && apellido!==""){
        nombreValido=true;
    }
    
    let fechaing=prompt('Ingrese fecha de ingreso:')
    
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
    
    let periodo=prompt('Indique periodo de Liquidacion (de Enero a Julio 2023 - formato MMAA)');
    
    console.log('EMPLEADO:');
    console.log('-------------------------------------');
    console.log(empleado.nombre+" "+empleado.apellido);
    console.log('Fecha de ingreso: '+empleado.fechaingreso);
    console.log('Antiguedad: '+empleado.antiguedad+' Años');
    console.log('Categoria: '+empleado.categoria+"-"+categorias[empleado.categoria].nomcate);
    console.log('% de Antiguedad: '+porcentajeAntiguedad(empleado.antiguedad));
    
    let mesp=periodo.substring(0,2);
    let anop=periodo.substring(2,4);
    
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
    condicion=false;
    
}


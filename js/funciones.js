function validaPeriodo(periodo){

    condicion=true;
    let mesaux=periodo.substring(0,2).trim();
    let anoaux=periodo.substring(2,4).trim();

    if(isNaN(parseInt(mesaux)) || isNaN(parseInt(anoaux))){
        Swal.fire({
            title: "Ingreso un formato de PERIODO no permitido!"
        })

        condicion=false;
    }else{

        if((parseInt(mesaux)>=1 && parseInt(mesaux)<=12)){
            if(parseInt(anoaux)===23){
                empleado.periodo=mesaux+anoaux;
                condicion=true;
            }else{
                condicion=false;
                Swal.fire({
                    title: "El sistema tiene cargados basicos unicamente del año 2023, disculpe.!"
                })
            }
        }else{
            Swal.fire({
                title: "Ha ingresado el periodo en un formato no aceptado!"
            })
            condicion=false;
        }
        return condicion;
    }    
}

function calcularAntiguedad(f){
    hoy=new Date();
    
    const dia2=f.getDate()+1;
    const mes2=f.getMonth()+1;
    const ano2=f.getFullYear();
    
    const fechaIngreso2 = new Date(ano2, mes2 - 1, dia2);

    const diferenciaAnos = hoy.getFullYear() - fechaIngreso2.getFullYear();
//    const diferenciaMeses = hoy.getMonth() - fechaIngreso2.getMonth();

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
    console.log(periodo);
    let basico=0;
    switch (periodo){
        case '0123':
            switch (c){
                case '0':
                    basico=124085.64;
                    break;
                case '1':
                    basico=124085.64;
                    break;
                case '2':
                    basico=131034.41;
                    break;
                case '3':
                    basico=139335.76;
                    break;
                case '4':
                    basico=139335.76;
                    break;
                case '5':
                    basico=170475.20;
                    break;
                case '6':
                    basico=188949.43;
                    break;
            }
        break;    
        case '0223':
            switch (c){
                case '0':
                    basico=124085.64;
                    break;
                case '1':
                    basico=124085.64;
                    break;
                case '2':
                    basico=131034.41;
                    break;
                case '3':
                    basico=139335.76;
                    break;
                case '4':
                    basico=139335.76;
                    break;
                case '5':
                    basico=170475.20;
                    break;
                case '6':
                    basico=188949.43;
                    break;
            }
        break;    
        case '0323':
            switch (c){
                case '0':
                    basico=124085.64;
                    break;
                case '1':
                    basico=124085.64;
                    break;
                case '2':
                    basico=131034.41;
                    break;
                case '3':
                    basico=139335.76;
                    break;
                case '4':
                    basico=139335.76;
                    break;
                case '5':
                    basico=170475.20;
                    break;
                case '6':
                    basico=188949.43;
                    break;
            }
        break;    
        case '0423':
            switch (c){
                case '0':
                    basico=145610.15;
                    break;
                case '1':
                    basico=145610.15;
                    break;
                case '2':
                    basico=153764.30;
                    break;
                case '3':
                    basico=163505.63;
                    break;
                case '4':
                    basico=163505.63;
                    break;
                case '5':
                    basico=200046.68;
                    break;
                case '6':
                    basico=221725.55;
                    break;
            }
        break;
        case '0523':
            switch (c){
                case '0':
                    basico=145610.15;
                    break;
                case '1':
                    basico=145610.15;
                    break;
                case '2':
                    basico=153764.30;
                    break;
                case '3':
                    basico=163505.63;
                    break;
                case '4':
                    basico=163505.63;
                    break;
                case '5':
                    basico=200046.68;
                    break;
                case '6':
                    basico=221725.55;
                    break;
        }
        break;
        case '0623':
            switch (c){
                case '0':
                    basico=145610.15;
                    break;
                case '1':
                    basico=145610.15;
                    break;
                case '2':
                    basico=153764.30;
                    break;
                case '3':
                    basico=163505.63;
                    break;
                case '4':
                    basico=163505.63;
                    break;
                case '5':
                    basico=200046.68;
                    break;
                case '6':
                    basico=221725.55;
                    break;
        }
        break;
        case '0723':
            switch (c){
                case '0':
                    basico=171819.98;
                    break;
                case '1':
                    basico=171819.98;
                    break;
                case '2':
                    basico=181441.87;
                    break;
                case '3':
                    basico=192936.64;
                    break;
                case '4':
                    basico=192936.64;
                    break;
                case '5':
                    basico=236055.08;
                    break;
                case '6':
                    basico=261636.15;
                    break;
        }
        break;


    }
    return basico;
}

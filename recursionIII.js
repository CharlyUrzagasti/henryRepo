// Completa la función 'encontrar MasCaros' a continuación. 
//  La función deberá retornar un ARREGLO DE OBJETOS. * La función recibe por parámetro(s):
// 1. ARREGLO DE OBJETOS 'tragos'
// 2. NÚMERO 'precio'
//     * No modifiques nada por fuera del cuerpo de la función. 
//  * TIP: Puedes agregar default parameters a la función.

// function encontrarMasCaros(tragos, precio) { // Tu código aquí: }


//     INSTRUCCIONES Dentro del bar de Henry queremos ajustar algunos precios.Para esto debemos identificar aquellos tragos que son caros.
//      Para esto te pedimos que crees una función que nos permita encontrar esta información.
//       Crea una función que reciba por parámetro un arreglo de objetos representando algunos tragos, y un número que será el precio del trago.
//        La función debe devolver todos los tragos que tengan un precio igual o superior al que recibes.
//         En el caso de no encontrar tragos con estos precios, debe devolver el string: "No hay tragos disponibles"
//     let tragos = [{
//         nombre: "Whisky', precio: 312 },
//     nombre: 'Ron', precio: 156
//     }, nombre: 'Gin', precio: 215 },
// { nombre: 'Vino tinto', precio: 180 }); 
//     encontrar Mascaros(tragos, 288); // Devuelve → [{ nombre: "Whisky precio: 312 }, { nombre: 'Gin', precio: 215 }] 
// ACLARACIONES Únicamente se puede resolver aplicando recursión Si es necesario, puedes agregar default parameters a la función.







// tragos es un arreglo de objetos tragos como sigue  
// let tragos = [{ nombre: "Whisky', precio: 312 }, {nombre: 'Ron', precio: 156 }, {nombre: 'Gin', precio: 215 },
// { nombre: 'Vino tinto', precio: 180 }];



function encontrarMasCaros(tragos, precio, index = 0, tragosCaros = []) {


    if (index >= tragos.length) {
        return tragosCaros
    }

    if (tragos[index].precio >= precio) {
        tragosCaros.push(tragos[index])
    }

    // return encontrarMasCaros(tragos, precio, index + 1, tragosCaros)

    if(tragosCaros>0){
        return encontrarMasCaros(tragos, precio, index + 1, tragosCaros)  
    }
    return "No hay tragos disponibles "

}


if (result.length === 0) {
    return "No se encontraron tragos disponibles a ese precio.";
  } else {
    return result;
  }

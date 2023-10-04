// INTRODUCCION



// En el bar donde trabajas, el sistema de registro está caído.

// Necesitan que crees una función que permita ordenar los pedidos de los clientes para poder preparar sus bebidas.


// INSTRUCCIONES


// La función recibe por parámetro un arreglo de objetos, en el que cada objeto tiene una propiedad nombre (string),
//  y una propiedad pedido que es a su vez un objeto (con propiedades nombre (string) y precio (numero) del trago).

// Debes ordenar la lista de clientes a partir del precio de los tragos (del más barato al más caro),
//  y retornar el arreglo ordenado.


// EJEMPLO


// Let pedidos = [

// [ nombre: "Franco", pedido: nombre: 'Fernet', precio: 260 },

// nombre: 'Juan', pedido: (notbre: 'Sancia', precio: 228 }},

// nombre: 'Rico', pedide: ( norbre: 'vodka', precio: 285 }}, nombre: 'Fer", pedida: (rombre: 'Martini', precio: 438 }}];

// ordenados(pedidos); 
// [rortre: Juan', pedido: rorbre: Garcia, precio: 2:3}}, {rortre: France, pedico: nonore: 'Fernet', precio: 260}},

// {rorbre: Nico', pedido: { rombre: Vodka', precic: 285}},

// {rombre: Fer', pedido: nombre: 'Martini', precio: 439 }}]

// ACLARACIONES

// Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MENOR a MAYOR según el precio de cada trago

// • NO puedes utilizar el método sort(), ya que los tests no pasarán.

// • Revisa cómo acceder a cada precio para realizar la respectiva lógica a la hora de comparar.

// • Debes devolver un solo arreglo de objetos 





function ordenarPedidos (pedidos) {

    // Tu código aquí
   
  for (let i = 0; i < pedidos.length; i++) {
    for (let j = i+1; j < pedidos.length; j++) {
      
      // Comparamos los precios y los intercambiamos si es necesario
      if (pedidos[i].pedido.precio > pedidos[j].pedido.precio) {
        var aux = pedidos[i];
        pedidos[i] = pedidos[j];
        pedidos[j] = aux;
      }
    }
    
    
  }

  return pedidos;
}


const pedidos = [
   
  { nombre: "Franco", pedido: { nombre: 'Fernet', precio: 260 } },
  { nombre: 'Juan', pedido: { nombre: 'Sancia', precio: 228 } },
  { nombre: 'Rico', pedido: { nombre: 'Vodka', precio: 285 } },
  { nombre: 'Fer', pedido: { nombre: 'Martini', precio: 139 } }
];

const pedidosOrdenados = ordenarPedidos(pedidos);

console.log(pedidosOrdenados);

     
    
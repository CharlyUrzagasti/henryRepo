// INTRODUCCION
// En nuestro bar ya hemos terminado de recibir los pedidos de los clientes y llego la hora de
// cobrar.
// Para poder cumplir con esta tarea necesitamos que crees una función que nos devuelva el
// pedido de un cliente en especifico.
// INSTRUCCIONES
// Crea un nuevo método llamado entregarPedido en el prototipo de la LINKEDLIST el cual acepte
// por parámetro un arreglo de strings .
// El método debe devolver una nueva LINKEDLIST en la que en la que cada nodo contenga un
// objeto con solo el nombre del pedido y su precio en una propiedad llamada recibo. Los pedidos
// deben ser los de aquellos clientes que recibes por parámetro.
// Aclaraciones
// • Si algún cliente del arreglo no tiene ningún pedido registrado, simplemente retorna una lista
// con los pedidos de todos los demás clientes.
// Si ningún cliente del arreglo tiene pedidos registrados, deberás devolver false.
// La clase LinkedList ya se encuentra declarada con sus métodos add search y remove 

// Completar el método entregarPedido. La función debe retornar una Lista Enlazada. La función recibe por parámetro un array de strings "clientes" por parámetro

function LinkedList() {
    this.head = null ;
 }
   
 function Node(value) {
 
   this.value = value ;
   this.next = null;
 }
 
 LinkedList.prototype.add = function(valor){
   var miNodo = new Node(valor)
   var current = this.head
 
     if(this.head === null){    // caso lista vacía
       this.head = miNodo       // agrego el nodo (un vagón en la analogía)
       return valor
     }
 
       while(current.next !== null){     // Si el apuntador .next no es nulo entonces avanzamos un paso 
         current = current.next
       }
         current.next = miNodo
     
 }


     LinkedList.prototype.entregarPedido = function (clientes){
      // la lista enlazada original estará formada por un array de objetos "pedidosCargados" donde cada uno tiene los datos de los clientes
      // {nombre: 'Juan, trago:'Destornillador', precio:2100}
      var lista = new LinkedList()

      for(let i=0; i < pedidosCargados.length; i++){      // primero construyo la lista enlazada con los pedidos cargados
          lista.add(pedidosCargados[i])
      }

       let Arr=[]                                        // en este array pondremos los valores (objetos) de los nodos en la nueva Linkedlist 
          for(var i=0 ; i < clientes.length; i++){
            
      const valor = {}                     // en este objeto ponemos el valor de los nodos de la nueva linkedlist {pedido:'Fernet',recibo:2800}

           for(let j=0; j < pedidosCargados.length; j++){

              if(clientes[i] === pedidosCargados[j].nombre){
                  valor.pedido = pedidosCargados[j].trago         // la primera propiedad del objeto es pedido y la segunda recibo
                  valor.recibo = pedidosCargados[j].precio
                      Arr.push(valor)                            
              }                
          }
      }
          if(Arr.length === 0)  return false  // si ningún cliente del arreglo "clientes" tiene pedidos cargados
          
    var nuevalista = new LinkedList()       // ahora construimos la nueva lista enlazada con los objetos guardados en Arr

      for(let i=0; i < Arr.length; i++){      
          nuevalista.add(Arr[i])
      }
             return nuevalista
}

pedidosCargados = [{nombre: 'Felipe',trago: 'Fernet', precio: 1400}, {nombre: 'Susana',trago: 'Margarita', precio: 2500} {nombre: 'Valeria',trago: 'Gaseosa', precio: 1100}, 
{nombre: 'Jorge',trago: 'Destornillador', precio: 3200},{nombre: 'Pablo',trago: 'Daiquiri', precio: 2840},{nombre: 'Tony',trago: 'Champagne', precio: 3250}]

clientes = ['Pablo', 'Valeria', 'Felipe']
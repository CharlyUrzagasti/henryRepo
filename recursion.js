
   /*                                      RECURSION
 1. Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
   cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
   u objetos anidados (Atencion: excepto que esten adentro de un array, esas propiedades no se cuentan)
   
  Ejemplo:
  var obj = {
    a: {
      a1: 10,
      a2: "10",
      a3: { 
          a3a: "10", 
          a3b: "10", 
          a3c: { 
              a3c1: true 
          } },
    },
    b: 2,
    c: [1, { a: 1 }, "Duda"],
  };
 countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
 dentro de a tenemos 3 propiedades mas, y a3 tiene otras 3.
​
 Propiedades: a, a1, a2, a3, a3a, a3b, a3c, a3c1, b, c --> 10 en total
  */
 ​
 var countProps = function (obj) {
    // completa tu codigo aqui:
​
  };
  console.log(countProps(obj))
​
  // ----------------------------------------------//
  /* 
2.  Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
  número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
  El array será recibido por parámetro.
​
  Ejemplo:
     const array = [1, [2, [3,4]], [5,6], 7];
     countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
  
  Como estamos practicando recursion no se puede utilizar el metodo .flat()
  Pero esta bueno! Investigalo!
  */
​
  var countArray = function (array) {
  // Completa tu codigo aqui:
​
  };
  
  // ----------------------------------------------//
 
/*
3. Objetivo: Realizar una funcion que invierta el orden del string recibido
 Ejemplo: espejo("hola susuna")
         --> 'anusus aloh'
*/
  function espejo(str) {
    //Completa tu codigo aqui:  
    
  }
  
  console.log(espejo("hola susana"))
  
    // ----------------------------------------------//
/*
4. Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %
​
Ejemplo 
parImpar(20)
"Par"
*/
​
let parImpar = () => {
​
}
    // ----------------------------------------------//
​
  /*
  5.  Objetivo: Realizar un contador decreciente hasta llegar a 1, que arranque del numero que se le pasa por parametro
Desafio: Devolver los numeros en un array
​
Ejemplo 
restar(8)
(8)  [8, 7, 6, 5, 4, 3, 2, 1]
​
*/
​
function restar() {
 
 
 
​
}
  /*                             QUEUE 
​
  Dejare implementada la clase y sus prototipos basicos para que solo te concentres en realizar nuevos ejercicios:
  */
​
  function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function (value) {
    this.array.push(value);
  };
  
  Queue.prototype.dequeue = function () {
    return this.array.shift();
  };
  
  Queue.prototype.size = function () {
    return this.array.length;
  };
  
  /*
  Ahora si, realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
  Ejemplo
   let array = [1, "a", 2, "b", [1, 2, 3]]                          
   filtraQueue(array)
   -> ["a", "b", [1, 2, 3]]
​
    */
​
  function filtraQueue(arg) {
 // COmpleta aqui tu codigo:
  
  }
  var arrayQueue = [1, "a", 2, "b", [1, 2, 3]]
  console.log(filtraQueue(arrayQueue))
  
  /* ------------------------------------------------------------------------------------
  
    Salio facil? Vamos con una mas compleja!
    Implementar la función mergeQueues que a partir de dos queues recibidas por parametro. Esta funcion debe devolver una nueva Queue que vaya mergeando los elementos de las anteriores.
    Ejemplo:
    - queueOne: [1,3,5]
    - queueTwo: [2,4,6]
    mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
    
    Respira! Piensa! Intenta!
​
    Pista: Lo que recibe NO son arreglos sino que son Queues.
    */
​
  var mergeQueues = function (queueOne, queueTwo) {
   // Completa aqui tu codigo:
​
  };
  
  var queue1 = new Queue()
  queue1.enqueue(1)
  queue1.enqueue(32)
  queue1.enqueue(5)
  var queue2 = new Queue()
  queue2.enqueue(2)
  queue2.enqueue(4)
  queue2.enqueue(60)
  console.log(mergeQueues(queue1, queue2))
​
   /* ------------------------------------------------------------------------------------*/
// Implementar una función que permita en una base de datos de aprox. 2000 automóviles seleccionar los 10 modelos más nuevos, los 10 autos
// más caros , los 10 autos más económicos y los 10 más viejos que tiene la empresa.

// Cada automóvil será caracterizado por un objeto automóvil que tiene la siguiente info. {Marca : 'Ford' , Color : 'gris', 
// Modelo_año ; 1998, Costo: 5000, Kilometraje: 550000 }

// Recibimos un array de objetos por parámetro, donde cada objeto es un automóvil con todas los atributos. la función constructora será
// definida aceptando el array de objetos autos y el this.value será un array de objetos

function BinarySearchTree(cars) {
    this.value = cars;
    this.left = null;
    this.right = null;
  }
 
  // El método insert insertará los nodos seleccionados por la propiedad Modelo_año
   BinarySearchTree.prototype.insert = function (car) {
    // ese es el nodo a agregar
    var newBT = new BinarySearchTree(car)
 
    // caso árbol vacío le agrego el nodo que será nodo raiz
    if(this.value === null){
       this.value = newBT.Modelo_año
    }
 
 if(car.Modelo_año < this.value.Modelo_año){
    if(this.left){
    // hay hijo a la izquierda. Continúo recursivamente (cuando continuamos recursivamente empezamos desde ese nodo hijo) 
       this.left.insert(car)
    } else{
       // no hay hijo a la izquierda, agrego el nuevo nodo
       this.left = newBT
    }
 }
    if(car.Modelo_año> this.value.Modelo_año){
       if(this.right){
       // hay hijo a la derecha, continúo recursivamente
          this.right.insert(car)
       } else{
          // no hay hijo a la derecha, agrego el nuevo nodo
          this.right = newBT
       }
   }
 }
 // Se trata de obtener un método que nos dé los N menores valores de un árbol
 BinarySearchTree.prototype.obtenerNmenoresValores = function(N,array = []){
  // lo que sigue es hacer un recorrido del árbol in-order y verificar estár en el último a izquierda (el menor) para se puesto 
  // en el array hasta llegar al número N de valores. 
   if(this.value === null){
      return array
   }
    if(array.length >= N){
      return array
    }
      if(this.left){
         this.left.obtenerNmenoresValores(N,array)
      }
      // cuando no hay más nodos a izquierda significa que llegamos a un mínimo y sigue y guarda en el array y sigue
         if(array.length < N){
           array.push(this.value)
      }
      if(this.right){
         this.right.obtenerNmenoresValores(N,array)
      }
         return array
   }
 
 // Aquí buscamos un método que nos dé los N mayores valores de un árbol
 BinarySearchTree.prototype.obtenerNmayoresValores = function(N,array = []){
   // lo que sigue es hacer un recorrido del árbol in-order y verificar estár en el último a izquierda (el menor) para se puesto 
   // en el array hasta llegar al número N de valores. 
    if(this.value === null){
       return array
    }
     if(array.length >= N){
       return array
     }
 
     if(this.right){
      this.right.obtenerNmayoresValores(N,array)
   }
      // cuando no hay más nodos a derecha sigue, lo guarda en el array y sigue
     if(array.length < N){
       array.push(this.value)
       }
       
       if(this.left){
         this.left.obtenerNmayoresValores(N,array)
      }
          return array
    }
 
    // Ahora instanciamos el arbol BTS 
    const  cars = [{Marca :'Ford Ranger', Color: 'gris', Modelo_año : 1998 , Costo : 6100, Kilometraje: 540000} , 
    {Marca :'Volkswagen Gol', Color: 'negro noche', Modelo_año : 2005 , Costo : 5000, Kilometraje: 358000}, 
    {Marca :'Fiat Cronos', Color: 'blanco', Modelo_año : 2022 , Costo : 9200, Kilometraje: 21000}];
 
    var  miArbol = new BinarySearchTree(cars[0])
 
     for(var i=0 ; i < cars.length ; i++){
             
            miArbol.insert(cars[i])
 
     }
           
 
    // Usamos el método creado para obtener los N autos más nuevos
 
     //miArbol.obtenerNmayoresValores(4)
 
 
     module.exports = {
       BinarySearchTree
    };
 
 
 
 
 
 
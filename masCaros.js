// tragos es un arreglo de objetos tragos como sigue  
    // let tragos = [{ nombre: "Whisky', precio: 312 }, {nombre: 'Ron', precio: 156 }, {nombre: 'Gin', precio: 215 },
    // { nombre: 'Vino tinto', precio: 180 }];



    function encontrarMasCaros(tragos,precio, index = 0, tragosCaros = []) {

   
        if(index >= tragos.length){
         return tragosCaros
       }
         
     if(tragos[index].precio >= precio){
         tragosCaros.push(tragos[index])
     }
     
         return encontrarMasCaros(tragos,precio, index +1,tragosCaros)
    
   }
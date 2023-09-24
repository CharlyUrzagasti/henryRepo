function pelisEstrenos(listaDePeliculas) {
    return function (nombresEstrenos) {
        var peliculasEncontradas = 0;

for (let i = 0; i< listaDePeliculas.length;i++) {
    
 for(let j=0; j< nombresEstrenos.length;j++){

    if(listaDePeliculas[i].nombre === nombresEstrenos[j]){
        peliculasEncontradas ++
        listaDePeliculas[i].estreno=true
    }
    
 }   
}

      if (peliculasEncontradas === nombresEstrenos.length) {
            return listaDePeliculas; // Debería imprimir el catálogo actualizado
        } else {
            return ("No se encontró alguna de esas peliculas en nuestro catalogo");
        }
    }
   
}



const listaDePeliculas = [
    { nombre: "Pelicula 1", añoDeEstreno: "1989", genero: "comedia", estreno: false },
    { nombre: "Pelicula 2", añoDeEstreno: "1999", genero: "drama", estreno: false },
    { nombre: "Pelicula 3", añoDeEstreno: "1999", genero: "drama", estreno: false }
]









// ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//  🟢 Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
// 
// Tip: Podés usar el operador delete para los objetos.

function atenderClientes(clientes) {
  // Tu código aquí:
  
  for (const key in clientes) {
      delete clientes[key];
  }
  return clientes; 



}
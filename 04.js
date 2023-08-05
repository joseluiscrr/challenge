/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function doble(array) {
  // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
  // ej:
  //doble([1, 2, 3]) devuelve [2, 4, 6]
  // Tu código aca:

  // function doble(entrada) {
    // var respuesta = []

    // entrada.forEach(x => respuesta.push(x * 2))

    // return respuesta

    return array.map(r => r * 2)
  // }
//   console.log(sumaDoble(array));
}

// No modifiques nada debajo de esta linea //

module.exports = doble
function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    let arrayCompleto = array1.concat(array2)
;
    arrayCompleto = arrayCompleto.sort();
     let arrayInterseccion = [];
     for (let i = 0; i < arrayCompleto.length; i++) {
         if (arrayCompleto[i] === arrayCompleto[i+1]) {
            arrayInterseccion.push(arrayCompleto[i]);
         }
     }
     arrayInterseccion = arrayInterseccion.map((num) => {
return parseInt(num, 10);
     })
     return arrayInterseccion;
  }

  console.log(buscoInterseccion([7, 23, 4], [23, 70]));
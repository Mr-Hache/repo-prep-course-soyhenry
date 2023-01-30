/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let result = [];
  let llaves = Object.keys(objeto);
  let valores = Object.values(objeto);

  for (let i = 0; i < llaves.length; i++) {
    result.push([llaves[i], valores[i]]);
  }

  return result;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let stringArray = string.split("");
  let stringOrdenado = stringArray.sort(); // ordenamiento del string alfabeticamente
  // dejamos valores unicos
  let valoresUnicos = stringOrdenado.filter((item, index) => {
    return stringOrdenado.indexOf(item) === index;
  });
  // objeto donde se guarda
  let result = {};

  //recorremos los valores unicos
  valoresUnicos.forEach((data) => {
    let contador = 0;
    // verificamos cuantas veces está cada valor en el array ordenado
    for (let i = 0; i < stringOrdenado.length; i++) {
      if (data === stringOrdenado[i]) {
        contador++;
      } else if (contador > 0 && stringOrdenado[i] !== data) {
        continue;
      }
    }
    // guardamos el valor unico como llave y el contador del dato como valor
    result[data] = contador;
  });
  return result;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringSeparado = string.split("");
  let mayusculas = [];
  let minusculas = [];
  stringSeparado.forEach((char) => {
    if (char === char.toUpperCase()) {
      mayusculas.push(char);
    } else {
      minusculas.push(char);
    }
  });
  return mayusculas.join("") + minusculas.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let fraseInversa = [];
  let fraseSeparada = frase.split(" ");
  for (let i = 0; i < fraseSeparada.length; i++) {
    let palabraInvertida = "";
    for (let j = 0; j < fraseSeparada[i].length; j++) {
      palabraInvertida = fraseSeparada[i][j] + palabraInvertida;
    }
    fraseInversa.push(palabraInvertida);
  }
  fraseInversa = fraseInversa.join(" ");
  return fraseInversa;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroString = numero.toString();
  let numeroStringReverse = numeroString.split("");
  numeroStringReverse = numeroStringReverse.reverse();
  numeroStringReverse = numeroStringReverse.join("");
  if (numeroString === numeroStringReverse) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let stringSeparado = string.split("");
  result = [];
  stringSeparado.forEach((char) => {
    if (char !== "a" && char !== "b" && char !== "c") {
      result.push(char);
    }
  });
  return result.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  //creo un array para guardar cada string con su respectiva longitud
  let arrayStringLong = [];

  // recorrod todo el array de strings
  for (let i = 0; i < arrayOfStrings.length; i++) {
    // guardo en cada posición del array un array con la longitud del string, su posición y el string,la posicion se la guarda para para ordenarlos en caso de que tengan la misma longitud
    arrayStringLong[i] = [];
    arrayStringLong[i].push(arrayOfStrings[i].length);
    arrayStringLong[i].push(i);
    arrayStringLong[i].push(arrayOfStrings[i]);
  }
  // ordeno el array segun el primer y segundo numero que son las longitudes y la poscion inicial respectivamente
  arrayStringLong = arrayStringLong.sort();

  // en este punto las palabras ya están ordenadas por longitud, ahora solo queda extraerlas con un .map
  let result = arrayStringLong.map((data) => {
    return data[data.length - 1];
  });
  return result;
}
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrayCompleto = array1.concat(array2);
 
  arrayCompleto = arrayCompleto.sort();
  let arrayInterseccion = [];
  for (let i = 0; i < arrayCompleto.length; i++) {
    if (arrayCompleto[i] === arrayCompleto[i + 1]) {
      arrayInterseccion.push(arrayCompleto[i]);
    }
  }
  arrayInterseccion = arrayInterseccion.map((num) => {
    return parseInt(num, 10);
  });
  return arrayInterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

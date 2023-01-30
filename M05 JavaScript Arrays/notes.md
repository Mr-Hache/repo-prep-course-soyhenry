métodos para array o arreglos:

```javascript:


```

array.lenght(): me devuelve la longitud del array

```javascript:
let array = [1,12, 23, 34, 45];
let longitud = array.length;
console.log(longitud); //5


```

string.split(): me devuelve uno o varios arrays con el string separado,existen varias maneras de separar el string.

```javascript:
let string = "abecedario";
let palabraSeparada1 = string.split(""); // muestra la separacion de cada uno de los caracteres
console.log(palabraSeparada1); // [
//   'a', 'b', 'e', 'c',
//   'e', 'd', 'a', 'r',
//   'i', 'o'
// ]

let palabraSeparada2 = string.split("e"); // muestra la separacion de los caracteres cada que encuentra la "e"
console.log(palabraSeparada2); // [ 'ab', 'c', 'dario' ]

let stringDoble = "abece vocal dario" // muestra los dos primeros caracteres separados por " "
let palabraSeparada3 = stringDoble.split(" ", 2);
//console.log(palabraSeparada3); //[ 'abece', 'vocal' ]

let palabraSeparada4 = stringDoble.split(/(e)/);
console.log(palabraSeparada4) // [ 'ab', 'e', 'c', 'e', ' vocal dario' ]
```

Arrray.push('y'): añade a la ultima posicion el dato especificado

```javascript:
let Array = [0, 1, 2];

Array.push(11);

console.log(Array); // [ 0, 1, 2, 11 ]
```

array.pop(): borra el ultimo dato del array

```javascript:
let Array = [0, 1, 2, 5 ,9, 7];

Array.pop();

console.log(Array); // [ 0, 1, 2, 5, 9 ]

```

array.join(''): concatena todos los datos de un array

```javascript:
let array = [0, 1, 2, 5, 9, 7];

let concatenacion = array.join("");

console.log(concatenacion); // '012597'

```

Métodos para recorrer arreglos.

for each: sirve para recorrer un arreglo entero

```javascript:
let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach((num) => console.log(num)); // se puede utilizar con funciones flecha
// 1
// 2
// 3
// 4
// 5
// 6

let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach(function imprimirNumeroSumado(num) // funciona con funciones declaradas
{let a = num + 1;
    console.log(a)} );

// 2
// 3
// 4
// 5
// 6
// 7
```

array.map: me transforma cada dato del array y me devuelve un nuevo array con los resultados de las transacciones

```javascript:
let numeros = [1, 2, 3, 4, 5, 6];

let numerosIncrementados = numeros.map(function (numero) {
  return (numero = numero + 1);
});

console.log(numerosIncrementados); //[ 2, 3, 4, 5, 6, 7 ]

```

Métodos de inserción

El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

El método shift() elimina y devuelve el primer elemento de un arreglo.

Métodos varios

El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

---

BUCLES PARA RECORRER ARRAYS

BUCLE for

```javascript:
let Array = [1, 3, 4, 5, 6];
for(let i = 0; i < Array.length; i++){
  console.log(Array[i]);
}
// 1
// 3
// 4
// 5
// 6
```

BUCLE while

```javascript:
let Array = [1, 3, 4, 5, 6];
let i = 0;
while(i < Array.length){
  console.log(Array[i]);
  i++;
}

// 1
// 3
// 4
// 5
// 6

```

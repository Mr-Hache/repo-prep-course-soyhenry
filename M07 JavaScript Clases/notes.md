```javascript:


```

Clases en JS

Las clases en javascript se las puede referenciar como un prototipo para realizar objetos con ciertas similitudes.

hay dos formas de declarar clases, con una funcion constructora o con una expresión de clase.

FUNCIÓN CONSTRUCTORA:

```javascript:
// EJEMPLO FUNCION CONSTRUCTORA

function Animal(tipo, nombre, baseAlimenticia, movilidad, sonido){
    this.tipo = tipo;
    this.nombre = nombre;
    this.baseAlimenticia = baseAlimenticia;
    this.movilidad = movilidad;
    this.sonido = sonido;

// forma 1 de añadir métodos a la funcion constructora
// aquí no se puede usar funciones flecha

    this.informacion = function(){
        console.log(" este animal es un: " + this.nombre)
    }
}

// ejemplo para crear un nuevo objeto tipo Animal
let perro  = new Animal("mamífero", "Perro", "carnívoro", "terrestre", 'GUAU')


//forma 2 de agregar métodos a una funcion constructora
// no se puede utilizar funciones flecha
 Animal.prototype.comoHace = function(){
    console.log('el ' + this.nombre + ' hace ' + this.sonido + '!')
 }

 perro.informacion() // este animal es un perro
 perro.comoHace() // el perro hace GUAU!
```

EXPRESIÓN CONSTRUCTORA:

```javascript:
class Animal{
    // con el constructor recibimos propiedades
    constructor(tipo, nombre, baseAlimenticia, movilidad, sonido){
            this.tipo = tipo;
    this.nombre = nombre;
    this.baseAlimenticia = baseAlimenticia;
    this.movilidad = movilidad;
    this.sonido = sonido;
    }
    // métodos se declaran fuera del constructor
informacion = function(){
        console.log(" este animal es un: " + this.nombre)
    }
comoHace = function(){
    console.log('el ' + this.nombre + ' hace ' + this.sonido + '!')
 }

gato.informacion()
gato.comoHace()

}
```
PROTOTYE: recordar que los prototipos es un mecanismo por el cual todos los objetos o elementos de javascrpit pueden extender sus propiedades y métodos 

```javascript:
// con el prototype podemos crear metodos para las funciones constructoras, clases o incluso para las clases predefinidas en JS, como Array o Object, a continuación se hace el ejemplo añadiendo un método a la clase Array....

Array.prototype.mayorQueTres = function () {
   var arregloModificado = [];
   for (var i = 0; i < this.length; i++) {
      	if (this[ i ] > 3) {
         		arregloModificado.push(false);
     	 } else {
        		 arregloModificado.push(this[ i ]);
     	 }
   }
   return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo); // [ 1, 2, 3, false, false ]
```


EXTENSIÓN DE UNA CLASE: por medio de una clase se puede contruir otras clases con algunas caracteristicas similares....

```javascript:
class Persona{
    constructor(nombre, edad){
this.nombre = nombre;
this.edad = edad;
    }

    saludar(){
        console.log("HOLA, MI NOMBRE ES " + this.nombre + " y tengo " + this.edad + " años" )
    }
}

let persona1 = new Persona("Carlos", 23)

persona1.saludar() // HOLA, MI NOMBRE ES Carlos y tengo 23 años

// creamos una clase programador que extiende de persona

class Programador extends Persona{
    constructor(nombre, edad, añosExperiencia){
        super(nombre, edad)
        this.añosExperiencia = añosExperiencia
    }
    haceCuanto(){
        console.log("HOLA!, mi nombre es " + this.nombre + " y codeo hace " + this.añosExperiencia + " años") 
    }
}

let programador1 = new Programador("Juan", 23, 5)

programador1.haceCuanto()// HOLA!, mi nombre es Juan y codeo hace 5 años
programador1.saludar() //HOLA, MI NOMBRE ES Juan y tengo 23 años

// programador1 puede acceder a los metodos de persona, pero persona1 no puede acceder a los metodos de programador

```

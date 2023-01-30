```javascript:


```

Objetos, métodos para objetos

obecjt example

```javascript:
// Objects example, los objetos pueden tener diferentes propiedades, cada propiedad tiene una clave y un valor
let deportes = {
conBalon: ['Football', 'Basketball', 'Rugby'],
sinBalon: ['Boxeo', 'Natación', 'Surf'],
}

// un objeto puede anidar otro objeto
let persona = {nombre: 'Alex', edad: 23, profesion: {esProgramador: true},}

```

Dot-Notation y Bracket-Notation

```javascript:
let persona = {nombre: 'Alex', edad: 23, profesion: {esProgramador: true},}
// Dot-Notation
console.log(persona.profesion.esProgramador)

//Bracket-Notation
// Bracket-Notation permite buscar variables dentro del objeto, DOT-NOTATION, NO!, la propiedad debe ser literalmente la mima.
let ref = "profesion";

persona["edad"] = 22;
console.log(persona["edad"])

console.log(persona[ref]);

// añadiendo una nueva propiedad con su clave valor
persona.sexo = 'masculino' 
persona['peso'] = '85Kg';

// para borrar
delete persona.edad;

// se pueden guardar funciones en un objeto
let misFunciones = {saludar: function(persona) {
    console.log('Hola '+ persona.nombre+'!')
}}

```

Manejo de Objetos de con métodos

```javascript:
let persona = {nombre: 'Alex', edad: 23, profesion: {esProgramador: true},}

// hasOwnProperty
let tieneProfesion = persona.hasOwnProperty('profesion') // hasOwnProperty permite identificar si existe una propiedad especifica en el objeto

console.log(tieneProfesion) // true

// keys
let todasLasPropiedades = Object.keys(persona); // devuelve todas las llaves que tenga el objeto en un array
console.log(todasLasPropiedades) // [ 'nombre', 'edad', 'profesion' ]

// bucle FOR IN
let mundo = {continentes: 7, paises: 196, oceanos: 5}
for(let prop in mundo){
    console.log("propiedad: " + prop + ' y este es el valor: ' + mundo[prop])
}
// propiedad: continentes y este es el valor: 7
// propiedad: paises y este es el valor: 196
// propiedad: oceanos y este es el valor: 5


```

THIS en un objeto de javascript:
this se ejecuta en el contexto donde se encuentre

```javascript:
let mascota: {
    animal: 'perro',
    nombre: 'Coco',
    amistoso: true,
    dueño:'Alex',
    infoMalDada: function() {
        console.log('mi perro se llama '+ nombre)

    },
    infoBienDada: function() {
         console.log('mi perro se llama '+ this.nombre)
    }
}

// mascota.infoMalDada(); // esta línea de código daría error, yay que al ejecutarse la función está en el contexto global y en este contexto nombre no está definido

mascota.infoBienDada(); // mi perro se llama Coco

```
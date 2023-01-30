```javascript:


```

CALLBACKS:
Son funciones que se pasan por parametro a otras funciones, sirven generalmente para ejecutar una funcion cuando una tarea se haya completado.

por ejemplo:

```javascript:
¡let devuelvoUsuario = function () {
  return "Alex";
};
let devuelvoSaludo = function () {
  return "Hola!";
};

let saludar = (cb1, cb2) => {
  return console.log(cb2() + " " + cb1());
};

saludar(devuelvoUsuario, devuelvoSaludo); //Hola! Alex

//******************************************************* *7/

let devuelvoFrase = (comida) => {
  return "Hoy quiero comer " + comida;
};

let hablar = (comida, cb) => {
  console.log(cb(comida));
};

hablar("Pizza", devuelvoFrase); // Hoy quiero comer Pizza

```
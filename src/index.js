//En es6 se introdujeron las variables let y const

//diferencia entre let y var
//var puede ser accedida en la funcion que fue definida y let solo puede ser accedida en el bloque de codigo que se utiliza
//por ejemplo aqui ley solo esta definida dentro del for y no puede ser accedida en ningun otro lugar de la funcion
//por lo tanto siempre deberiamos de preferir let en vez de var

//luego esta const que es utilizado para definir constantes, al igual que let solo pueden ser accedida dentro de su respectivo
//bloque de codigo en el que fueron definidas, si es constante a esta variable no se le puede cambiar el valor
//Es preferible utilizar const en vez de let, utilizaremos let solo si tenemos que reasignar una variable

const x = 1;

console.log("const value:", x);

function sayHello() {
    for (let i=0; i<5; i++){
        console.log(i);
    }
}

sayHello();

//ejemplo de un objeto con dos metodos walk en talk
const person = {
    name: "mosh",
    walk() {},
    talk(){},
}

//de esta for accedemos a los metodos de este objeto
person.talk();

//asi accedemos a las propiedades hay 2 formas la primera es para cuando sabemos que propieda deseamos acceder
//y la segunda para cuando no se asi
person.name = "lo";

const targetMember = "name";
person[targetMember] = "john";


// El proposito de this en es6
const personThis = {
    name: "mosh",
    walk() {

        //El this siempre retorna una referencia del objeto actual, osea nos da todos los datos contenido en el objeto
        //Esto pasara siempre y cuando esta funcion sea llamada como un metodo de esta clase
        console.log(this);
    }
}

personThis.walk();

//binding this aqui veremos como asociar una funcion a un objeto y evitar fallos a la hora de utilizar this
//aqui asocie la funcion con la clase y por lo tanto no me da undefined a la hora de utilizar el metodo walk
//nota las funciones en javascript son objetos por lo tanto podemos asociar estos "objetos" con otros objetos
const walk = personThis.walk.bind(personThis);
walk();


//arrow functions esto son basicamente formas mas cortas para escribir funciones y hace que el codigo sea mas corto
// y mas facil de leer en muchos casos

//old javaScript functions
const squareOld = function (number) {
    return number*number;
}

//aqui hay solo un parametro, pero si hubiera 2 habria que agregar parentesis y comas
const squareNew = number => number*number;
const sum = (number, number2) => number+number2;

console.log(squareOld(6));
console.log(squareNew(6));

console.log(sum(4,5));


//arrow functions and this

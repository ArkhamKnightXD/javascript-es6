
//import con export default y si queremos agregar otras cosas seria abriendo parentesis
//teacher es el default export y promoted es el named export
import Teacher, { promoted } from "./teacher";

//import sin export default a cuando se utiliza parentesis se le llama named imports
//import {Teacher} from "./teacher";
import {Person} from "./person";

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
// y mas facil de leer en muchos casos asi que debemos priorizar utilizar arrow functions

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


//arrow functions and this este punto nos quiere reafirmar que utilicemos arrow functions

//con arrofunctions podremos mostrar la referencia al objeto de forma correcta
//aunque tengamos una de setTimeout que en el caso de funcion vieja no se puede
const person3 = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

person3.talk();


//Array.map Este es el metodo utilizado muy seguido en react para recorrer listas y arreglos
const colors = ["red", "green", "blue"]

//sintaxis este requiere una funcion dentro y de forma simplificada mediante arrow functions queda asi
const items = colors.map((color) =>
    //Esta es la forma correcta para agregar texto y variables
     `<li>${color}<li>`);

console.log(items);


//object destructuring

const address = {
    street: 'test',
    city: 'test1',
    country: 'test2',
}

//Ejemplo imaginemos que deseamos guardar los valores de este objeto en variables separadas

//forma sin destructuring, el problema de este codigo es la repeticion que hay de address
// const street = address.street;
// const city = address.city;
// const country = address.country;

//forma con destructuring
//las variables recibira el valor que matchee con sus nombres asi que si deben llamarse iguales o
//debemos utilizar un alias
const {street, city, country} = address

console.log(street, city, country);

//podemos tambien utilizar solo un valor y darle un alias, st recibira el valor de st
const {street: st} = address;

console.log(st);

//Spread Operator (...) este tambien es muy utilizado en react

//Digamos que queremos combinar 2 arreglos

const first = [1,2,3];
const second = [4,5,6];

//forma vieja
//const combined = first.concat(second);

//forma nueva si utilizamos el spread ... ante de arreglos esto quiere decir que obtendremos todos los items
//de cada arreglo que le pongamos antes el spread operator ...

const newCombined = [...first, 'a', ...second, 'b'];

console.log(newCombined);

//tambien podemos clonar arreglos, variables, objetos

const first1 = {name: "mosh"};
const second1 = {job: "instructor"};

const combinedObjects = {...first1, ...second1, location: "australia"};

console.log(combinedObjects);

//clonar objeto

const clone = {...first1};

console.log("clone", clone);

//classes

//creacion de clase
class Person1 {

    //constructor
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

//instanciando una clase
const personObject = new Person1("mosh");

console.log(personObject.name);

// a las clases tambien se le implementan herencias, yo omitire esto, pues solo son conceptos que ya se
//y no lo estare utilizando en react

//ejemplo simple  ya con aplicar extends ya utilizo herencia
class Teacher1 extends Person1{

    //constructor con herencia
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}


const teacher1 = new Teacher1("Mosh", "msc");

//modules vamos a llevar las distintas clases a distintos archivos

//ejemplo utilizando las clases creadas en otros archivos

const teacher = new Teacher("Mosh", "msc");

teacher.teach();


//named and default exports

const a = (test, test2) => test*test2;


console.log(a(4,5));
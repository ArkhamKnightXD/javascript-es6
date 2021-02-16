//de esta forma importamos la clase person, obviamente esta clase debe ser publica con export
import { Person } from "./person";

export function promoted() {
    
}


// en javascript las clases son tecnicamente objetos y tambien las funciones
// podemos agregar default a export para que esta clase sea lo que se importe por defecto osea lo principal
//entonces a la hora de importar no habria que utilizar parentesis y solo poner el nombre
export default class Teacher extends Person{

    //constructor con herencia
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}
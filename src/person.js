//los objetos definidos en un archivo son por defecto privdo
//para hacer esta clase publica simplemente utilizamos export y luego la importamos donde deseemos utilizarla
export class Person {

    //constructor
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}
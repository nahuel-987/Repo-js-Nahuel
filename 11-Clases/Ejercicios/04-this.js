class jugador{
    constructor(nombre, numero, posicion){
        this.nombre = nombre;
        this.numero = numero;
        this.posicion = posicion;

    }
}

let jugador1 = new jugador("Messi", 10,"Delantero");

console.log("Nombre:",jugador1.nombre);
console.log("Numero:",jugador1.numero);
console.log("posicion:",jugador1.posicion);
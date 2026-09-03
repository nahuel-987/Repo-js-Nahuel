class jugador{
    constructor(nombre, numero){
        this.nombre = nombre;
        this.numero = numero;

    }

    presentarse(){
        console.log("soy " + this.nombre + "y uso la camiseta " + this.numero);
        
    }
}

let jugador1 = new jugador("Messi", 10);
let jugador2 = new jugador("De Paul", 7);

jugador1.presentarse();
jugador2.presentarse();
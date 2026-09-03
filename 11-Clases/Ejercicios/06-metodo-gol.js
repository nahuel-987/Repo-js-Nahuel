class jugador{
    constructor(nombre, numero){
        this.nombre = nombre;
        this.numero = numero;
        this.gol = 0;

    }

    hacerGol(){
        this.goles++;
        console.log(this.nombre + " hizo un gol");
    }

    mostrarGol(){
        console.log(this.nombre + " tiene " + this.goles + "goles");
    }
}

let jugador1 = new jugador("Messi", 10);

jugador1.hacerGol();
jugador1.hacerGol();
jugador1.hacerGol();

jugador1.mostrarGol();
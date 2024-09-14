import { Figuras } from "./09-Areas";

class Volumen extends Figuras {
    private volumen: number;

    constructor(base: number, altura: number) {
        super(base, altura);
        this.volumen = 0;
    }

    //  el área calculada del rectángulo para calcular el volumen del prisma
    calcularVolumenPrismaRectangular(alturaprisma: number): void {
        
        this.volumen = this.area * alturaprisma; // Reutilizamos el area del rectángulo
    }

    //  el area del círculo (esfera) para calcular el volumen de la esfera
    calcularVolumenEsfera(alturacilindro:number): void {
        
        this.volumen = this.area*alturacilindro; // Reutilizamos el area del circulo
    }

    //  el area del cuadrado (cubo) para calcular el volumen de cubo
    calcularVolumenCuadrado(lado:number): void {
        this.volumen = this.area*lado; // Reutilizamos el área del cuadrado
       
    }

    imprimirVolumen(): void {
        console.log(`El volumen es igual a ${this.volumen}`);
    }
}

console.log('RECTAGULO------------')
const prismaRectangular = new Volumen(10, 20);
prismaRectangular.rectangulo(); // Calculo el area del rectángulo primero
prismaRectangular.imprimirArea();
prismaRectangular.calcularVolumenPrismaRectangular(30); 
prismaRectangular.imprimirVolumen();//Calculo volumen

console.log('CIRCULO------------')
const esfera = new Volumen(10, 0); // Radio 
esfera.circulo(); // Calculo el area del círculo primero
esfera.imprimirArea();
esfera.calcularVolumenEsfera(15);
esfera.imprimirVolumen(); //Calculo volumen

console.log('CUADRADO------------')

const cuadrado = new Volumen(15,15 ); 
cuadrado.cuadrado(); // Calculo el rea del cuadrado primero
cuadrado.imprimirArea();
cuadrado.calcularVolumenCuadrado(15);
cuadrado.imprimirVolumen(); // Calculo volumen 

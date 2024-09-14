export class Figuras {
    protected base: number;
    protected altura: number;
    protected area: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
        this.area = 0;
    }

    imprimirArea(): void {
        console.log("El área es igual a: " + this.area);
    }

    // Cálculo del área de un rectángulo
    rectangulo(): void {
        this.area = this.base * this.altura;
    }

    // Cálculo del área de un cuadrado
    cuadrado(): void {
        this.area = this.base * this.base;
    }

    // Cálculo del área de un círculo (usando base como radio)
    circulo(): void {
        this.area = Math.PI * Math.pow(this.base, 2); // base es el radio
    }
}

export class Figuras {
    protected base: number;
    protected altura: number;
    protected area:number;
    
    constructor(base:number, altura:number, area:number){
        this.base=base;
        this.altura=altura; 
        this.area=area;
    }

    imprimirArea(){
        console.log("El área es igual a: "+this.area)

        
    }
    rectangulo(){
       this.area= this.base*this.altura;
        
    }
    cuadrado(){
        this.area=  this.base*this.altura;

    }
    circulo(){
        this.area= 3.1416*(this.base^2);

    }

}
const cuadrado=new Figuras(80, 44,0);
cuadrado.cuadrado();
cuadrado.imprimirArea();

const rectangulo=new Figuras(20, 44,0);
rectangulo.rectangulo();
rectangulo.imprimirArea();

const circulo=new Figuras(10, 0,0);
circulo.circulo();
circulo.imprimirArea();

/*Hereda de Persona3
class Volumen extends Figuras{
    private calvolumen:number;
    constructor(base:number,altura:number){
            //Super se va a la clase padre para iniciar la funcionalidad 
            super(base,altura);
            this.calvolumen=base*altura;
        }
        imprimirVolumen(): void{
            console.log(`El volumen es igual a ${this.calvolumen}`);

        }
        
    }
    const figuras1=new Figuras(80, 44);
    figuras1.imprimirArea();

    const prismaRectangular=new Volumen(22,7000);
    prismaRectangular.imprimirVolumen();
    */
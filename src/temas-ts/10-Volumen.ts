import { Figuras } from "./09-Areas";





class Volumen extends Figuras{
    private calvolumen:number;
    constructor(base:number,altura:number, area:number){
            //Super se va a la clase padre para iniciar la funcionalidad 
            super(base,altura,area);
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
    
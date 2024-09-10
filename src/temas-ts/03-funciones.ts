function suma(){
    let x=2;
    let y=4;
    let d=x+y;
    console.log(d)
}

function resta (a:number, b:number):number{

    return a-b; 

}

//Pasar datos primitivos a una funcion----------------------------------
const res:number=resta(10,3)
console.log(`La resta es ${res}`)

//Pasar objetos a una funcion-----------------------------------------
interface Mascotas{
    name:string;
    edad:number;
    raza:string;
    //Se genera la funcion pero no se genera el cuerpo, Void no recibe ni regresa nada
    mostrar:()=>void;

}

function calcular(mascota:Mascotas, x:number):void {
    mascota.edad += x;
    console.log(mascota);

    
}

//Creando el obejto se crea el Cuerpo de la funcion
const nuevaMascota:Mascotas={
    name:"Fido",
    edad:3,
    raza:"Golde",
    mostrar:()=> {
     console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} años`)   
    }
}
calcular(nuevaMascota,4);

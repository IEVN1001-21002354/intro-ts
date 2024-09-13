
//NO DESESTRUCTURADO---------------------------------------------------------------------------
//Interfaz principal
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    //Es de otra interfaz
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;


}

//Dentro de la interfaz con una propiedad hace otra interfaz
const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"La vida es un sueño",
    detalles:{
        autor:"Fernando de Rojas",
        year:1500
    }


}


/*
console.log(`El volumen actual es: ${reproductor.volumen}`)
console.log(`Los segundo son: ${reproductor.segundo}`)
console.log(`El cantante es: ${reproductor.detalles.autor}`)
console.log(`El año es: ${reproductor.detalles.year}`)
*/

//Destructuracion, para evitar el .. de los saltos para llegar  a las propiedades---------------------------------------------------------------------------

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volumen}`)
console.log(`Los segundo son: ${segundo}`)
console.log(`El cantante es: ${autor}`)
console.log(`El año es: ${year}`)

const dbz:string[]=["Goku", "Majinbu", "Babidy","Freezer"]
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 4: ${dbz[2]}`)
console.log(`Personaje 4: ${dbz[3]}`)

//Comillas dobles porque es el campo que hay pero no se pone
const[a,,b,c]=dbz;
console.log(`Personaje 1: ${a}`)
console.log(`Personaje 2: ${b}`)
console.log(`Personaje 3: ${c}`)





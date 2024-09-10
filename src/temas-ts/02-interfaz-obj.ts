
//Interfaz una clase con caracteristicas resusidas par instanciar objetos
//CONSTRUCTOR

interface Alumno{
    nombre: string;
    edad: number;
    apellido: string;
    genero: string;
    calificacion?: number;

}

//PARA INSTANCIAR SE TIENE QUE PONER TODAS LAS PROPIEDADES
const alumno:Alumno ={
    nombre:"mario",
    apellido:"mario",
    edad:19,
    genero:"M",


}

console.table(alumno)

let mascotas = ['perico','perro','perro','gato'];
console.log (mascotas[1]);
mascotas[1]='nuevo perro';
console.log(mascotas[1]);
mascotas.push('Hamster');
console.log(mascotas);


//ARREGLOS VACIOS
let tem:(string|number)[]=[];
tem.push('Mario')

console.log(tem)


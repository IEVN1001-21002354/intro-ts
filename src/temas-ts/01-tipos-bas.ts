//console.log("Hola mundo")

//TypeScript nace de la necesidad que ha lo largo de un proyecto no sea dificil de mantener

var nombre ='Juan'
let apellido = 'Perez'
const edad = 30

let num1 =2
let num2= 'hola'
let num3= 3

let suma = num1+ num2 + num3
console.log(suma)

let correo:string; 'correo'
let edad2:number; 
let active:boolean;

correo = 'axel@gmaio.com'
edad2 = 12
active=true

//ESTO ES PARA QUE TYP SCRIPT SEPA QUE ESA VARIABLE PUEDE SER DE UN TIPO COMO OTRO
let matricula:number|String;

matricula= 12345
matricula='23ABC'
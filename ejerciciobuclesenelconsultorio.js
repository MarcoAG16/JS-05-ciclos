console.log("Bucles consultorio")

let claveGuardada ="ataqueartesano";
let usuarioGuardado="markeras56";



function logIn(){

let intentos=1;
let accessIn=true;

while (accessIn && intentos<4){
    usuario=prompt("Ingrese su usuario")

    clave = prompt("ingrese su clave, debe contener \n -almenos 8 caracteres \n")

    if(usuario===usuarioGuardado && clave=== claveGuardada){
    console.log("Acceso permitido");
    accessIn=false;
    }
    console.log(intentos)
    intentos++;


}

if(intentos===4){
    console.log("Excediste el numero de intentos permitidos");


}

}

logIn();

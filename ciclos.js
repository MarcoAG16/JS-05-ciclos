/*

Condiciones: alterar el orden natural del codigo estructura de control: controlar l ejecucion del codigo



Ciclos o bucles (loops)

Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

es importante usar ciclos para tareas repetitivas

En JS existen los siguientes ciclos:

    -While
    -do while
    -for


Iterar: Proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles.

*/

/* while: Ejecuta un bloque de codigo mientras se cumplaunacndicion especifica. Este ciclo se repite mientras la condicion sea verdadera y el bloque de codigo se ejcuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion

while (condicion){
    //codigo que se ejecuta
}

*/
//Siempre habra dos opciones:true o false

/*NOTA esto significa peligro. Esto es un ciclo sin fin (infinito), porque la condicion que se evalue siempre es true, significa que no hay nada que nos diga que se va a detener.

while(true){

}

Analogia: Seguir una receta para preparar sopa

Lista de ingredientes:
    -zanahoria
    -papa
    -calabacita
    -chayote
    -agua

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

paramos cuando ya no tengamos ingredientes.





*/

//Ejemplo de consultorio dental
/*
let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

//Mientras 15 sea menor que 50...
while (pacientesEnConsultorio<capacidadPacientes);{
    //seguire dando servicio
    console.log("Aun hay espacio, adelante")
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}
*/
//Mientras sea verdadero, se ejecuta la instruccion (pedir permiso para ir a la fiesta)


/*Do while (hacer mientras)

//se ejecuta la instruccion, mientras sea verdadero(pedir perdon por ir a la fiesta)

El bule do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

do {
    //codigo a ejecutar
}while (condicion);

Analogia: Cundo preparamos un pastel 

*/

//Ejemplo de un consultorio dental 

/*
var contadorPacientes = 0;

do {
    var nombre = prompt("ingresa el nombre del paciente");
    if(nombre) {
        contadorPacientes++;
    }
}
while (contadorPacientes < 5); 
console.log("Numero total de pacientes: ", contadorPacientes)
*/

/*

For (para)
Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
Consiste de 3 partes fundamentales:
    -inicializacion: se ejcuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    -condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no(siempre y cuando sea verdadera)
    -expresion de iteracion (contador): tiene la finalidad de odificar la variable de inicio y poder tener un punto de cierre.

    for (inicializacion; condicion ; expresion de iteracion){
        //bloque de codigo a ejecutar
    }


*/

//Crea un codigo que imprima los numero del 0 al 4

for (var valorInicial = 0; valorInicial<5; valorInicial++){
    console.log(valorInicial);

}

//version nmas "comercial"
for(var i =0; i<100; i+=5){
    console.log(i);
}


//consultorio dental regitro de citas con un for



let cantidadDeCitasDiarias = 5;

for ( let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("Ingrese el nombre del paciente" + i)

    console.log("paciente con cita "+i + " "+nombre);




}
console.log("se acabaron las citas")

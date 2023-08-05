/* Se simula un calculadora de prestamos.
Se pide el ingreso del monto y de las cantidad
de cuotas en las cuales el cliente desea saldar la deuda.
Si la cantidad de cuotas es menor/igual a 6 se aplica un interes
mensual del 5%. 
Si las cuotas son mayores a 6 y menores/iguales a 12 el interes
es del 8% mensual. 
Para cuotas mayores a 12 y menores a 18 se aplica un 15% de
interese mensual
Se consulta al usuario si quiere seguir realizando consultas, en caso negativo
se agradece el uso del programa.
*/

/*
Funciones 
*/

// funcion para definir el interes según la cantidad de cuotas elegidas por el cliente
function definirInteres(numeroCuotas){
    let interes = 0;
    if(numeroCuotas > 12){
        interes = 0.15;
    }else if(numeroCuotas > 6){
        interes = 0.08;
    }else{
        interes = 0.05;
    }
    return interes;
}

// funcion que calcula el monto de cada cuota
function calcularMontoCuota(numeroCuotas, monto){
    if(numeroCuotas > 0 && numeroCuotas <= 18){
        let interes = definirInteres(numeroCuotas,monto)
        let montoCuota = (monto/numeroCuotas)*(1+interes);
        alert(`El monto solicitado es de $${monto} y se pagará en ${numeroCuotas} cuotas.\nEl monto de cada cuota de $${montoCuota}`);
    }else{
        alert("Número de cuotas inválido");
        numeroCuotas = parseInt(prompt("Ingrese cantidad de cuotas entre 1 y 18"));
        calcularMontoCuota(numeroCuotas, monto);
    }
}

// funcion para validar que el monto este entre mil y un millon de pesos
function validarMonto(monto){
    if( monto>= 1000 && monto <= 1000000){
        let numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas. Cuotas máximas: 18"))
        calcularMontoCuota(numeroCuotas, monto);
    }else{
        alert("El monto tiene que estar entre $1.000 y $1.000.000");
        let monto = prompt('Ingrese el monto que desea solicitar.\nMonto mínimo: $1000. Monto máximo: 1.000.000');
        validarMonto(monto);
    }
}


/*
Programa que realiza el llamado a las funciones definidas previamente
 */

// evaluo si el cliente quiere seguir consultando 
while(true){
    let montoPrestamo = prompt('Ingrese el monto que desea solicitar.\nMonto mínimo: $1000. Monto máximo: 1.000.000');
    validarMonto(montoPrestamo); // valido que el monto solicitado este entre mil y un millon de pesos
    let respuesta = prompt("¿Desea realizar otra consulta?\n Ingrese \"si\" o \"no\" "); 
    if(respuesta.toLowerCase() === "no"){
        alert("Gracias por usar el sistema");
        break;
    }
}



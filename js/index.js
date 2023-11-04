/*const edad = prompt ("Ingresa la opción correspondiente a tu edad")
console.log(edad)*/

function analizarPerfil(perfil){
    if (perfil <=6){
        alert ("Su perfil de inversión es averso al riesgo le aconsejamos llevarse los dólares al colchón")
    }
    else if (perfil <= 12){
        alert ("Su perfil es conservador le aconsejamos bonos investment grade y fondos de money market")
    }
    else if (perfil <= 18){
        alert ("Su perfil es de riesgo medio, le aconsejamos una cartera de acciones del S&P500")
    }
    else if (perfil <= 24){
        alert ("Su perfil de riesgo es agresivo le aconsejamos invertir en fondos de capital de riesgo")
    }
    else{
        alert ("los datos ingresados no son válidos")
    }
 }
function calcularPerfil(){
    let comenzarTest = true

    while (comenzarTest){
    let edad = parseInt(prompt ("Ingresa la opción correspondiente a tu edad"))
    let conocimiento = parseInt(prompt("Ingresa la opción correspondiente a tu conocimiento del mercado"))
    let ahorro = parseInt(prompt("Ingresa la opción correspondiente al % de tus ingresos ahorrado mensualmente"))
    let destino = parseInt(prompt("Ingresa la opción correspondiente al % de tus ahorros que podrías invertir"))
    let tiempo = parseInt(prompt("Ingresa la opción correspondiente al tiempo que mantendrías tu inversión"))
    let objetivo = parseInt(prompt("Ingresa la opción correspondiente al tu objetivo de inversión"))

    let resultado = edad + conocimiento + ahorro + destino + tiempo + objetivo

    if (resultado !== '' && resultado !== null){
        analizarPerfil(resultado)
    }else{
        console.warn("los datos no son válidos")
    }

    comenzarTest = confirm ("Desea modificar su elección?")
    console.log(resultado)
    }
    
}
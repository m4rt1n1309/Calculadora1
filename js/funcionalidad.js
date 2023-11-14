let operandoa;
let operandob;
let operacion;

function cero() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "0";    
}

function uno() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "1";    
}

function dos() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "2";    
}

function tres() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "3";    
}

function cuatro() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "4";    
}

function cinco() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "5";    
}

function seis() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "6";    
}

function siete() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "7";    
}

function ocho() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "8";    
}

function nueve() {
    const resultado = document.getElementById("resultado")
    resultado.textContent = resultado.textContent + "9";    
}

function sumar(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

function restar(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

function multiplicar(){
    operandoa = resultado.textContent;
    operacion = "x";
    limpiar();
}

function dividir(){
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();
}

function igual(){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}

function borrar(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
            res = parseInt(operandoa) + parseInt(operandob);
            break;
        case "-":
            res = parseInt(operandoa) - parseInt(operandob);
            break;
        case "x":
            res = parseInt(operandoa) * parseInt(operandob);
            break;
        case "%":
            res = parseInt(operandoa) / parseInt(operandob);
            break;
    }

    resultado.textContent = res;
}


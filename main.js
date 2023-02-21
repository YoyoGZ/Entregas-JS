// ----- Declaracion de variables
let cotiza = 0;
let riesgo = prompt("Ingrese,  moto o auto ?");
let cobertura = prompt("Elige,  Cobertura A ó B ?");


// ------ Imputs del Usuario ----- 

if(riesgo == "moto" && cobertura == "A"){
        alert("el costo de tu seguro es de $1.500");
        cotiza = 1500;}
    
    else if(riesgo == "moto" && cobertura == "B"){
        alert("el costo de tu seguro es de $2.500");
        cotiza = 2500}
            
    else if(riesgo == "auto" && cobertura == "A"){
        alert("el costo de tu seguro es de $5.000");
        cotiza = 5000}
               
    else if(riesgo == "auto" && cobertura == "B"){
        alert("el costo de tu seguro es de $8.000");
        cotiza = 8000};

function sumar(){
        let precioFinalSeguro = (cotiza + iva);
        alert(`Precio final con Iva: ${precioFinalSeguro}`);
}

let iva = (cotiza * 0.21)

switch (cotiza){
    case 1500: 
        sumar ();
        break;
    case 2500:
        sumar ();
        break;
    case 5000:
        sumar ();
        break;
    case 8000:
        sumar ();
        break;

    default:
        alert("Cotización incorrecta");
        break;
}
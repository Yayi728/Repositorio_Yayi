let numero1 = prompt("Por favor ingrese el primer numero");
let numero2 = prompt("Por favor ingrese el primer numero");
let numero3 = prompt("Por favor ingrese el primer numero");

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
numero3 = parseInt(numero3)


if (numero1 == numero2 == numero3){
    let cuenta = (numero1 + numero2)*numero3;
    console.log('El resultado de la cuenta es:' + cuenta);
}else{
    console.log('Los numeros ingresados no son diferentes');
}
  /*1-Programa una función que cuente el numero de caracteres de una cadena de texto. miFuncion("Hola Mundo") devolvera 10.*/

 /*const contarLetras = (cadena ="") => 
(!cadena)
 ? prompt("Hola no ingresaste contraseña") 
 : prompt(`lo hiciste bien este ${cadena} tiene ${cadena.length} letras`);

contarLetras();
contarLetras("Hola Hermosa");*/


/*2-Programa una función que te devuelva el texto recortado según el número de caracteres indicados.*/

/*const recortarLetras = (cadena ="", longitud = undefined) =>
(!cadena)
 ? prompt("Hola no ingresaste contraseña")
 :(longitud === undefined)
  ? prompt("Hola no indicaste el numero de letras a recortar")
  : prompt(cadena.slice(0,longitud));

recortarLetras();
recortarLetras("Hola Hola",6);*/


/*3-Programa una función que dad una string te devuelva un Array de textos separados por cierto caracter.*/

/*const cadenaAArrays = (cadena = "", separador = undefined) =>
(!cadena)
? prompt("No ingresaste texto")
: (separador === undefined)
 ? ("No indicastes el separador")
: prompt(cadena.split(separador));

cadenaAArrays("Hola Hermosa eres Chingona", ",");*/


/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

/*const repetirTexto = (texto = "", veces = undefined) =>{
if (!texto) return prompt("No ingresaste texto");

if(veces === undefined) return prompt("No ingresaste el numero de veces a repetir el texto");

if(veces === 0) return prompt("Este es un error");

if(Math.sign(veces) === -1) return prompt("No pueden ser numeros negativos");

for(let i= 1; i<=veces; i++) prompt(`${texto}, ${i}`);

}
repetirTexto("Hola Hermosa!",3);*/

/*5) Programa una función que invierta las palabras de una cadena de texto*/

/*const invertirTexto = (texto = "") =>{
  (!texto) 
  ? prompt("No ingresaste texto")
  : prompt(texto.split("").reverse().join(""));
  
}

invertirTexto("Hola Hermosa");*/

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo*/

/*const textoEnCadena = (cadena="", texto="") => {
    if(!cadena) return prompt("No ingresaste Texto");

    if(!texto) return prompt("No hay texto a evaluar");

    let i = 0,
     contador = 0;

    while(i !== -1){
      i = cadena.indexOf(texto,i);
      if (i!== -1){
        i++;
        contador++;
      }

    } 
    return prompt(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena("Hola chingona, chingona hermosa y chingona!", "chingona");*/

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro)*/


/*const palindromo = (palabra="") => {
 if (!palabra) return prompt("No ingresaste texto");

 palabra = palabra.toLowerCase();
 let alReves = palabra.split("").reverse().join("");

 return (palabra === alReves)
 ?  prompt(`Sí es palindromo ${palabra} Palabra al revés ${alReves}`)
 :  prompt(`No es palindromo ${palabra} Palabra al revés ${alReves}`)
} 
palindromo("Salas");*/

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado*/

/*const eliminarCaracteres = (texto = "",patron = "") =>
 (!texto)
  ? prompt("No ingresaste texto")
   : (!patron)
    ?  prompt("No hay texto a evaluar")
    :  prompt(texto.replace(new RegExp(patron,"ig"),""));

   
    eliminarCaracteres();
    eliminarCaracteres("xy1, xy2,xy3", "[a-x]");*/

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

   /* const numeroAleatorio = () => prompt((Math.round(Math.random() * 100) + 500));

    numeroAleatorio();*/


  /*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro

    /*const capicua = (numero = 0)=> {
     if(!numero) return prompt("No ingresaste número");

     if(typeof numero!=="number")return prompt(`El valor ${numero} ingresado, No es un número`);

     numero = numero.toString(); /*Devuelve una cadena que representa el objeto*/
  /*   let alReves = numero.split("").reverse().join("");

     return (numero === alReves)
     ? prompt(`Sí es capicua Número original ${numero}, Número al revés ${alReves}`)
     : prompt(`No es capicua Número original ${numero}, Número al revés ${alReves}`)
}
 capicua(20023);*/

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)

 /*const Factorial = (numero = undefined) => {
  if(!numero) return prompt("No ingresaste número");

  if(typeof numero!=="number")return prompt(`El valor ${numero} ingresado, No es un número`);

  if(numero === 0 ) return prompt("El numero no puede ser negativo");
   
  if(Math.sign(numero) ===-1) return prompt("El numero no puede ser negativo");

  let factorial = 1;

  for(let i = numero; i>1; i--){
    //factorial = factorial * i;
    factorial *= i;
  }
  return confirm(`El Factorial de ${numero} es ${factorial}`);

 }
 Factorial(3)*/

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)

  /*const numeroPrimo = (numero = undefined) => {
  if(numero === undefined) return prompt("No ingresaste número");

  if(typeof numero!=="number")return prompt(`El valor ${numero} ingresado, No es un número`);

  if(numero === 0 ) return confirm("El numero no puede ser 0");
   
  if(numero === 1 ) return prompt("El numero no puede ser 1");

  if(Math.sign(numero) === -1) return prompt("El numero no puede ser negativo");

   let divisible = false;

   for(let i = 2; i < numero; i++){
    if ((numero % i)===0){
      divisible = true;
      break;
    }
   }
    return (divisible)
    ? prompt(`El número ${numero}, NO es primo`) /*verdadera*/
   /* : prompt(`El número ${numero}, Si es primo`) false

  }

numeroPrimo(13);*/

/*Programa una funcion que determine si el numero es par o impar

const numeroPar = (numero = undefined) =>{
  if(numero === undefined) return prompt("No ingresaste número");

  if(typeof numero!=="number")return prompt(`El valor ${numero} ingresado, No es un número`);

  return((numero % 2) ===0)
  ? prompt(`El número ${numero}, Es Par`) /*verdadera
  : prompt(`El número ${numero}, No es Par`)/* false

  }
  numeroPar(7);*/

/*14- Programa una función para convertir grados Celsius a Fahrenheit y viceversa*/

/*const convertirGrados = (grados = undefined, unidad= undefined) => {
  if(grados === undefined) return prompt("No ingresaste grados a convertir")

  if(typeof grados!== "number") return prompt(`El valor ${grados} ingresado No es un numero`);

  if(unidad === undefined) return prompt("No ingresaste el tipo de grado a convertir");

  if(typeof unidad!== "string") return prompt(`El valor ${unidad} ingresado No es una cadena de texto`);

  if(unidad.length!== 1 || !/(C|F)/.test(unidad)) return prompt("El valor de la unidad no es reconocido");
 
  if(unidad ===  "C"){
    return prompt(`${grados}℃ = ${Math.round((grados * (9/5)) + 32)}℉`);
  }
  if(unidad ===  "F"){
    return prompt(`${grados}℃ = ${Math.round(((grados -32)* (5/9)))}℉`);
  }
}

convertirGrados(100, "F");
convertirGrados(100, "C");*/


/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
/*const convertirBinarioDecimal = (numero = undefined, base = undefined )=>{
  if(numero === undefined) return prompt("No ingresaste el numero a convertir");

  if(base === undefined) return prompt("No ingresaste la base a convertir");

  if(typeof numero!== "number") return prompt(`El valor ${numero} ingresado, No es un número`);

  if(typeof base!== "number") return prompt(`El valor ${base}, No es un número`);

   if (base ===2){
     return prompt(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
   }else if(base === 10) {
    return prompt(`${numero} base ${base} = ${(numero.toString(base))} base 2`);
   }else{
     return prompt("El tipo de base a convertir No es válido");
   }
}

convertirBinarioDecimal(100,2);
convertirBinarioDecimal(4,10);*/


/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/


/*const aplicarDescuento = (monto = undefined, descuento = 0 ) => {
  if(monto === undefined) return prompt("No ingresaste una Monto");

  if(typeof monto!== "number") return prompt(`El valor ${monto} ingresado, No es un número`);

  if(monto ===0) return prompt("Ël monto no puede ser cero");

  if(Math.sign(monto)===-1) return prompt("Ël monto no puede ser negativo");

  if(descuento === undefined) return prompt("No ingresaste el % de Descuento");

  if(typeof descuento!== "number") return prompt(`El valor ${descuento} ingresado, No es un número`);

  if(Math.sign(descuento)===-1) return prompt("El descuento no puede ser negativo");


return prompt(`$${monto} - ${descuento}% = $${monto-((monto*descuento)/100)}`)


}
aplicarDescuento(1000,25);*/


/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020*/
  
const calcularAnios = (fecha = undefined) => {
  if(fecha === undefined) return prompt("No ingresaste una Fecha");

  if(!(fecha instanceof Date)) return prompt(`El valor que ingresaste, No es una fecha valida.`);

  let hoyMenosFecha = new Date().getTime()- fecha.getTime();
  aniosEnMS = 1000 * 60 * 60 * 24 * 365
  aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
  

  return prompt(Math.sign(aniosHumanos) === -1)
  ? prompt(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
  : (Math.sign(aniosHumanos) === 1)
   ? prompt(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`)
   : prompt(`Estamos en el año actual ${fecha.getFullYear()}.`)


}

calcularAnios(new Date(1976,4,23));










/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function ejemplo (s){
    console.log(s.length)
  }
  
  //ejemplo ("hola mundo")


  //Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"

function ejemplo (s){
    console.log(s.substring(0,4))
  }
  
  //ejemplo ("hola mundo")


  //Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function ejemplo (s){
    console.log(s.split(0,3))
  }
  
  //ejemplo("hola que tal")


  //Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function ejemplo (s){
    console.log(s.repeat(3))
  }
  
  //ejemplo(" Hola mundo ")

  //Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const prueba = cadena => cadena.split(""). reverse(). join("");

    let cadena = "hola mundo";

    //console.log ("Cadena:", prueba(cadena));

    //Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena="", texto="") => {
  
    if (!cadena) return console.log('no ingresaste el texto largo');
    
    if (!texto) return console.log('no ingresdaste el texto a evaluar');
    
    let i = 0,
        contador = 0;
    
    while (i!== -1) {
      i = cadena.indexOf(texto, i);
      
      if (i!== -1) {
        i++;
        contador++;
      }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces`);
  }
  
  
  //textoEnCadena("hola mundo adios mundo, te odio mundo, te adoro mundo", "mundo");


  //Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "") => {
    if(!palabra) return console.log("ingresa una palabra");
    
    palabra = palabra.toLowerCase();
    alReves = palabra.split(""). reverse(). join("");
    
    return (palabra === alReves)
    ?console.log(`tu palabra ${palabra} si es palindromo con ${alReves}`)
    :console.log(`tu palabra ${palabra} no es palindromo`);
  }
  
  //palindromo("salas")

  //Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const EliminarCaracteres = (texto="", patron="") =>
(!texto)
? console.log ("inserte un texto")
: (!patron)
  ? console.log("inserte patron")
  : console.log(texto.replace(new RegExp(patron,"ig"),""));

//EliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");


  //9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const ejemplo1 = (min,max) =>{
  let aleatorio = Math.random()*(max-min)+min;
  console.log("Número aleatorio entre 0 y 1:  "+ parseInt(aleatorio))
}

//ejemplo1(501,600)


const ejemplo2 = () => console.log(Math.round((Math.random()*100) +500));

//ejemplo2();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero) => {
  if(!numero) return console.log("ingresa una numero");
   
   alReves = numero.split(""). reverse(). join("");
   
   return (numero === alReves)
   ?console.log(`tu palabra ${numero} si es palindromo con ${alReves}`)
   :console.log(`tu palabra ${numero} no es palindromo`);
 }
 
 //capicua("303")
 
 // Segundo ejemplo
 
 const capicua2 = (numero) => {
   if (!numero) return console.log("no ingresaste un numero");
   if (typeof numero !== "number") return console.log(`Tu ${numero} no es un numero`);
 
 numero = numero.toString();
 let alReves = numero.split("").reverse().join("");
 
 return (numero === alReves)
   ?console.log(`Tu numero "${numero}" si es capicua`)
   :console.log(`Tu numero "${numero}" no es capicua`)
   
 }
 
 
 //capicua2(303); 


 //11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial1 (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return console.log(total); 
}

//factorial1(5)

//segundo ejemplo

const factorial2 = (numero) =>{
  if (numero == undefined) return console.log("no ingresaste un numero");
  if (typeof numero !== "number") return console.log ("no es un numero");
  if (numero === 0) return console.log("no puede ser cero");
  if (Math.sign(numero) === -1) return console.log("no puede ser negativo");
  
  let factorial = 1;
  
  for (let i = numero; i>=1; i--){
    
    factorial = factorial * i;
    // puede escribirse asi --- factorial*= i
  }
  return console.log(`El numero "${numero}" es factorial "${factorial}"`);
  }

//factorial2(5);


//Romano a entero

//Los numeros romanos estan representados por 7 simbolos diferentes: (I, V, X, L, C, D, M)

/**
 * Valor del simbolo
 * I: 1
 * V: 5
 * X: 10
 * L: 50
 * C: 100
 * D: 500
 * M: 1000
 */

//Por ejemplo: 
// 2 esta escrito como II en numeros romanos, solo dos unidades sumadas. 

//12 se ecribe como XII que es simplemente X + II.  

//27 se escribe como XXVII, que es XX + V+ II.

//Casos especiales

/**
 * I se puede colocar antes de V(5) y X(10) para formar 4 y 9.
 * X se puede colocar antes de L(50) y C(100) para formar 40 y 90. 
 * C se puede colocar antes de D(500) y M(1000) para formar 400 y 900.
 */

//Dado un numero romano conviertelo a entero.

/**
 * ENTRADA: s = "III"
 * SALIDA: 3
 * EXPLICACION: III = 3
*/

/**
 * ENTRADA: s = "LVIII"
 * SALIDA: 58
 * EXPLICACION: L = 50, V = 5, III = 3
*/

/**
 * ENTRADA: s = "MCMXCIV"
 * SALIDA: 1994
 * EXPLICACION: M = 1000, CM = 900, XC = 90, IV = 4
*/

//Creamos un diccionario con simbolo y valor

const diccionario = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

//variable donde vamos a ir sumando cada valor
let resultadoFinal = 0;

function romanoAEntero(romano){
    //itermos sobre el numero romano que nos pasan como parametro
    for(let i = 0; i < romano.length; i++){
        //Obtenemos el valor ACTUAL dependiendo del simbolo de el objeto diccionario
       const valorActual = diccionario[romano[i]];

       //Obtenemos el valor SIGUIENTE dependiendo del simbolo de el objeto diccionario
       const valorSiguiente = i + 1 < romano.length ? diccionario[romano[i + 1]]: 0;

       //validamos los valores. Si 
       if(valorActual < valorSiguiente){
        resultadoFinal -= valorActual;
       }else{
        resultadoFinal += valorActual;
       }
        
    }

    console.log(resultadoFinal);
    
    
}

romanoAEntero("IV");//3
romanoAEntero("LVIII");//58
romanoAEntero("MCMXCIV")//1994

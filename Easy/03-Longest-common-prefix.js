//Prefijo comun mas largo
//Escriba una funcion para encontrar la cadena de prefijo comun mas larga entre una matriz de cadenas.

//Si no hay un prefijo comun, devuelve una cadena vacia "".

//Ejemplo:
/**
 * Entrada: strs = ["flor","flujo","vuelo"]
 * Salida: "fl"
*/

/**
 * Entrada: strs = ["dog","racecar","car"]
 * Salida: ""
*/

function prefijoLargo(strs){
    //variable para almacenar las dos primeras letras de cada sting
    let dosPrimerasLetras = "";

    //Iteramos sobre el array
    for(let i = 0; i < strs.length; i++){
        //Preguntamos si el array tiene solo un elemento
        if(strs.length === 1){
            dosPrimerasLetras = strs[i];
        }

        //Iteramos nuevamente el array ahora empezando desde la posicion 1
        for(let x = i + 1; x < strs.length; x++){
            //Preguntamos si el substring en I es igual a el substring en X
            if(strs[i].substring(0, 1) === strs[x].substring(0, 1)){
                dosPrimerasLetras = strs[i].substring(0, 1);
            }

            if(strs[i].substring(0, 2) === strs[x].substring(0, 2)){
               dosPrimerasLetras = strs[i].substring(0, 2);
            }
    }
    
}

console.log(dosPrimerasLetras); 
}

prefijoLargo(["flower","flow","flight"])// salida: fl
prefijoLargo(["dog","racecar","car"])// salida: ""
prefijoLargo(["a"]);// salida: a
prefijoLargo([""]);// salida: ""
prefijoLargo(["","b"])// salida: ""
prefijoLargo(["ab","a"])// salida: "a"
prefijoLargo(["reflower","flow","flight"])// salida: "fl"
prefijoLargo(["paco", "pancho", "Martha"])// salida: "pa"


//Dada un amatriz ordenada de numeros enteros distintos y un valor objetivo, devuelve el indice si se encuentra el objetivo. De lo contrario, devuelva el indice donde estaria si se insertara en orden.

//Debe escribir un algoritmo con 0(log n) complegidad en tiempo de ejecucion

/**
 * Ejemplo 1:
 * Entrada: numeros = [1,3,5,6], objetivo = 5
 * 
 * Salida: 2
 */

/**
 * Ejemplo 2:
 * Entrada: numeros = [1,3,5,6], objetivo = 2
 * 
 * Salida: 1
 */

/**
 * Ejemplo 3:
 * Entrada: numeros = [1,3,5,6], objetivo = 7
 * 
 * Salida: 4
 */


function serachPosition(nums, target){
    //variable donde vamos a guardar el indice de el target
    let indice;

    //iteramos sobre el array
   for(let i = 0; i < nums.length; i++){
    //Obtenemos cada elemento de el array
    const element = nums[i];

    //vreificamos si el target se encuentra dentro de el array
    if(nums.includes(target)){
        //Si esto es verdad ahora preguntamos si elemento es igual a el target
        if(element === target){
            //Si esto es vardad devuelveme el indice correspondiente
            indice = i;
        }
        //Si el target no se encuentra dentro de el array
    }else{
        //Introducimos el target a el array de numeros
        nums.push(target);

        //Ordenamos nuevamente el array
        nums.sort((a, b) => a - b);

        //Devuelve el indice de el elelmento que sea igual a el target
        indice = i
    }

   }
   console.log(indice);
}

serachPosition([1,3,5,6], 5);
serachPosition([1,3,5,6], 2);
serachPosition([1,3,5,6], 7);
serachPosition([1,3,5,6], 0);
serachPosition([2,5], 1)
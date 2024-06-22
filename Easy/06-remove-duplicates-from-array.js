//Eliminar duplicados de una matriz ordenada 

//Dada una matriz de enteros 'nums' ordenada en ORDEN NO DESCENDIENTE, elimine los duplicados en le lugar de modo que cada elemeto unico aparezca solo una vez. El orden relativo de los elementos unicos debe mantenerse IGUAL. Luego devuelve el numero de elemntos unicos en 'nums'.

//Considere la cantidad de elemntos unicos de 'nums' a 'k'. Para ser aceptado debe hacer los siguiente:

/**
 *Cambie la matriz 'nums' de modo que los primeros 'k' elementos 'nums' contengan los elementosunicos en el orden que estaban presentes 'nums' inicialmente. Los elementos restantes de 'nums' no son importantes al igual que el tamaño de 'nums'.

 * Devolver 'k'
*/

/**
 * Ejemplo 1:
 * 
 * Entrada: nums = [1, 1, 2]
 * Salida: 2, nums = [1, 2, _]
 * Explicacion:  Su función debería devolver k = 2, siendo los dos primeros elementos de nums 1 y 2 respectivamente. 
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
 */


/**
 * Ejemplo 2:
 * 
 * Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
 * Salida: 5, nums = [0,1,2,3,4,_,_,_,_, _]
 * Explicacion:  Su función debería     devolver k = 5, siendo los dos primeros elementos de nums 0, 1, 2, 3, 4 respectivamente. 
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
 */


function removeDuplicates(nums){
    //Inicializamos k en 0 para ir incrementando cada que en la iteracion se encuentre un elemento unico.
    let k = 0;

    //Itreramos sobre nums.
    for(let i = 0; i < nums.length; i++){
        //Obtenemos el elemento actual de el array(nums).
        const numeroActual = nums[i];

        //Obtenemos el elemento siguiente de el array(nums).
        const numeroSigiente = nums[i + 1];

        //Comparamos ambos elementos que sean distintos.
        if(numeroActual !== numeroSigiente){
            //Si la condicion se cumple asignamos los elemento de i a k
            nums[k] = nums[i];

            //A la variable k la incrementamos de 1 en 1
            k += 1;
        }
    }

    console.log(k);
}

removeDuplicates([1, 1, 2]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
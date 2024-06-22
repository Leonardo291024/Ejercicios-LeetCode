//Eliminar elemento

//Dada una matriz de numeros enteros (nums) y un numero entero (val), elimine todas las apariciones de (val) en (nums). El orden de los elementos puede cambiarse. Luego devuelve el numero de elementos en (nums) los que son iguales a (val).

//Considere la cantidad de elementos en los que no son numeros iguales, para ser aceptado, debe hacer lo siguiente: (val), (k)

/**
 * Cambie la mattriz de (nums) de manera que los primeros (k) elementos (nums) contengan los elementos que no sean iguales a (val). Los elementos restantes de (nums) no son importantes al igual que el tamaño de (nums).
 * 
 * Devolver (k).
 */

/**
 * Ejemplo 1:
 * 
 * Entrada: nums = [3,2,2,3], val 3
 * Salida: 2, nums = [2,2,_,_]
 * Explicacion: Su función debe devolver k = 2, siendo los dos primeros elementos de nums 2.
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
 */

/**
 * Ejemplo 2:
 * 
 * Entrada: nums = [0,1,2,2,3,0,4,2], val = 2
 * Salida: 5, nums = [0,1,4,0,3,_,_,_]
 * Explicacion: Su función debe devolver k = 5, los primeros cinco elementos de nums contienen 0, 0, 1, 3 y 4.
Tenga en cuenta que los cinco elementos se pueden devolver en cualquier orden.
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
 */

function removeElement(nums, val){
    //Inicializamos una variable (k) en 0 para increementarla
    let k = 0;

    //Iteramos sobre (nums).
    for(let i = 0; i < nums.length; i++){
        //Obtenemos el elemento actual de el array.
        const elementoActual = nums[i];

        //Comparamos el elemeto actual con el parametro (val).
        if(elementoActual !== val){
            //Si es verdad entonces incremetamos a la variable (k) cada que se cumpla.
            nums[k] = nums[i];
            k += 1
        }
    }

    console.log(k);
}

removeElement([3,2,2,3], 3);
removeElement([0,1,2,2,3,0,4,2], 2);
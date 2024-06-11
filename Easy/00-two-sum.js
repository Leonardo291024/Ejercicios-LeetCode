//Two sum
//Dada una matriz de numeros enteros (nums) y un numero entero (target), devuelva indices de los dos numeros de manera que sumen (target).

//Ejemplo:

//Entrada: nums [2,7,11,15], target = 9

//Salida: [0,1]

//Explicacion: Debido a que nums[0] + nums[1] === 9, devolvemos [0,1].

function twoSum(nums, target){
    const indiceResult = [];
    for(let i = 0; i < nums.length; i++){
            let diferencia = target - nums[i];

            //Encontar el indice de la direncia
            const diferenciaIndex = nums.indexOf(diferencia);

            //Asegurarse que la direncia no este en la misma posicion que i
            if(diferenciaIndex !== -1 && diferenciaIndex !== i){
                indiceResult.push(i, diferenciaIndex);
              break;//Rompe el bucle despues de encontar el primer par
            }

        }
    

    console.log(indiceResult);
}




twoSum([2,7,11,15], 9);//[0,1]
twoSum([3,2,4], 6);//[1,2]
twoSum([3,3], 6);//[0,1]
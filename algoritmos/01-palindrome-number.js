//Dado un numero entero x, devuelve true si es palindromo, y false si es de otra manera.

//Ejemplo: 
//Entrada: 121
//salida: true
//Explicacion: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda

//Entrada: -121
//salida: false
//Explicacion: de izquierda a derecha se lee -121. De derecha a izquierda se le 121-, por tanto no es palindromo.

function isPalindrome(number){
    //Convertimos el numero a una cadena de texto
    const numberAString = number.toString();

    //creamos una variable donde ira el numero inverso
    let numberInverso = "";

    //Recorremos el numero ahora de tipo string pero de forma inversa
   for(let j = numberAString.length -1; j>= 0; j--){
        //asignamos cada letra a la variable numberInverso
        numberInverso += numberAString[j];//Ahora el numero de lee de forma inversa
}

    //validamos que ambos strings sean iguales.
    const validacion = numberAString === numberInverso ? true: false;
    console.log(validacion);

}
isPalindrome(121);//true
isPalindrome(-121);//false
isPalindrome(10);//false

//Prentesis validos
//Dada una cadena de string (s) que contiene solo los caracteres '(', ')', '{', '}' y determine si la cadena '[' de ']' entrada es valida.

//Una cadena de entrada es valida si: 

/**
 * los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
 * los corchetes abiertos deben cerrarse en el orden correcto.
 * cada corchete cerrado tiene un corchete abierto correspondiente del mismo tipo.
 */

/**
 * Ejemplo1:
 * Entrada: s = "()"
 * salida: true
 */

/**
 * Ejemplo2 
 * Entrada: s = "()[]{}"
 * salida: true
 */

/**
 * Ejemplo3
 * Entrada: s = "(]"
 * salida: false
 */

const diccionario = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}

function validarParentesis(s){
    //Creamos una varible pila que sera un array para almacenar los caracteres abiertos
    const pila = [];
    //Inicializamos una variable que validara al final si la cadena de caracteres es valida
    let validacion = true;

    //Preguntamos si la longitud de el parametro s es igual a 1 osea que solo hay un caracter
    //si esto es verdad validamos la cadena de caracteres a false.
    if(s.length === 1){
        validacion = false;
    }

    //Recorremos por cada uno de los caracteres de s
   for(let i = 0; i < s.length; i++){
    //guardamos cada iteracion (caracter) en una variable
    const charActual = s[i];
    
    //Preguntamos si el diccionario contiene el caracter actual de la iteracion
    //En este caso solo estamos evaluando los caracteres de apertura.
    if(diccionario[charActual]){
        //Introducimos el caracter de apertura si es que existe en el diccionario a la pila
        pila.push(charActual);

    }else{
        //Si el caracter no se encuentra lo eliminamos de la pila
        const charTop = pila.pop();
        
        if(diccionario[charTop] !== charActual){
             validacion = false;
             break;
        }

    }
   }

   if(pila.length >= 1){
    validacion = false;
}

   console.log(validacion);
}
validarParentesis("()[]{}");//true
validarParentesis("()");//true
validarParentesis("({[]})");//true
validarParentesis("{()}")//true
validarParentesis("{[]}")//true
validarParentesis("(([]){})")//true

validarParentesis("(]")//false
validarParentesis("[")//false
validarParentesis("((");//false
validarParentesis("([")//false
validarParentesis("(]");//false
validarParentesis("()}")//false
validarParentesis("()]")//false
validarParentesis("({[)]}");//false
validarParentesis("([]){")//false




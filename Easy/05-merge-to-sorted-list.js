//Fusionar dos Listas ordenadas

//Se le proporciona los encabezados de dos listas vinculadas ordenadas list1 y list2.

//Combine las dos listas en una lista ORDENADA. La lista debe hacerse empalmando los nodos de las dos primeras listas.

//Devuelve el encabezado de la lista enlazada fusionada.

/**
 * Ejemplo1:
 * Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
 * salida: [1,1,2,3,4,4]
 * 
 * 
 * Ejemplo2:
 * Entrada: lista1 = [], lista2 = [0]
 * salida: [0]
 * 
 * Ejemplo3:
 * Entrada: lista1 = [], lista2 = []
 * salida: []
 */

class ListNode{};

function mergeLists(list1, list2){
    //crear un nodo ficticio este servira como la cabeza de la nueva lista fusionada.
    const newHead = new ListNode();

    //esta variable apunta a el nodo ficticio. Se utilizara para recorrer y construir la nueva lista
    let nuevaLista = newHead;

    //Inicia un bucle que continuara mientras list1 y list2 no sean nulos, es decir, mientras queden elementos en ambas listas.
    while(list1 != null && list2 !== null){

        //Compara los valores de el nodo actual de list1 y list2
        if(list1.val < list2.val){
            //El siguiente nodo de nuevaLista sera el nodo actual de list1
            nuevaLista.next = list1;
        }else{
            nuevaLista.next = list2;
        }

        //ahora nuevaLista apunta al ultimo nodo añadido a la nueva lista.
        nuevaLista = nuevaLista.next;
    }

    //verifica si list1 no es nulo
    if(list1 !== null){
        //Significa que todaviahay nodos restantes en list1
        nuevaLista.next = list1;
    }else{
        //De lo contrario enlaza el resto de list2 al dinal de la nueva lista.
        nuevaLista.next = list2;
    }

    console.log(newHead.next); 
}

mergeLists([1,2,4], [1,3,4]);
//mergeLists([], [0]);
//mergeLists([], []);
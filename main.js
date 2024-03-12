function listZoo(){
    const zoo = ["elefante", "avestruz", "girafa", "león", "capibara", "zebra", "pingüino"];
    for (i = zoo.length; i>0; i--){
        console.log(zoo[i-1]);
    }
}

const bandas = [
    "The Beatles",
    "Queen",
    "Led Zeppelin",
    "Pink Floyd",
    "The Rolling Stones",
    "Nirvana",
    "U2",
    "The Who",
    "AC/DC",
    "Coldplay",
    "Red Hot Chili Peppers",
    "Bee Gees"
];

function actualizarBandas(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (i=0; i<bandas.length; i++){
        lista.innerHTML += i+1 + " - " + bandas[i] + "<br>";

    }

}

// - Opción de borrar el primero (.unshift() )
function borrarPrimero(){
    bandas.shift();
    actualizarBandas();
}

// - Opción de borrar el último (.pop() )
function borrarUltimo(){
    bandas.pop();
    actualizarBandas();
}

// - Opción de borrar o cambiar, añadir un índice determinado (.splice())
function borrarCambiar(){
    let userNumber = prompt("Escribe el nº de la banda que quieres borrar o cambiar");
    //lista está vacía
    if (bandas.length == 0){
        alert("No hay ninguna banda en la lista para borrar o cambiar.");
    //Números válidos
    } else if (userNumber-1 > 0 && userNumber-1  < bandas.length) {
        let userAction = prompt("¿Quieres borrar o cambiar esta banda?");
        switch (userAction.toLowerCase()) {
        case "borrar":
            bandas.splice(userNumber-1 , 1);
        break;
        case "cambiar":
            let nuevo = prompt("Escribe el nuevo nombre para esta banda");
            bandas.splice(userNumber-1 , 1, nuevo);
        break;
        default:
            alert("Respuesta inválida, escribe 'borrar' o 'cambiar'");
        } 
        
    // Input no válido
    } else {
        alert("Número inválido");
    }

    actualizarBandas();
}

// - Opción de buscar un grupo y que te diga el índice (.indexOf() )
function ranking(){
    let userBand = prompt("Escribe el nombre de la banda y te decimos el ranking");
    if (bandas.length == 0){
        console.log("entra");
        alert("No hay ninguna banda en la lista.");
    } else {
        //NOT FOUND
        let index = bandas.indexOf(userBand);
        if (index == -1){
            alert("No se ha encontrado ninguna banda con ese nombre.");
        //YES FOUND
        } else alert("El ranking para esa banda es " + (index +1) + ".");
     
    }
     actualizarBandas();
}


// - Opción de mostrar uno según su índice
function banda(){
    let userRanking = prompt("Escribe el ranking y te diremos la banda que está en esa posición");
    if (bandas.length == 0){
        alert("No hay ninguna banda en la lista.");
    }
    else if (userRanking > 0 && userRanking  < bandas.length) {
        alert("La banda en ese ranking es: " + bandas[userRanking-1] + ".")
    } else {
        alert("No hay ningún ranking en ese número");
    }
     actualizarBandas();
}

// - Opción de mostrar todos mediante .foreach()
function mostrarBandas(){
   actualizarBandas();
}
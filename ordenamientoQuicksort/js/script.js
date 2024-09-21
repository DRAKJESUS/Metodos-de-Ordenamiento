let registros = [];

function ingresarDatos() {
    let numElementos = parseInt(document.getElementById("numElementos").value);
    let elementosArray = document.getElementById("elementosArray").value;
    let orden = document.querySelector('input[name="orden"]:checked').value;
    let a = elementosArray.split(',').map(elemento => parseInt(elemento.trim()));

    let registro = {
        numElementos: numElementos,
        array: a.slice(),
        orden: orden
    };
    registros.push(registro);

    document.getElementById("listaOriginal").innerHTML = "<br>";
    imprimir("listaOriginal", a);
    
    if (orden === "ascendente") {
        quicksortAscendente(a, 0, a.length - 1);
    } else if (orden === "descendente") {
        quicksortDescendente(a, 0, a.length - 1);
    } else {
        alert("Opción de orden no válida. Se ordenará de forma ascendente por defecto.");
        quicksortAscendente(a, 0, a.length - 1);
    }

    document.getElementById("listaOrdenada").innerHTML = "<br>";
    imprimir("listaOrdenada", a);
}

function imprimir(idLista, a) {
    let listaHTML = document.getElementById(idLista);
    for (let c in a) {
        listaHTML.innerHTML += "<li>" + a[c] + "</li>";
    }
}

function quicksortAscendente(arr, low, high) {
    if (low < high) {
        let pi = partitionAscendente(arr, low, high);

        quicksortAscendente(arr, low, pi - 1);
        quicksortAscendente(arr, pi + 1, high);
    }
}

function quicksortDescendente(arr, low, high) {
    if (low < high) {
        let pi = partitionDescendente(arr, low, high);

        quicksortDescendente(arr, low, pi - 1);
        quicksortDescendente(arr, pi + 1, high);
    }
}

function partitionAscendente(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function partitionDescendente(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] > pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

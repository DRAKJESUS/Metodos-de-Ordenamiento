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
        shellSortAscendente(a);
    } else if (orden === "descendente") {
        shellSortDescendente(a);
    } else {
        alert("Opción de orden no válida. Se ordenará de forma ascendente por defecto.");
        shellSortAscendente(a);
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

function shellSortAscendente(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
}

function shellSortDescendente(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] < temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
}

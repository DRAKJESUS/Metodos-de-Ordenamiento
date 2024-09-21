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
        ordenarInsercionAscendente(a);
    } else if (orden === "descendente") {
        ordenarInsercionDescendente(a);
    } else {
        alert("Opción de orden no válida. Se ordenará de forma ascendente por defecto.");
        ordenarInsercionAscendente(a);
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

function ordenarInsercionAscendente(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let clave = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] > clave) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = clave;
    }
}

function ordenarInsercionDescendente(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let clave = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] < clave) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = clave;
    }
}

let registros = [];

function realizarBusquedaBinaria() {
    let numElementos = parseInt(document.getElementById("numElementos").value);
    let elementosArray = document.getElementById("elementosArray").value;
    let valorBusqueda = parseInt(document.getElementById("valorBusqueda").value);
    let orden = document.querySelector('input[name="orden"]:checked').value;

    let listaElementos = elementosArray.split(',').map(elemento => parseInt(elemento.trim()));

    let registro = {
        numElementos: numElementos,
        array: listaElementos.slice(),
        valorBusqueda: valorBusqueda,
        orden: orden
    };
    registros.push(registro);

    let listaOrdenada;

    if (orden === "ascendente") {
        listaOrdenada = listaElementos.slice().sort((a, b) => a - b);
    } else if (orden === "descendente") {
        listaOrdenada = listaElementos.slice().sort((a, b) => b - a);
    }

    document.getElementById("listaOriginal").innerHTML = "<br>";
    imprimir("listaOriginal", listaElementos);

    document.getElementById("listaOrdenada").innerHTML = "<br>";
    imprimir("listaOrdenada", listaOrdenada);

    let resultado = buscarBinaria(listaOrdenada, valorBusqueda);
    document.getElementById("mensajeResultado").innerText = resultado;
}

function imprimir(idLista, a) {
    let listaHTML = document.getElementById(idLista);
    listaHTML.innerHTML += "<h3>Lista</h3><ul>";
    for (let c in a) {
        listaHTML.innerHTML += "<li>" + a[c] + "</li>";
    }
    listaHTML.innerHTML += "</ul>";
}

function buscarBinaria(lista, valor) {
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === valor) {
            return `El valor ${valor} se encuentra en la posición ${medio + 1} de la lista.`;
        } else if (lista[medio] < valor) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return `El valor ${valor} no se encuentra en la lista.`;
}

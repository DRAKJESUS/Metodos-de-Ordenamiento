let registros = [];

function realizarBusqueda() {
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

    let resultado = buscarSecuencial(listaOrdenada, valorBusqueda);
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

function buscarSecuencial(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return `El valor ${valor} se encuentra en la posición ${i + 1} de la lista.`;
        }
    }

    return `El valor ${valor} no se encuentra en la lista.`;
}

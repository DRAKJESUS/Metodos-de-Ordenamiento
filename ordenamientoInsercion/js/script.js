function ingresarDatos() {
    let n = parseInt(prompt("Número de elementos?"));
    let a = new Array(n);

    for (let c = 0; c < n; c++) {
        a[c] = parseInt(prompt("Ingrese Elemento " + (c + 1)));
    }

    console.log("************LISTA ORIGINAL***************");
    imprimir(a);
    
    ordenarInsercion(a);

    console.log("*************LISTA ORDENADA**************");
    imprimir(a);
}

function imprimir(a) {
    for (let c in a) {
        console.log(a[c]);
    }
}

function ordenarInsercion(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let key = a[i];
        let j = i - 1;

   
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }
}


ingresarDatos();
